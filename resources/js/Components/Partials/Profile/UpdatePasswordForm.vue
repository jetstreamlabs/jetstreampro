<script setup>
const current_password = ref()
const password = ref()

const form = useForm({
	current_password: '',
	password: '',
	password_confirmation: '',
})
const updatePassword = () => {
	const { href } = useRoutes('user-password.update')

	form.put(href.value, {
		errorBag: 'updatePassword',
		preserveScroll: true,
		onSuccess: () => form.reset(),
		onError: () => {
			if (form.errors.password) {
				form.reset('password', 'password_confirmation')
				password.value.input.focus()
			}

			if (form.errors.current_password) {
				form.reset('current_password')
				current_password.value.input.focus()
			}
		},
	})
}

defineExpose({ password, current_password })
</script>

<template>
	<JetFormSection @submitted="updatePassword">
		<template #title> Update Password </template>

		<template #description> Ensure your account is using a long, random password to stay secure. </template>

		<template #form>
			<div class="col-span-6 sm:col-span-4">
				<JetLabel for="current_password" value="Current Password" />
				<JetInput
					id="current_password"
					type="password"
					class="block w-full mt-1"
					v-model="form.current_password"
					ref="current_password"
					autocomplete="current-password"
				/>
				<JetInput-error :message="form.errors.current_password" class="mt-2" />
			</div>

			<div class="col-span-6 sm:col-span-4">
				<JetLabel for="password" value="New Password" />
				<JetInput
					id="password"
					type="password"
					class="block w-full mt-1"
					v-model="form.password"
					ref="password"
					autocomplete="new-password"
				/>
				<JetInput-error :message="form.errors.password" class="mt-2" />
			</div>

			<div class="col-span-6 sm:col-span-4">
				<JetLabel for="password_confirmation" value="Confirm Password" />
				<JetInput
					id="password_confirmation"
					type="password"
					class="block w-full mt-1"
					v-model="form.password_confirmation"
					autocomplete="new-password"
				/>
				<JetInput-error :message="form.errors.password_confirmation" class="mt-2" />
			</div>
		</template>

		<template #actions>
			<JetActionMessage :on="form.recentlySuccessful" class="mr-3"> Saved. </JetActionMessage>

			<JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing"> Save </JetButton>
		</template>
	</JetFormSection>
</template>
