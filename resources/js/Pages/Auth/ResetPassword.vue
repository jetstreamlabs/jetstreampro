<script setup>
const props = defineProps({
	email: String,
	token: String,
})

const form = useForm({
	token: props.token,
	email: props.email,
	password: '',
	password_confirmation: '',
})

const submit = () => {
	form.post(useRoutes('password.update'), {
		onStart: () => form.clearErrors(),
		onFinish: () => form.reset('password', 'password_confirmation'),
	})
}
</script>

<template>
	<Head :title="__('Reset Password')" />

	<JetAuthenticationCard>
		<template #logo>
			<JetAuthenticationCard-logo />
		</template>

		<JetValidationErrors class="mb-4" />

		<form @submit.prevent="submit">
			<div>
				<JetLabel for="email" :value="__('Email')" />
				<JetInput id="email" type="email" class="block w-full mt-1" v-model="form.email" required autofocus />
			</div>

			<div class="mt-4">
				<JetLabel for="password" :value="__('Password')" />
				<JetInput
					id="password"
					type="password"
					class="block w-full mt-1"
					v-model="form.password"
					required
					autocomplete="new-password"
				/>
			</div>

			<div class="mt-4">
				<JetLabel for="password_confirmation" :value="__('Confirm Password')" />
				<JetInput
					id="password_confirmation"
					type="password"
					class="block w-full mt-1"
					v-model="form.password_confirmation"
					required
					autocomplete="new-password"
				/>
			</div>

			<div class="flex items-center justify-end mt-4">
				<JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
					{{ __('Reset Password') }}
				</JetButton>
			</div>
		</form>
	</JetAuthenticationCard>
</template>
