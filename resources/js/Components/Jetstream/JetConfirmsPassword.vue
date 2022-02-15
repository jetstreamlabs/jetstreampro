<script setup>
const props = defineProps({
  title: {
    default: 'Confirm Password',
  },
  content: {
    default: 'For your security, please confirm your password to continue.',
  },
  button: {
    default: 'Confirm',
  },
})
const emit = defineEmits(['confirmed'])

const confirmingPassword = ref(false)
const password = ref()

const { title, content, button } = toRefs(props)

const form = useForm({
  password: '',
  error: '',
})

const startConfirmingPassword = () => {
  axios.get(useRoutes('password.confirmation')).then((response) => {
    if (response.data.confirmed) {
      emit('confirmed')
    } else {
      confirmingPassword.value = true
      setTimeout(() => password.value.input.focus(), 250)
    }
  })
}

const confirmPassword = () => {
  form.processing = true
  axios
    .post(useRoutes('password.confirm'), {
      password: form.password,
    })
    .then(() => {
      form.processing = false
      closeModal()
      nextTick(() => emit('confirmed'))
    })
    .catch((error) => {
      form.processing = false
      form.error = error.response.data.errors.password[0]
      password.value.input.focus()
    })
}

const closeModal = () => {
  confirmingPassword.value = false
  form.password = ''
  form.error = ''
}

defineExpose({ password })
</script>

<template>
  <span>
    <span @click="startConfirmingPassword">
      <slot />
    </span>

    <JetDialogModal :show="confirmingPassword" @close="closeModal">
      <template #title>
        {{ title }}
      </template>

      <template #content>
        {{ content }}

        <div class="mt-4">
          <JetInput
            type="password"
            class="block w-3/4 mt-1"
            placeholder="Password"
            ref="password"
            v-model="form.password"
            @keyup.enter="confirmPassword" />

          <JetInput-error :message="form.error" class="mt-2" />
        </div>
      </template>

      <template #footer>
        <JetSecondaryButton @click="closeModal">{{ __('Cancel') }}</JetSecondaryButton>

        <JetButton
          class="ml-2"
          @click="confirmPassword"
          :class="{ 'opacity-25': form.processing }"
          :disabled="form.processing">
          {{ button }}
        </JetButton>
      </template>
    </JetDialogModal>
  </span>
</template>
