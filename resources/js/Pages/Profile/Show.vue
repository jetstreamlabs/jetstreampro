<script setup>
const props = defineProps(['sessions'])
</script>

<template>
	<MainLayout :title="__('Profile')">
		<template #header>
			<h2 class="text-xl font-semibold leading-tight text-gray-800">{{ __('Profile') }}</h2>
		</template>

		<div>
			<div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div v-if="$page.props.jetstream.canUpdateProfileInformation">
					<update-profile-information-form :user="$page.props.user" />

					<JetSectionBorder />
				</div>

				<div v-if="$page.props.jetstream.canUpdatePassword">
					<update-password-form class="mt-10 sm:mt-0" />

					<JetSectionBorder />
				</div>

				<div v-if="$page.props.jetstream.canManageTwoFactorAuthentication">
					<two-factor-authentication-form class="mt-10 sm:mt-0" />

					<JetSectionBorder />
				</div>

				<logout-other-browser-sessions-form :sessions="props.sessions" class="mt-10 sm:mt-0" />

				<template v-if="$page.props.jetstream.hasAccountDeletionFeatures">
					<JetSectionBorder />

					<delete-user-form class="mt-10 sm:mt-0" />
				</template>
			</div>
		</div>
	</MainLayout>
</template>
