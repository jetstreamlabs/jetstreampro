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
	const { href } = useRoutes('team-members.store', props.team)

	addTeamMemberForm.post(href.value, {
		errorBag: 'addTeamMember',
		preserveScroll: true,
		onSuccess: () => addTeamMemberForm.reset(),
	})
}

const cancelTeamInvitation = (invitation) => {
	const { href } = useRoutes('team-invitations.destroy', invitation)

	Inertia.delete(href.value, {
		preserveScroll: true,
	})
}

const manageRole = (teamMember) => {
	managingRoleFor.value = teamMember
	updateRoleForm.role = teamMember.membership.role
	currentlyManagingRole.value = true
}

const updateRole = () => {
	const { href } = useRoutes('team-members.update', [props.team.id, managingRoleFor.value])

	updateRoleForm.put(href.value, {
		preserveScroll: true,
		onSuccess: () => (currentlyManagingRole.value = false),
	})
}

const confirmLeavingTeam = () => {
	confirmingLeavingTeam.value = true
}

const leaveTeam = () => {
	const { href } = useRoutes('team-members.destroy', [props.team.id, usePage().props.value.user])

	leaveTeamForm.delete(href.value)
}

const confirmTeamMemberRemoval = (teamMember) => {
	teamMemberBeingRemoved.value = teamMember
}

const removeTeamMember = () => {
	const { href } = useRoutes('team-members.destroy', [props.team.id, teamMemberBeingRemoved.value])

	removeTeamMemberForm.delete(href.value, {
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
			<JetSectionBorder />

			<!-- Add Team Member -->
			<JetFormSection @submitted="addTeamMember">
				<template #title> Add Team Member </template>

				<template #description> Add a new team member to your team, allowing them to collaborate with you. </template>

				<template #form>
					<div class="col-span-6">
						<div class="max-w-xl text-sm text-gray-600">
							Please provide the email address of the person you would like to add to this team.
						</div>
					</div>

					<!-- Member Email -->
					<div class="col-span-6 sm:col-span-4">
						<JetLabel for="email" value="Email" />
						<JetInput id="email" type="email" class="block w-full mt-1" v-model="addTeamMemberForm.email" />
						<JetInput-error :message="addTeamMemberForm.errors.email" class="mt-2" />
					</div>

					<!-- Role -->
					<div class="col-span-6 lg:col-span-4" v-if="availableRoles.length > 0">
						<JetLabel for="roles" value="Role" />
						<JetInput-error :message="addTeamMemberForm.errors.role" class="mt-2" />

						<div class="relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer">
							<button
								type="button"
								class="relative inline-flex w-full px-4 py-3 rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
								:class="{
									'border-t border-gray-200 rounded-t-none': i > 0,
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

										<svg
											v-if="addTeamMemberForm.role == role.key"
											class="w-5 h-5 ml-2 text-green-400"
											fill="none"
											stroke-linecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
										</svg>
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
					<JetActionMessage :on="addTeamMemberForm.recentlySuccessful" class="mr-3"> Added. </JetActionMessage>

					<JetButton :class="{ 'opacity-25': addTeamMemberForm.processing }" :disabled="addTeamMemberForm.processing">
						Add
					</JetButton>
				</template>
			</JetFormSection>
		</div>

		<div v-if="team.team_invitations.length > 0 && userPermissions.canAddTeamMembers">
			<JetSectionBorder />

			<!-- Team Member Invitations -->
			<JetActionSection class="mt-10 sm:mt-0">
				<template #title> Pending Team Invitations </template>

				<template #description>
					These people have been invited to your team and have been sent an invitation email. They may join the team by
					accepting the email invitation.
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
									Cancel
								</button>
							</div>
						</div>
					</div>
				</template>
			</JetActionSection>
		</div>

		<div v-if="team.users.length > 0">
			<JetSectionBorder />

			<!-- Manage Team Members -->
			<JetActionSection class="mt-10 sm:mt-0">
				<template #title> Team Members </template>

				<template #description> All of the people that are part of this team. </template>

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
									Leave
								</button>

								<!-- Remove Team Member -->
								<button
									class="ml-6 text-sm text-red-500 cursor-pointer"
									@click="confirmTeamMemberRemoval(user)"
									v-if="userPermissions.canRemoveTeamMembers">
									Remove
								</button>
							</div>
						</div>
					</div>
				</template>
			</JetActionSection>
		</div>

		<!-- Role Management Modal -->
		<JetDialogModal :show="currentlyManagingRole" @close="currentlyManagingRole = false">
			<template #title> Manage Role </template>

			<template #content>
				<div v-if="managingRoleFor">
					<div class="relative z-0 mt-1 border border-gray-200 rounded-lg cursor-pointer">
						<button
							type="button"
							class="relative inline-flex w-full px-4 py-3 rounded-lg focus:z-10 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
							:class="{
								'border-t border-gray-200 rounded-t-none': i > 0,
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

									<svg
										v-if="updateRoleForm.role === role.key"
										class="w-5 h-5 ml-2 text-green-400"
										fill="none"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
									</svg>
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
				<JetSecondaryButton @click="currentlyManagingRole = false"> Cancel </JetSecondaryButton>

				<JetButton
					class="ml-2"
					@click="updateRole"
					:class="{ 'opacity-25': updateRoleForm.processing }"
					:disabled="updateRoleForm.processing">
					Save
				</JetButton>
			</template>
		</JetDialogModal>

		<!-- Leave Team Confirmation Modal -->
		<JetConfirmationModal :show="confirmingLeavingTeam" @close="confirmingLeavingTeam = false">
			<template #title> Leave Team </template>

			<template #content> Are you sure you would like to leave this team? </template>

			<template #footer>
				<JetSecondaryButton @click="confirmingLeavingTeam = false"> Cancel </JetSecondaryButton>

				<JetDangerButton
					class="ml-2"
					@click="leaveTeam"
					:class="{ 'opacity-25': leaveTeamForm.processing }"
					:disabled="leaveTeamForm.processing">
					Leave
				</JetDangerButton>
			</template>
		</JetConfirmationModal>

		<!-- Remove Team Member Confirmation Modal -->
		<JetConfirmationModal :show="teamMemberBeingRemoved" @close="teamMemberBeingRemoved = null">
			<template #title> Remove Team Member </template>

			<template #content> Are you sure you would like to remove this person from the team? </template>

			<template #footer>
				<JetSecondaryButton @click="teamMemberBeingRemoved = null"> Cancel </JetSecondaryButton>

				<JetDangerButton
					class="ml-2"
					@click="removeTeamMember"
					:class="{ 'opacity-25': removeTeamMemberForm.processing }"
					:disabled="removeTeamMemberForm.processing">
					Remove
				</JetDangerButton>
			</template>
		</JetConfirmationModal>
	</div>
</template>
