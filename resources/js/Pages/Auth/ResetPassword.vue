<template>
	<Head title="Reset Password" />

	<JetAuthenticationCard>
		<template #logo>
			<JetAuthenticationCard-logo />
		</template>

		<JetValidationErrors class="mb-4" />

		<form @submit.prevent="submit">
			<div>
				<JetLabel for="email" value="Email" />
				<JetInput id="email" type="email" class="block w-full mt-1" v-model="form.email" required autofocus />
			</div>

			<div class="mt-4">
				<JetLabel for="password" value="Password" />
				<JetInput
					id="password"
					type="password"
					class="block w-full mt-1"
					v-model="form.password"
					required
					autocomplete="new-password" />
			</div>

			<div class="mt-4">
				<JetLabel for="password_confirmation" value="Confirm Password" />
				<JetInput
					id="password_confirmation"
					type="password"
					class="block w-full mt-1"
					v-model="form.password_confirmation"
					required
					autocomplete="new-password" />
			</div>

			<div class="flex items-center justify-end mt-4">
				<JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing"> Reset Password </JetButton>
			</div>
		</form>
	</JetAuthenticationCard>
</template>

<script>
export default defineComponent({
	props: {
		email: String,
		token: String,
	},

	data() {
		return {
			form: this.$inertia.form({
				token: this.token,
				email: this.email,
				password: '',
				password_confirmation: '',
			}),
		}
	},

	methods: {
		submit() {
			this.form.post(this.route('password.update'), {
				onFinish: () => this.form.reset('password', 'password_confirmation'),
			})
		},
	},
})
</script>
