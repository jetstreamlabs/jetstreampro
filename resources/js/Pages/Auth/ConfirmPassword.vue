<script setup>
const form = useForm({
	password: '',
})

const submit = () => {
	form.post(useRoutes('password.confirm'), {
		onStart: () => form.clearErrors(),
		onSuccess: () => form.reset('password'),
	})
}
</script>

<template>
	<Head title="Secure Area" />

	<JetAuthenticationCard>
		<template #logo>
			<JetAuthenticationCard-logo />
		</template>

		<div class="mb-4 text-sm text-gray-600">
			This is a secure area of the application. Please confirm your password before continuing.
		</div>

		<JetValidationErrors class="mb-4" />

		<form @submit.prevent="submit">
			<div>
				<JetLabel for="password" value="Password" />
				<JetInput
					id="password"
					type="password"
					class="block w-full mt-1"
					v-model="form.password"
					required
					autocomplete="current-password"
					autofocus
				/>
			</div>

			<div class="flex justify-end mt-4">
				<JetButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
					Confirm
				</JetButton>
			</div>
		</form>
	</JetAuthenticationCard>
</template>
