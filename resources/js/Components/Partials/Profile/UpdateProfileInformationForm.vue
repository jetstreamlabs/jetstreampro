<template>
	<JetFormSection @submitted="updateProfileInformation">
		<template #title> Profile Information </template>

		<template #description> Update your account's profile information and email address. </template>

		<template #form>
			<!-- Profile Photo -->
			<div class="col-span-6 sm:col-span-4" v-if="$page.props.jetstream.managesProfilePhotos">
				<!-- Profile Photo File Input -->
				<input type="file" class="hidden" ref="photo" @change="updatePhotoPreview" />

				<JetLabel for="photo" value="Photo" />

				<!-- Current Profile Photo -->
				<div class="mt-2" v-show="!photoPreview">
					<img :src="user.profile_photo_url" :alt="user.name" class="object-cover w-20 h-20 rounded-full" />
				</div>

				<!-- New Profile Photo Preview -->
				<div class="mt-2" v-show="photoPreview">
					<span
						class="block w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full"
						:style="'background-image: url(\'' + photoPreview + '\');'"
					>
					</span>
				</div>

				<JetSecondaryButton class="mt-2 mr-2" type="button" @click.prevent="selectNewPhoto">
					Select A New Photo
				</JetSecondaryButton>

				<JetSecondaryButton type="button" class="mt-2" @click.prevent="deletePhoto" v-if="user.profile_photo_path">
					Remove Photo
				</JetSecondaryButton>

				<JetInput-error :message="form.errors.photo" class="mt-2" />
			</div>

			<!-- Name -->
			<div class="col-span-6 sm:col-span-4">
				<JetLabel for="name" value="Name" />
				<JetInput id="name" type="text" class="block w-full mt-1" v-model="form.name" autocomplete="name" />
				<JetInput-error :message="form.errors.name" class="mt-2" />
			</div>

			<!-- Email -->
			<div class="col-span-6 sm:col-span-4">
				<JetLabel for="email" value="Email" />
				<JetInput id="email" type="email" class="block w-full mt-1" v-model="form.email" />
				<JetInput-error :message="form.errors.email" class="mt-2" />
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
	props: ['user'],

	data() {
		return {
			form: this.$inertia.form({
				_method: 'PUT',
				name: this.user.name,
				email: this.user.email,
				photo: null,
			}),

			photoPreview: null,
		}
	},

	methods: {
		updateProfileInformation() {
			if (this.$refs.photo) {
				this.form.photo = this.$refs.photo.files[0]
			}

			this.form.post(this.route('user-profile-information.update'), {
				errorBag: 'updateProfileInformation',
				preserveScroll: true,
				onSuccess: () => this.clearPhotoFileInput(),
			})
		},

		selectNewPhoto() {
			this.$refs.photo.click()
		},

		updatePhotoPreview() {
			const photo = this.$refs.photo.files[0]

			if (!photo) return

			const reader = new FileReader()

			reader.onload = (e) => {
				this.photoPreview = e.target.result
			}

			reader.readAsDataURL(photo)
		},

		deletePhoto() {
			this.$inertia.delete(this.route('current-user-photo.destroy'), {
				preserveScroll: true,
				onSuccess: () => {
					this.photoPreview = null
					this.clearPhotoFileInput()
				},
			})
		},

		clearPhotoFileInput() {
			if (this.$refs.photo?.value) {
				this.$refs.photo.value = null
			}
		},
	},
})
</script>
