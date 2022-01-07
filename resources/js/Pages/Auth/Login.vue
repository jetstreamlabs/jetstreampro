<template>
	<Head title="Log in" />

	<JetAuthenticationCard>
		<template #logo>
			<JetAuthenticationCard-logo />
		</template>

		<JetValidationErrors class="mb-4" />

		<div v-if="status" class="mb-4 text-sm font-medium text-green-600">
			{{ status }}
		</div>

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
					autocomplete="current-password"
				/>
			</div>

			<div class="block mt-4">
				<label class="flex items-center">
					<JetCheckbox name="remember" v-model:checked="form.remember" />
					<span class="ml-2 text-sm text-gray-600">Remember me</span>
				</label>
			</div>

			<div class="flex items-center justify-end mt-4">
				<Link
					v-if="canResetPassword"
					:href="route('password.request')"
					class="text-sm text-gray-600 underline hover:text-gray-900"
				>
					Forgot your password?
				</Link>

				<JetButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
					Log in
				</JetButton>
			</div>
		</form>
	</JetAuthenticationCard>
</template>

<script>
export default defineComponent({
	props: {
		canResetPassword: Boolean,
		status: String,
	},

	data() {
		return {
			form: this.$inertia.form({
				email: '',
				password: '',
				remember: false,
			}),
		}
	},

	methods: {
		submit() {
			this.form
				.transform((data) => ({
					...data,
					remember: this.form.remember ? 'on' : '',
				}))
				.post(this.route('login'), {
					onFinish: () => this.form.reset('password'),
				})
		},
	},
})
</script>
