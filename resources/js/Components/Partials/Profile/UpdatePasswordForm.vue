<script setup>
const current_password = ref()
const password = ref()

const form = useForm({
  current_password: '',
  password: '',
  password_confirmation: '',
})
const updatePassword = () => {
  form.put(useRoutes('user-password.update'), {
    errorBag: 'updatePassword',
    preserveScroll: true,
    onSuccess: () => form.reset(),
    onError: () => {
      if (form.errors.password) {
        form.reset('password', 'password_confirmation')
        password.value.input.focus()
      }

      if (form.errors.current_password) {
        form.reset('current_password')
        current_password.value.input.focus()
      }
    },
  })
}

defineExpose({ password, current_password })
</script>

<template>
  <FormSection @submitted="updatePassword">
    <template #title>{{ __('Update Password') }}</template>

    <template #description>
      {{ __('Ensure your account is using a long, random password to stay secure.') }}
    </template>

    <template #form>
      <div class="col-span-6 sm:col-span-4">
        <Label for="current_password" :value="__('Current Password')" />
        <Input
          id="current_password"
          type="password"
          class="block w-full mt-1"
          v-model="form.current_password"
          ref="current_password"
          autocomplete="current-password" />
        <Input-error :message="form.errors.current_password" class="mt-2" />
      </div>

      <div class="col-span-6 sm:col-span-4">
        <Label for="password" :value="__('New Password')" />
        <Input
          id="password"
          type="password"
          class="block w-full mt-1"
          v-model="form.password"
          ref="password"
          autocomplete="new-password" />
        <Input-error :message="form.errors.password" class="mt-2" />
      </div>

      <div class="col-span-6 sm:col-span-4">
        <Label for="password_confirmation" :value="__('Confirm Password')" />
        <Input
          id="password_confirmation"
          type="password"
          class="block w-full mt-1"
          v-model="form.password_confirmation"
          autocomplete="new-password" />
        <Input-error :message="form.errors.password_confirmation" class="mt-2" />
      </div>
    </template>

    <template #actions>
      <ActionMessage :on="form.recentlySuccessful" class="mr-3"> {{ __('Saved.') }}</ActionMessage>

      <Button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
        {{ __('Save') }}
      </Button>
    </template>
  </FormSection>
</template>
