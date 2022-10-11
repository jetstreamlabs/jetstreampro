<script setup>
const form = useForm({
  password: '',
})

const submit = () => {
  form.post(useRoutes('password.confirm'), {
    onStart: () => form.clearErrors(),
    onSuccess: () => form.reset('password'),
  })
}
</script>

<template>
  <Head :title="__('Secure Area')" />

  <AuthenticationCard>
    <template #logo>
      <AuthenticationCard-logo />
    </template>

    <div class="mb-4 text-sm text-gray-600">
      {{ __('This is a secure area of the application. Please confirm your password before continuing.') }}
    </div>

    <ValidationErrors class="mb-4" />

    <form @submit.prevent="submit">
      <div>
        <Label for="password" value="Password" />
        <Input
          id="password"
          type="password"
          class="block w-full mt-1"
          v-model="form.password"
          required
          autocomplete="current-password"
          autofocus />
      </div>

      <div class="flex justify-end mt-4">
        <Button class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
          {{ __('Confirm') }}
        </Button>
      </div>
    </form>
  </AuthenticationCard>
</template>
