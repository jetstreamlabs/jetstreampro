<script setup>
const displayingToken = ref(false)
const managingPermissionsFor = ref(null)
const apiTokenBeingDeleted = ref(null)

const props = defineProps(['tokens', 'availablePermissions', 'defaultPermissions'])
const { tokens, availablePermissions } = toRefs(props)

const createApiTokenForm = useForm({
	name: '',
	permissions: props.defaultPermissions,
})
const updateApiTokenForm = useForm({
	permissions: [],
})
const deleteApiTokenForm = useForm()

const createApiToken = () => {
	const { href } = useRoutes('api-tokens.store')
	createApiTokenForm.post(href.value, {
		preserveScroll: true,
		onSuccess: () => {
			displayingToken.value = true
			createApiTokenForm.reset()
		},
	})
}

const manageApiTokenPermissions = (token) => {
	updateApiTokenForm.permissions = token.abilities
	managingPermissionsFor.value = token
}

const updateApiToken = () => {
	const { href } = useRoutes('api-tokens.update', { token: managingPermissionsFor.value.id })
	updateApiTokenForm.put(href.value, {
		preserveScroll: true,
		preserveState: true,
		onSuccess: () => (managingPermissionsFor.value = null),
	})
}

const confirmApiTokenDeletion = (token) => {
	apiTokenBeingDeleted.value = token
}

const deleteApiToken = () => {
	const { href } = useRoutes('api-tokens.destroy', { token: apiTokenBeingDeleted.value.id })
	deleteApiTokenForm.delete(href.value, {
		preserveScroll: true,
		preserveState: true,
		onSuccess: () => (apiTokenBeingDeleted.value = null),
	})
}
</script>

<template>
	<div>
		<!-- Generate API Token -->
		<JetFormSection @submitted="createApiToken">
			<template #title> Create API Token </template>

			<template #description>
				API tokens allow third-party services to authenticate with our application on your behalf.
			</template>

			<template #form>
				<!-- Token Name -->
				<div class="col-span-6 sm:col-span-4">
					<JetLabel for="name" value="Name" />
					<JetInput id="name" type="text" class="block w-full mt-1" v-model="createApiTokenForm.name" autofocus />
					<JetInput-error :message="createApiTokenForm.errors.name" class="mt-2" />
				</div>

				<!-- Token Permissions -->
				<div class="col-span-6" v-if="availablePermissions.length > 0">
					<JetLabel for="permissions" value="Permissions" />

					<div class="grid grid-cols-1 gap-4 mt-2 md:grid-cols-2">
						<div v-for="permission in availablePermissions" :key="permission">
							<label class="flex items-center">
								<JetCheckbox :value="permission" v-model:checked="createApiTokenForm.permissions" />
								<span class="ml-2 text-sm text-gray-600">{{ permission }}</span>
							</label>
						</div>
					</div>
				</div>
			</template>

			<template #actions>
				<JetActionMessage :on="createApiTokenForm.recentlySuccessful" class="mr-3"> Created. </JetActionMessage>

				<JetButton :class="{ 'opacity-25': createApiTokenForm.processing }" :disabled="createApiTokenForm.processing">
					Create
				</JetButton>
			</template>
		</JetFormSection>

		<div v-if="tokens.length > 0">
			<JetSectionBorder />

			<!-- Manage API Tokens -->
			<div class="mt-10 sm:mt-0">
				<JetActionSection>
					<template #title> Manage API Tokens </template>

					<template #description> You may delete any of your existing tokens if they are no longer needed. </template>

					<!-- API Token List -->
					<template #content>
						<div class="space-y-6">
							<div class="flex items-center justify-between" v-for="token in tokens" :key="token.id">
								<div>
									{{ token.name }}
								</div>

								<div class="flex items-center">
									<div class="text-sm text-gray-400" v-if="token.last_used_ago">
										Last used {{ token.last_used_ago }}
									</div>

									<button
										class="ml-6 text-sm text-gray-400 underline cursor-pointer"
										@click="manageApiTokenPermissions(token)"
										v-if="availablePermissions.length > 0">
										Permissions
									</button>

									<button class="ml-6 text-sm text-red-500 cursor-pointer" @click="confirmApiTokenDeletion(token)">
										Delete
									</button>
								</div>
							</div>
						</div>
					</template>
				</JetActionSection>
			</div>
		</div>

		<!-- Token Value Modal -->
		<JetDialogModal :show="displayingToken" @close="displayingToken = false">
			<template #title> API Token </template>

			<template #content>
				<div>Please copy your new API token. For your security, it won't be shown again.</div>

				<div
					class="px-4 py-2 mt-4 font-mono text-sm text-gray-500 bg-gray-100 rounded"
					v-if="$page.props.jetstream.flash.token">
					{{ $page.props.jetstream.flash.token }}
				</div>
			</template>

			<template #footer>
				<JetSecondaryButton @click="displayingToken = false"> Close </JetSecondaryButton>
			</template>
		</JetDialogModal>

		<!-- API Token Permissions Modal -->
		<JetDialogModal :show="managingPermissionsFor" @close="managingPermissionsFor = null">
			<template #title> API Token Permissions </template>

			<template #content>
				<div class="grid grid-cols-1 gap-4 md:grid-cols-2">
					<div v-for="permission in availablePermissions" :key="permission">
						<label class="flex items-center">
							<JetCheckbox :value="permission" v-model:checked="updateApiTokenForm.permissions" />
							<span class="ml-2 text-sm text-gray-600">{{ permission }}</span>
						</label>
					</div>
				</div>
			</template>

			<template #footer>
				<JetSecondaryButton @click="managingPermissionsFor = null"> Cancel </JetSecondaryButton>

				<JetButton
					class="ml-2"
					@click="updateApiToken"
					:class="{ 'opacity-25': updateApiTokenForm.processing }"
					:disabled="updateApiTokenForm.processing">
					Save
				</JetButton>
			</template>
		</JetDialogModal>

		<!-- Delete Token Confirmation Modal -->
		<JetConfirmationModal :show="apiTokenBeingDeleted" @close="apiTokenBeingDeleted = null">
			<template #title> Delete API Token </template>

			<template #content> Are you sure you would like to delete this API token? </template>

			<template #footer>
				<JetSecondaryButton @click="apiTokenBeingDeleted = null"> Cancel </JetSecondaryButton>

				<JetDangerButton
					class="ml-2"
					@click="deleteApiToken"
					:class="{ 'opacity-25': deleteApiTokenForm.processing }"
					:disabled="deleteApiTokenForm.processing">
					Delete
				</JetDangerButton>
			</template>
		</JetConfirmationModal>
	</div>
</template>
