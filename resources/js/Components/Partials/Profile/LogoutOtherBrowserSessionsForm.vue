<script setup>
const props = defineProps(['sessions'])
const confirmingLogout = ref(false)
const password = ref()
const form = useForm({
  password: '',
})

const confirmLogout = () => {
  confirmingLogout.value = true
  setTimeout(() => password.value.input.focus(), 250)
}

const logoutOtherBrowserSessions = () => {
  form.delete(useRoutes('other-browser-sessions.destroy'), {
    preserveScroll: true,
    onSuccess: () => closeModal(),
    onError: () => password.value.input.focus(),
    onFinish: () => form.reset(),
  })
}

const closeModal = () => {
  confirmingLogout.value = false
  form.reset()
}

defineExpose({ password })
</script>

<template>
  <JetActionSection>
    <template #title>{{ __('Browser Sessions') }}</template>

    <template #description>
      {{ __('Manage and log out your active sessions on other browsers and devices.') }}
    </template>

    <template #content>
      <div class="max-w-xl text-sm text-gray-600">
        {{
          __(
            'If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has been compromised, you should also update your password.'
          )
        }}
      </div>

      <!-- Other Browser Sessions -->
      <div class="mt-5 space-y-6" v-if="props.sessions.length > 0">
        <div class="flex items-center" v-for="(session, i) in props.sessions" :key="i">
          <div>
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-8 h-8 text-gray-500"
              v-if="session.agent.is_desktop"
            >
              <path
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              ></path>
            </svg>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="w-8 h-8 text-gray-500"
              v-else
            >
              <path d="M0 0h24v24H0z" stroke="none"></path>
              <rect x="7" y="4" width="10" height="16" rx="1"></rect>
              <path d="M11 5h2M12 17v.01"></path>
            </svg>
          </div>

          <div class="ml-3">
            <div class="text-sm text-gray-600">{{ session.agent.platform }} - {{ session.agent.browser }}</div>

            <div>
              <div class="text-xs text-gray-500">
                {{ session.ip_address }},

                <span class="font-semibold text-green-500" v-if="session.is_current_device">
                  {{ __('This device') }}
                </span>
                <span v-else> {{ __('Last active') }} {{ session.last_active }} </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="flex items-center mt-5">
        <JetButton @click="confirmLogout">
          {{ __('Log Out Other Browser Sessions') }}
        </JetButton>

        <JetActionMessage :on="form.recentlySuccessful" class="ml-3"> {{ __('Done.') }}</JetActionMessage>
      </div>

      <!-- Log Out Other Devices Confirmation Modal -->
      <JetDialogModal :show="confirmingLogout" @close="closeModal">
        <template #title>{{ __('Log Out Other Browser Sessions') }}</template>

        <template #content>
          {{
            __(
              'Please enter your password to confirm you would like to log out of your other browser sessions across all of your devices.'
            )
          }}

          <div class="mt-4">
            <JetInput
              type="password"
              class="block w-3/4 mt-1"
              placeholder="Password"
              ref="password"
              v-model="form.password"
              @keyup.enter="logoutOtherBrowserSessions"
            />

            <JetInput-error :message="form.errors.password" class="mt-2" />
          </div>
        </template>

        <template #footer>
          <JetSecondaryButton @click="closeModal">
            {{ __('Cancel') }}
          </JetSecondaryButton>

          <JetButton
            class="ml-2"
            @click="logoutOtherBrowserSessions"
            :class="{ 'opacity-25': form.processing }"
            :disabled="form.processing"
          >
            {{ __('Log Out Other Browser Sessions') }}
          </JetButton>
        </template>
      </JetDialogModal>
    </template>
  </JetActionSection>
</template>
