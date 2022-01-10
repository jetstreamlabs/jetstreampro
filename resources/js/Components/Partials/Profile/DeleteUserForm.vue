<script setup>
const confirmingUserDeletion = ref(false)
const password = ref()

const form = useForm({
	password: '',
})

const confirmUserDeletion = () => {
	confirmingUserDeletion.value = true
	setTimeout(() => password.value.input.focus(), 250)
}

const deleteUser = () => {
	const { href } = useRoutes('current-user.destroy')
	form.delete(href.value, {
		preserveScroll: true,
		onSuccess: () => closeModal(),
		onError: () => password.value.input.focus(),
		onFinish: () => form.reset(),
	})
}

const closeModal = () => {
	confirmingUserDeletion.value = false
	form.reset()
}

defineExpose({ password })
</script>

<template>
	<JetActionSection>
		<template #title> Delete Account </template>

		<template #description> Permanently delete your account. </template>

		<template #content>
			<div class="max-w-xl text-sm text-gray-600">
				Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your
				account, please download any data or information that you wish to retain.
			</div>

			<div class="mt-5">
				<JetDangerButton @click="confirmUserDeletion"> Delete Account </JetDangerButton>
			</div>

			<!-- Delete Account Confirmation Modal -->
			<JetDialogModal :show="confirmingUserDeletion" @close="closeModal">
				<template #title> Delete Account </template>

				<template #content>
					Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will
					be permanently deleted. Please enter your password to confirm you would like to permanently delete your
					account.

					<div class="mt-4">
						<JetInput
							type="password"
							class="block w-3/4 mt-1"
							placeholder="Password"
							ref="password"
							v-model="form.password"
							@keyup.enter="deleteUser"
						/>

						<JetInput-error :message="form.errors.password" class="mt-2" />
					</div>
				</template>

				<template #footer>
					<JetSecondaryButton @click="closeModal"> Cancel </JetSecondaryButton>

					<JetDangerButton
						class="ml-2"
						@click="deleteUser"
						:class="{ 'opacity-25': form.processing }"
						:disabled="form.processing"
					>
						Delete Account
					</JetDangerButton>
				</template>
			</JetDialogModal>
		</template>
	</JetActionSection>
</template>
