<template>
	<Head title="Register" />

	<jet-authentication-card>
		<template #logo>
			<jet-authentication-card-logo />
		</template>

		<jet-validation-errors class="mb-4" />

		<form @submit.prevent="submit">
			<div>
				<jet-label for="name" value="Name" />
				<jet-input
					id="name"
					type="text"
					class="block w-full mt-1"
					v-model="form.name"
					required
					autofocus
					autocomplete="name"
				/>
			</div>

			<div class="mt-4">
				<jet-label for="email" value="Email" />
				<jet-input id="email" type="email" class="block w-full mt-1" v-model="form.email" required />
			</div>

			<div class="mt-4">
				<jet-label for="password" value="Password" />
				<jet-input
					id="password"
					type="password"
					class="block w-full mt-1"
					v-model="form.password"
					required
					autocomplete="new-password"
				/>
			</div>

			<div class="mt-4">
				<jet-label for="password_confirmation" value="Confirm Password" />
				<jet-input
					id="password_confirmation"
					type="password"
					class="block w-full mt-1"
					v-model="form.password_confirmation"
					required
					autocomplete="new-password"
				/>
			</div>

			<div class="mt-4" v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature">
				<jet-label for="terms">
					<div class="flex items-center">
						<jet-checkbox name="terms" id="terms" v-model:checked="form.terms" />

						<div class="ml-2">
							I agree to the
							<Link :href="route('terms.show')" class="text-sm text-gray-600 underline hover:text-gray-900"
								>Terms of Service</Link
							>
							and
							<Link :href="route('policy.show')" class="text-sm text-gray-600 underline hover:text-gray-900"
								>Privacy Policy</Link
							>
						</div>
					</div>
				</jet-label>
			</div>

			<div class="flex items-center justify-end mt-4">
				<Link :href="route('login')" class="text-sm text-gray-600 underline hover:text-gray-900">
					Already registered?
				</Link>

				<jet-button class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
					Register
				</jet-button>
			</div>
		</form>
	</jet-authentication-card>
</template>

<script>
export default defineComponent({
	data() {
		return {
			form: this.$inertia.form({
				name: '',
				email: '',
				password: '',
				password_confirmation: '',
				terms: false,
			}),
		};
	},

	methods: {
		submit() {
			this.form.post(this.route('register'), {
				onFinish: () => this.form.reset('password', 'password_confirmation'),
			});
		},
	},
});
</script>
