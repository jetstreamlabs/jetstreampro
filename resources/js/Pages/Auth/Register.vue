<script setup>
const form = useForm({
  name: '',
  email: '',
  password: '',
  password_confirmation: '',
  terms: false,
})

const submit = () => {
  form.post(useRoutes('register'), {
    onStart: () => form.clearErrors(),
    onFinish: () => form.reset('password', 'password_confirmation'),
  })
}
</script>

<template>
  <Head :title="__('Register')" />

  <JetAuthenticationCard>
    <template #logo>
      <JetAuthenticationCard-logo />
    </template>

    <JetValidationErrors class="mb-4" />

    <form @submit.prevent="submit">
      <div>
        <JetLabel for="name" :value="__('Name')" />
        <JetInput
          id="name"
          type="text"
          class="block w-full mt-1"
          v-model="form.name"
          required
          autofocus
          autocomplete="name" />
      </div>

      <div class="mt-4">
        <JetLabel for="email" :value="__('Email')" />
        <JetInput id="email" type="email" class="block w-full mt-1" v-model="form.email" required />
      </div>

      <div class="mt-4">
        <JetLabel for="password" :value="__('Password')" />
        <JetInput
          id="password"
          type="password"
          class="block w-full mt-1"
          v-model="form.password"
          required
          autocomplete="new-password" />
      </div>

      <div class="mt-4">
        <JetLabel for="password_confirmation" :value="__('Confirm Password')" />
        <JetInput
          id="password_confirmation"
          type="password"
          class="block w-full mt-1"
          v-model="form.password_confirmation"
          required
          autocomplete="new-password" />
      </div>

      <div class="mt-4" v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature">
        <JetLabel for="terms">
          <div class="flex items-center">
            <JetCheckbox name="terms" id="terms" v-model:checked="form.terms" />

            <div class="ml-2">
              I agree to the
              <Link :href="route('terms.show')" class="text-sm text-gray-600 underline hover:text-gray-900">
                {{ __('Terms of Service') }}
              </Link>
              and
              <Link :href="route('policy.show')" class="text-sm text-gray-600 underline hover:text-gray-900">
                {{ __('Privacy Policy') }}
              </Link>
            </div>
          </div>
        </JetLabel>
      </div>

      <div class="flex items-center justify-end mt-4">
        <Link :href="route('login')" class="text-sm text-gray-600 underline hover:text-gray-900">
          {{ __('Already registered?') }}
        </Link>

        <JetButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
          {{ __('Register') }}
        </JetButton>
      </div>
    </form>
  </JetAuthenticationCard>
</template>
