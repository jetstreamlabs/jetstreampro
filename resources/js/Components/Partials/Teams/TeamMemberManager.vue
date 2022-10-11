<script setup>
const props = defineProps(['team', 'availableRoles', 'userPermissions'])
const { team, availableRoles, userPermissions } = toRefs(props)

const currentlyManagingRole = ref(false)
const managingRoleFor = ref(null)
const confirmingLeavingTeam = ref(false)
const teamMemberBeingRemoved = ref(null)

const addTeamMemberForm = useForm({
  email: '',
  role: null,
})

const updateRoleForm = useForm({
  role: null,
})

const leaveTeamForm = useForm()
const removeTeamMemberForm = useForm()

const addTeamMember = () => {
  addTeamMemberForm.post(useRoutes('team-members.store', props.team), {
    errorBag: 'addTeamMember',
    preserveScroll: true,
    onSuccess: () => addTeamMemberForm.reset(),
  })
}

const cancelTeamInvitation = (invitation) => {
  Inertia.delete(useRoutes('team-invitations.destroy', invitation), {
    preserveScroll: true,
  })
}

const manageRole = (teamMember) => {
  managingRoleFor.value = teamMember
  updateRoleForm.role = teamMember.membership.role
  currentlyManagingRole.value = true
}

const updateRole = () => {
  updateRoleForm.put(useRoutes('team-members.update', [props.team.id, managingRoleFor.value]), {
    preserveScroll: true,
    onSuccess: () => (currentlyManagingRole.value = false),
  })
}

const confirmLeavingTeam = () => {
  confirmingLeavingTeam.value = true
}

const leaveTeam = () => {
  leaveTeamForm.delete(useRoutes('team-members.destroy', [props.team.id, usePage().props.value.user]))
}

const confirmTeamMemberRemoval = (teamMember) => {
  teamMemberBeingRemoved.value = teamMember
}

const removeTeamMember = () => {
  removeTeamMemberForm.delete(useRoutes('team-members.destroy', [props.team.id, teamMemberBeingRemoved.value]), {
    errorBag: 'removeTeamMember',
    preserveScroll: true,
    preserveState: true,
    onSuccess: () => (teamMemberBeingRemoved.value = null),
  })
}

const displayableRole = (role) => {
  return availableRoles.value.find((r) => r.key === role).name
}
</script>

<template>
  <div>
    <div v-if="userPermissions.canAddTeamMembers">
      <SectionBorder />

      <!-- Add Team Member -->
      <FormSection @submitted="addTeamMember">
        <template #title> {{ __('Add Team Member') }} </template>

        <template #description>
          {{ __('Add a new team member to your team, allowing them to collaborate with you.') }}
        </template>

        <template #form>
          <div class="col-span-6">
            <div class="max-w-xl text-sm text-gray-600">
              {{ __('Please provide the email address of the person you would like to add to this team.') }}
            </div>
          </div>

          <!-- Member Email -->
          <div class="col-span-6 sm:col-span-4">
            <Label for="email" value="Email" />
            <Input id="email" type="email" class="block w-full mt-1" v-model="addTeamMemberForm.email" />
            <Input-error :message="addTeamMemberForm.errors.email" class="mt-2" />
          </div>

          <!-- Role -->
          <div class="col-span-6 lg:col-span-4" v-if="availableRoles.length > 0">
            <Label for="roles" value="Role" />
            <Input-error :message="addTeamMemberForm.errors.role" class="mt-2" />

            <div class="relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer">
              <button
                type="button"
                class="relative inline-flex w-full px-4 py-3 rounded-lg focus:z-10 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200"
                :class="{
                  'rounded-t-none border-t border-gray-200': i > 0,
                  'rounded-b-none': i != Object.keys(availableRoles).length - 1,
                }"
                @click="addTeamMemberForm.role = role.key"
                v-for="(role, i) in availableRoles"
                :key="role.key">
                <div :class="{ 'opacity-50': addTeamMemberForm.role && addTeamMemberForm.role != role.key }">
                  <!-- Role Name -->
                  <div class="flex items-center">
                    <div class="text-sm text-gray-600" :class="{ 'font-semibold': addTeamMemberForm.role == role.key }">
                      {{ role.name }}
                    </div>
                    <IconOutlineCheckCircle
                      v-if="addTeamMemberForm.role == role.key"
                      class="w-5 h-5 ml-2 text-green-400" />
                  </div>

                  <!-- Role Description -->
                  <div class="mt-2 text-xs text-left text-gray-600">
                    {{ role.description }}
                  </div>
                </div>
              </button>
            </div>
          </div>
        </template>

        <template #actions>
          <ActionMessage :on="addTeamMemberForm.recentlySuccessful" class="mr-3"> {{ __('Added') }}. </ActionMessage>

          <Button :class="{ 'opacity-25': addTeamMemberForm.processing }" :disabled="addTeamMemberForm.processing">
            {{ __('Add') }}
          </Button>
        </template>
      </FormSection>
    </div>

    <div v-if="team.team_invitations.length > 0 && userPermissions.canAddTeamMembers">
      <SectionBorder />

      <!-- Team Member Invitations -->
      <ActionSection class="mt-10 sm:mt-0">
        <template #title> {{ __('Pending Team Invitations') }} </template>

        <template #description>
          {{
            __(
              'These people have been invited to your team and have been sent an invitation email. They may join the team by accepting the email invitation.'
            )
          }}
        </template>

        <!-- Pending Team Member Invitation List -->
        <template #content>
          <div class="space-y-6">
            <div
              class="flex items-center justify-between"
              v-for="invitation in team.team_invitations"
              :key="invitation.id">
              <div class="text-gray-600">{{ invitation.email }}</div>

              <div class="flex items-center">
                <!-- Cancel Team Invitation -->
                <button
                  class="ml-6 text-sm text-red-500 cursor-pointer focus:outline-none"
                  @click="cancelTeamInvitation(invitation)"
                  v-if="userPermissions.canRemoveTeamMembers">
                  {{ __('Cancel') }}
                </button>
              </div>
            </div>
          </div>
        </template>
      </ActionSection>
    </div>

    <div v-if="team.users.length > 0">
      <SectionBorder />

      <!-- Manage Team Members -->
      <ActionSection class="mt-10 sm:mt-0">
        <template #title> {{ __('Team Members') }} </template>

        <template #description> {{ __('All of the people that are part of this team.') }} </template>

        <!-- Team Member List -->
        <template #content>
          <div class="space-y-6">
            <div class="flex items-center justify-between" v-for="user in team.users" :key="user.id">
              <div class="flex items-center">
                <img class="w-8 h-8 rounded-full" :src="user.profile_photo_url" :alt="user.name" />
                <div class="ml-4">{{ user.name }}</div>
              </div>

              <div class="flex items-center">
                <!-- Manage Team Member Role -->
                <button
                  class="ml-2 text-sm text-gray-400 underline"
                  @click="manageRole(user)"
                  v-if="userPermissions.canAddTeamMembers && availableRoles.length">
                  {{ displayableRole(user.membership.role) }}
                </button>

                <div class="ml-2 text-sm text-gray-400" v-else-if="availableRoles.length">
                  {{ displayableRole(user.membership.role) }}
                </div>

                <!-- Leave Team -->
                <button
                  class="ml-6 text-sm text-red-500 cursor-pointer"
                  @click="confirmLeavingTeam"
                  v-if="$page.props.user.id === user.id">
                  {{ __('Leave') }}
                </button>

                <!-- Remove Team Member -->
                <button
                  class="ml-6 text-sm text-red-500 cursor-pointer"
                  @click="confirmTeamMemberRemoval(user)"
                  v-if="userPermissions.canRemoveTeamMembers">
                  {{ __('Remove') }}
                </button>
              </div>
            </div>
          </div>
        </template>
      </ActionSection>
    </div>

    <!-- Role Management Modal -->
    <DialogModal :show="currentlyManagingRole" @close="currentlyManagingRole = false">
      <template #title> {{ __('Manage Role') }} </template>

      <template #content>
        <div v-if="managingRoleFor">
          <div class="relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer">
            <button
              type="button"
              class="relative inline-flex w-full px-4 py-3 rounded-lg focus:z-10 focus:border-blue-300 focus:outline-none focus:ring focus:ring-blue-200"
              :class="{
                'rounded-t-none border-t border-gray-200': i > 0,
                'rounded-b-none': i !== Object.keys(availableRoles).length - 1,
              }"
              @click="updateRoleForm.role = role.key"
              v-for="(role, i) in availableRoles"
              :key="role.key">
              <div :class="{ 'opacity-50': updateRoleForm.role && updateRoleForm.role !== role.key }">
                <!-- Role Name -->
                <div class="flex items-center">
                  <div class="text-sm text-gray-600" :class="{ 'font-semibold': updateRoleForm.role === role.key }">
                    {{ role.name }}
                  </div>
                  <IconOutlineCheckCircle v-if="updateRoleForm.role === role.key" class="w-5 h-5 ml-2 text-green-400" />
                </div>

                <!-- Role Description -->
                <div class="mt-2 text-xs text-gray-600">
                  {{ role.description }}
                </div>
              </div>
            </button>
          </div>
        </div>
      </template>

      <template #footer>
        <SecondaryButton @click="currentlyManagingRole = false"> {{ __('Cancel') }} </SecondaryButton>

        <Button
          class="ml-2"
          @click="updateRole"
          :class="{ 'opacity-25': updateRoleForm.processing }"
          :disabled="updateRoleForm.processing">
          {{ __('Save') }}
        </Button>
      </template>
    </DialogModal>

    <!-- Leave Team Confirmation Modal -->
    <ConfirmationModal :show="confirmingLeavingTeam" @close="confirmingLeavingTeam = false">
      <template #title> {{ __('Leave Team') }} </template>

      <template #content> {{ __('Are you sure you would like to leave this team?') }} </template>

      <template #footer>
        <SecondaryButton @click="confirmingLeavingTeam = false"> {{ __('Cancel') }} </SecondaryButton>

        <DangerButton
          class="ml-2"
          @click="leaveTeam"
          :class="{ 'opacity-25': leaveTeamForm.processing }"
          :disabled="leaveTeamForm.processing">
          {{ __('Leave') }}
        </DangerButton>
      </template>
    </ConfirmationModal>

    <!-- Remove Team Member Confirmation Modal -->
    <ConfirmationModal :show="teamMemberBeingRemoved" @close="teamMemberBeingRemoved = null">
      <template #title> {{ __('Remove Team Member') }} </template>

      <template #content> {{ __('Are you sure you would like to remove this person from the team?') }} </template>

      <template #footer>
        <SecondaryButton @click="teamMemberBeingRemoved = null"> {{ __('Cancel') }} </SecondaryButton>

        <DangerButton
          class="ml-2"
          @click="removeTeamMember"
          :class="{ 'opacity-25': removeTeamMemberForm.processing }"
          :disabled="removeTeamMemberForm.processing">
          {{ __('Remove') }}
        </DangerButton>
      </template>
    </ConfirmationModal>
  </div>
</template>
