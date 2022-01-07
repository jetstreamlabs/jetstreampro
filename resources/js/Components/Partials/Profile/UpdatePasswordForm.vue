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

<script>
export default defineComponent({
	data() {
		return {
			form: this.$inertia.form({
				current_password: '',
				password: '',
				password_confirmation: '',
			}),
		}
	},

	methods: {
		updatePassword() {
			this.form.put(this.route('user-password.update'), {
				errorBag: 'updatePassword',
				preserveScroll: true,
				onSuccess: () => this.form.reset(),
				onError: () => {
					if (this.form.errors.password) {
						this.form.reset('password', 'password_confirmation')
						this.$refs.password.focus()
					}

					if (this.form.errors.current_password) {
						this.form.reset('current_password')
						this.$refs.current_password.focus()
					}
				},
			})
		},
	},
})
</script>
