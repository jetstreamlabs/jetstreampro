<template>
	<MainLayout title="Team Settings">
		<template #header>
			<h2 class="text-xl font-semibold leading-tight text-gray-800">Team Settings</h2>
		</template>

		<div>
			<div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<update-team-name-form :team="team" :permissions="permissions" />

				<team-member-manager
					class="mt-10 sm:mt-0"
					:team="team"
					:available-roles="availableRoles"
					:user-permissions="permissions"
				/>

				<template v-if="permissions.canDeleteTeam && !team.personal_team">
					<JetSectionBorder />

					<delete-team-form class="mt-10 sm:mt-0" :team="team" />
				</template>
			</div>
		</div>
	</MainLayout>
</template>

<script setup>
const props = defineProps(['team', 'availableRoles', 'permissions'])
const { team, availableRoles, permissions } = toRefs(props)
</script>
