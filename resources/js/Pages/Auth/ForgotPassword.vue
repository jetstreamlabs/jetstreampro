<script setup>
const props = defineProps({
	status: String,
})

const form = useForm({
	email: '',
})

const submit = () => {
	form.post(useRoutes('password.email'), {
		onStart: () => form.clearErrors(),
		onSuccess: () => form.reset('email'),
	})
}
</script>

<template>
	<Head title="Forgot Password" />

	<JetAuthenticationCard>
		<template #logo>
			<JetAuthenticationCard-logo />
		</template>

		<div class="mb-4 text-sm text-gray-600">
			Forgot your password? No problem. Just let us know your email address and we will email you a password reset link
			that will allow you to choose a new one.
		</div>

		<div v-if="props.status" class="mb-4 text-sm font-medium text-green-600">
			{{ props.status }}
		</div>

		<JetValidationErrors class="mb-4" />

		<form @submit.prevent="submit">
			<div>
				<JetLabel for="email" value="Email" />
				<JetInput id="email" type="email" class="block w-full mt-1" v-model="form.email" required autofocus />
			</div>

			<div class="flex items-center justify-end mt-4">
				<JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
					Email Password Reset Link
				</JetButton>
			</div>
		</form>
	</JetAuthenticationCard>
</template>
