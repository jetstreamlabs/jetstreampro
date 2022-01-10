<script setup>
const props = defineProps(['team', 'permissions'])
const { team, permissions } = toRefs(props)

const form = useForm({
	name: props.team.name,
})

const updateTeamName = () => {
	const { href } = useRoutes('teams.update', { team: props.team.id })

	form.put(href.value, {
		errorBag: 'updateTeamName',
		preserveScroll: true,
	})
}
</script>

<template>
	<JetFormSection @submitted="updateTeamName">
		<template #title> Team Name </template>

		<template #description> The team's name and owner information. </template>

		<template #form>
			<!-- Team Owner Information -->
			<div class="col-span-6">
				<JetLabel value="Team Owner" />

				<div class="flex items-center mt-2">
					<img class="object-cover w-12 h-12 rounded-full" :src="team.owner.profile_photo_url" :alt="team.owner.name" />

					<div class="ml-4 leading-tight">
						<div>{{ team.owner.name }}</div>
						<div class="text-sm text-gray-700">{{ team.owner.email }}</div>
					</div>
				</div>
			</div>

			<!-- Team Name -->
			<div class="col-span-6 sm:col-span-4">
				<JetLabel for="name" value="Team Name" />

				<JetInput
					id="name"
					type="text"
					class="block w-full mt-1"
					v-model="form.name"
					:disabled="!permissions.canUpdateTeam" />

				<JetInput-error :message="form.errors.name" class="mt-2" />
			</div>
		</template>

		<template #actions v-if="permissions.canUpdateTeam">
			<JetActionMessage :on="form.recentlySuccessful" class="mr-3"> Saved. </JetActionMessage>

			<JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing"> Save </JetButton>
		</template>
	</JetFormSection>
</template>
