<template>
	<span>
		<span @click="startConfirmingPassword">
			<slot />
		</span>

		<JetDialogModal :show="confirmingPassword" @close="closeModal">
			<template #title>
				{{ title }}
			</template>

			<template #content>
				{{ content }}

				<div class="mt-4">
					<JetInput
						type="password"
						class="block w-3/4 mt-1"
						placeholder="Password"
						ref="password"
						v-model="form.password"
						@keyup.enter="confirmPassword" />

					<JetInput-error :message="form.error" class="mt-2" />
				</div>
			</template>

			<template #footer>
				<JetSecondaryButton @click="closeModal"> Cancel </JetSecondaryButton>

				<JetButton
					class="ml-2"
					@click="confirmPassword"
					:class="{ 'opacity-25': form.processing }"
					:disabled="form.processing">
					{{ button }}
				</JetButton>
			</template>
		</JetDialogModal>
	</span>
</template>

<script>
export default defineComponent({
	emits: ['confirmed'],

	props: {
		title: {
			default: 'Confirm Password',
		},
		content: {
			default: 'For your security, please confirm your password to continue.',
		},
		button: {
			default: 'Confirm',
		},
	},
	data() {
		return {
			confirmingPassword: false,
			form: {
				password: '',
				error: '',
			},
		}
	},

	methods: {
		startConfirmingPassword() {
			axios.get(this.route('password.confirmation')).then((response) => {
				if (response.data.confirmed) {
					this.$emit('confirmed')
				} else {
					this.confirmingPassword = true

					setTimeout(() => this.$refs.password.focus(), 250)
				}
			})
		},

		confirmPassword() {
			this.form.processing = true

			axios
				.post(this.route('password.confirm'), {
					password: this.form.password,
				})
				.then(() => {
					this.form.processing = false
					this.closeModal()
					this.$nextTick(() => this.$emit('confirmed'))
				})
				.catch((error) => {
					this.form.processing = false
					this.form.error = error.response.data.errors.password[0]
					this.$refs.password.focus()
				})
		},

		closeModal() {
			this.confirmingPassword = false
			this.form.password = ''
			this.form.error = ''
		},
	},
})
</script>
