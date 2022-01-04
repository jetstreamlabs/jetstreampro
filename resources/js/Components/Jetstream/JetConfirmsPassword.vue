<template>
	<span>
		<span @click="startConfirmingPassword">
			<slot />
		</span>

		<jet-dialog-modal :show="confirmingPassword" @close="closeModal">
			<template #title>
				{{ title }}
			</template>

			<template #content>
				{{ content }}

				<div class="mt-4">
					<jet-input
						type="password"
						class="block w-3/4 mt-1"
						placeholder="Password"
						ref="password"
						v-model="form.password"
						@keyup.enter="confirmPassword"
					/>

					<jet-input-error :message="form.error" class="mt-2" />
				</div>
			</template>

			<template #footer>
				<jet-secondary-button @click="closeModal"> Cancel </jet-secondary-button>

				<jet-button
					class="ml-2"
					@click="confirmPassword"
					:class="{ 'opacity-25': form.processing }"
					:disabled="form.processing"
				>
					{{ button }}
				</jet-button>
			</template>
		</jet-dialog-modal>
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
		};
	},

	methods: {
		startConfirmingPassword() {
			axios.get(this.route('password.confirmation')).then((response) => {
				if (response.data.confirmed) {
					this.$emit('confirmed');
				} else {
					this.confirmingPassword = true;

					setTimeout(() => this.$refs.password.focus(), 250);
				}
			});
		},

		confirmPassword() {
			this.form.processing = true;

			axios
				.post(this.route('password.confirm'), {
					password: this.form.password,
				})
				.then(() => {
					this.form.processing = false;
					this.closeModal();
					this.$nextTick(() => this.$emit('confirmed'));
				})
				.catch((error) => {
					this.form.processing = false;
					this.form.error = error.response.data.errors.password[0];
					this.$refs.password.focus();
				});
		},

		closeModal() {
			this.confirmingPassword = false;
			this.form.password = '';
			this.form.error = '';
		},
	},
});
</script>
