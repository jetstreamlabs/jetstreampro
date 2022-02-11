<script setup>
const form = useForm({
  name: '',
})

const createTeam = () => {
  form.post(useRoutes('teams.store'), {
    errorBag: 'createTeam',
    preserveScroll: true,
  })
}
</script>

<template>
  <JetFormSection @submitted="createTeam">
    <template #title> {{ __('Team Details') }} </template>

    <template #description> {{ __('Create a new team to collaborate with others on projects.') }} </template>

    <template #form>
      <div class="col-span-6">
        <JetLabel value="Team Owner" />

        <div class="flex items-center mt-2">
          <img
            class="object-cover w-12 h-12 rounded-full"
            :src="$page.props.user.profile_photo_url"
            :alt="$page.props.user.name"
          />

          <div class="ml-4 leading-tight">
            <div>{{ $page.props.user.name }}</div>
            <div class="text-sm text-gray-700">{{ $page.props.user.email }}</div>
          </div>
        </div>
      </div>

      <div class="col-span-6 sm:col-span-4">
        <JetLabel for="name" value="Team Name" />
        <JetInput id="name" type="text" class="block w-full mt-1" v-model="form.name" autofocus />
        <JetInput-error :message="form.errors.name" class="mt-2" />
      </div>
    </template>

    <template #actions>
      <JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
        {{ __('Create') }}
      </JetButton>
    </template>
  </JetFormSection>
</template>
