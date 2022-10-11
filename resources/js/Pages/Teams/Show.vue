<script setup>
const props = defineProps(['team', 'availableRoles', 'permissions'])
const { team, availableRoles, permissions } = toRefs(props)
</script>

<template>
  <MainLayout :title="__('Team Settings')">
    <template #header>
      <h2 class="text-xl font-semibold leading-tight text-gray-800">{{ __('Team Settings') }}</h2>
    </template>

    <div>
      <div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <UpdateTeamNameForm :team="team" :permissions="permissions" />

        <TeamMemberManager
          class="mt-10 sm:mt-0"
          :team="team"
          :available-roles="availableRoles"
          :user-permissions="permissions" />

        <template v-if="permissions.canDeleteTeam && !team.personal_team">
          <SectionBorder />

          <DeleteTeamForm class="mt-10 sm:mt-0" :team="team" />
        </template>
      </div>
    </div>
  </MainLayout>
</template>
