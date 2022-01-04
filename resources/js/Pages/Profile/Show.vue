<template>
	<MainApp title="Profile">
		<template #header>
			<h2 class="text-xl font-semibold leading-tight text-gray-800">Profile</h2>
		</template>

		<div>
			<div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<div v-if="$page.props.jetstream.canUpdateProfileInformation">
					<update-profile-information-form :user="$page.props.user" />

					<jet-section-border />
				</div>

				<div v-if="$page.props.jetstream.canUpdatePassword">
					<update-password-form class="mt-10 sm:mt-0" />

					<jet-section-border />
				</div>

				<div v-if="$page.props.jetstream.canManageTwoFactorAuthentication">
					<two-factor-authentication-form class="mt-10 sm:mt-0" />

					<jet-section-border />
				</div>

				<logout-other-browser-sessions-form :sessions="props.sessions" class="mt-10 sm:mt-0" />

				<template v-if="$page.props.jetstream.hasAccountDeletionFeatures">
					<jet-section-border />

					<delete-user-form class="mt-10 sm:mt-0" />
				</template>
			</div>
		</div>
	</MainApp>
</template>

<script setup>
const props = defineProps(['sessions']);
</script>
