<script setup>
const recovery = ref(false)
const recovery_code = ref()
const code = ref()

const form = useForm({
  code: '',
  recovery_code: '',
})

const toggleRecovery = () => {
  recovery.value ^= true

  nextTick(() => {
    if (recovery.value) {
      recovery_code.value.input.focus()
      form.code = ''
    } else {
      code.value.input.focus()
      form.recovery_code = ''
    }
  })
}

const submit = () => {
  form.post(useRoutes('two-factor.login'))
}

defineExpose({ code, recovery_code })
</script>

<template>
  <Head :title="__('Two-factor Confirmation')" />

  <AuthenticationCard>
    <template #logo>
      <AuthenticationCard-logo />
    </template>

    <div class="mb-4 text-sm text-gray-600">
      <template v-if="!recovery">
        {{
          __(
            'Please confirm access to your account by entering the authentication code provided by your authenticator application.'
          )
        }}
      </template>

      <template v-else>
        {{ __('Please confirm access to your account by entering one of your emergency recovery codes.') }}
      </template>
    </div>

    <ValidationErrors class="mb-4" />

    <form @submit.prevent="submit">
      <div v-if="!recovery">
        <Label for="code" :value="__('Code')" />
        <Input
          ref="code"
          id="code"
          type="text"
          inputmode="numeric"
          class="block w-full mt-1"
          v-model="form.code"
          autofocus
          autocomplete="one-time-code" />
      </div>

      <div v-else>
        <Label for="recovery_code" :value="__('Recovery Code')" />
        <Input
          ref="recovery_code"
          id="recovery_code"
          type="text"
          class="block w-full mt-1"
          v-model="form.recovery_code"
          autocomplete="one-time-code" />
      </div>

      <div class="flex items-center justify-end mt-4">
        <button
          type="button"
          class="text-sm text-gray-600 underline cursor-pointer hover:text-gray-900"
          @click.prevent="toggleRecovery">
          <template v-if="!recovery">{{ __('Use a recovery code') }}</template>
          <template v-else>{{ __('Use an authentication code') }}</template>
        </button>

        <Button class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
          {{ __('Login') }}
        </Button>
      </div>
    </form>
  </AuthenticationCard>
</template>
