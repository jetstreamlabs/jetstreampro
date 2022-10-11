<script setup>
const props = defineProps({
  email: String,
  token: String,
})

const form = useForm({
  token: props.token,
  email: props.email,
  password: '',
  password_confirmation: '',
})

const submit = () => {
  form.post(useRoutes('password.update'), {
    onStart: () => form.clearErrors(),
    onFinish: () => form.reset('password', 'password_confirmation'),
  })
}
</script>

<template>
  <Head :title="__('Reset Password')" />

  <AuthenticationCard>
    <template #logo>
      <AuthenticationCard-logo />
    </template>

    <ValidationErrors class="mb-4" />

    <form @submit.prevent="submit">
      <div>
        <Label for="email" :value="__('Email')" />
        <Input id="email" type="email" class="block w-full mt-1" v-model="form.email" required autofocus />
      </div>

      <div class="mt-4">
        <Label for="password" :value="__('Password')" />
        <Input
          id="password"
          type="password"
          class="block w-full mt-1"
          v-model="form.password"
          required
          autocomplete="new-password" />
      </div>

      <div class="mt-4">
        <Label for="password_confirmation" :value="__('Confirm Password')" />
        <Input
          id="password_confirmation"
          type="password"
          class="block w-full mt-1"
          v-model="form.password_confirmation"
          required
          autocomplete="new-password" />
      </div>

      <div class="flex items-center justify-end mt-4">
        <Button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
          {{ __('Reset Password') }}
        </Button>
      </div>
    </form>
  </AuthenticationCard>
</template>
