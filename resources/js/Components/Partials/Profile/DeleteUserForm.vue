<script setup>
const confirmingUserDeletion = ref(false)
const password = ref()

const form = useForm({
  password: '',
})

const confirmUserDeletion = () => {
  confirmingUserDeletion.value = true
  setTimeout(() => password.value.input.focus(), 250)
}

const deleteUser = () => {
  form.delete(useRoutes('current-user.destroy'), {
    preserveScroll: true,
    onSuccess: () => closeModal(),
    onError: () => password.value.input.focus(),
    onFinish: () => form.reset(),
  })
}

const closeModal = () => {
  confirmingUserDeletion.value = false
  form.reset()
}

defineExpose({ password })
</script>

<template>
  <ActionSection>
    <template #title>{{ __('Delete Account') }}</template>

    <template #description>{{ __('Permanently delete your account.') }}</template>

    <template #content>
      <div class="max-w-xl text-sm text-gray-600">
        {{
          __(
            'Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting your account, please download any data or information that you wish to retain.'
          )
        }}
      </div>

      <div class="mt-5">
        <DangerButton @click="confirmUserDeletion">{{ __('Delete Account') }}</DangerButton>
      </div>

      <!-- Delete Account Confirmation Modal -->
      <DialogModal :show="confirmingUserDeletion" @close="closeModal">
        <template #title>{{ __('Delete Account') }}</template>

        <template #content>
          {{
            __(
              'Are you sure you want to delete your account? Once your account is deleted, all of its resources and data will be permanently deleted. Please enter your password to confirm you would like to permanently delete your account.'
            )
          }}

          <div class="mt-4">
            <Input
              type="password"
              class="block w-3/4 mt-1"
              :placeholder="__('Password')"
              ref="password"
              v-model="form.password"
              @keyup.enter="deleteUser" />

            <Input-error :message="form.errors.password" class="mt-2" />
          </div>
        </template>

        <template #footer>
          <SecondaryButton @click="closeModal">
            {{ __('Cancel') }}
          </SecondaryButton>

          <DangerButton
            class="ml-2"
            @click="deleteUser"
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing">
            {{ __('Delete Account') }}
          </DangerButton>
        </template>
      </DialogModal>
    </template>
  </ActionSection>
</template>
