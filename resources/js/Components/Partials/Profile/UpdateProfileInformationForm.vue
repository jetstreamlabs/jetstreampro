<script setup>
const props = defineProps(['user'])
const photo = ref(null)

const form = useForm({
	_method: 'PUT',
	name: props.user.name,
	email: props.user.email,
	photo: null,
})

const photoPreview = ref(null)

const updateProfileInformation = () => {
	if (photo.value) {
		form.photo = photo.value.files[0]
	}

	const { href } = useRoutes('user-profile-information.update')

	form.post(href.value, {
		errorBag: 'updateProfileInformation',
		preserveScroll: true,
		onSuccess: () => clearPhotoFileInput(),
	})
}

const selectNewPhoto = () => {
	photo.value.click()
}

const updatePhotoPreview = () => {
	const image = photo.value.files[0]

	if (!image) return

	const reader = new FileReader()

	reader.onload = (e) => {
		photoPreview.value = e.target.result
	}

	reader.readAsDataURL(image)
}

const deletePhoto = () => {
	const { href } = useRoutes('current-user-photo.destroy')

	Inertia.delete(href.value, {
		preserveScroll: true,
		onSuccess: () => {
			photoPreview.value = null
			clearPhotoFileInput()
		},
	})
}

const clearPhotoFileInput = () => {
	if (photo?.value) {
		photo.value = null
	}
}

defineExpose({ photo, photoPreview })
</script>

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
					<img :src="props.user.profile_photo_url" :alt="user.name" class="object-cover w-20 h-20 rounded-full" />
				</div>

				<!-- New Profile Photo Preview -->
				<div class="mt-2" v-show="photoPreview">
					<span
						class="block w-20 h-20 bg-center bg-no-repeat bg-cover rounded-full"
						:style="'background-image: url(\'' + photoPreview + '\');'">
					</span>
				</div>

				<JetSecondaryButton class="mt-2 mr-2" type="button" @click.prevent="selectNewPhoto">
					Select A New Photo
				</JetSecondaryButton>

				<JetSecondaryButton
					type="button"
					class="mt-2"
					@click.prevent="deletePhoto"
					v-if="props.user.profile_photo_path">
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
