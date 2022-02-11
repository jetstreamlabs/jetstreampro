<script setup>
const enabling = ref(false)
const disabling = ref(false)
const qrCode = ref(null)
const recoveryCodes = ref([])

const enableTwoFactorAuthentication = () => {
  enabling.value = true
  // prettier-ignore
  Inertia.post('/user/two-factor-authentication', {}, {
    preserveScroll: true,
    onSuccess: () => Promise.all([showQrCode(), showRecoveryCodes()]),
    onFinish: () => (enabling.value = false),
  })
}

const showQrCode = () => {
  return axios.get('/user/two-factor-qr-code').then((response) => {
    qrCode.value = response.data.svg
  })
}

const showRecoveryCodes = () => {
  return axios.get('/user/two-factor-recovery-codes').then((response) => {
    recoveryCodes.value = response.data
  })
}

const regenerateRecoveryCodes = () => {
  axios.post('/user/two-factor-recovery-codes').then((response) => {
    showRecoveryCodes()
  })
}

const disableTwoFactorAuthentication = () => {
  disabling.value = true

  Inertia.delete('/user/two-factor-authentication', {
    preserveScroll: true,
    onSuccess: () => (disabling.value = false),
  })
}

const twoFactorEnabled = computed(() => !enabling.value && usePage().props.value.user.two_factor_enabled)
</script>

<template>
  <JetActionSection>
    <template #title>{{ __('Two Factor Authentication') }}</template>

    <template #description>
      {{ __('Add additional security to your account using two factor authentication.') }}
    </template>

    <template #content>
      <h3 class="text-lg font-medium text-gray-900" v-if="twoFactorEnabled">
        {{ __('You have enabled two factor authentication.') }}
      </h3>

      <h3 class="text-lg font-medium text-gray-900" v-else>
        {{ __('You have not enabled two factor authentication.') }}
      </h3>

      <div class="max-w-xl mt-3 text-sm text-gray-600">
        <p>
          {{
            __(
              "When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application."
            )
          }}
        </p>
      </div>

      <div v-if="twoFactorEnabled">
        <div v-if="qrCode">
          <div class="max-w-xl mt-4 text-sm text-gray-600">
            <p class="font-semibold">
              {{
                __(
                  "Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application."
                )
              }}
            </p>
          </div>

          <div class="mt-4" v-html="qrCode"></div>
        </div>

        <div v-if="recoveryCodes.length > 0">
          <div class="max-w-xl mt-4 text-sm text-gray-600">
            <p class="font-semibold">
              {{
                __(
                  'Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost.'
                )
              }}
            </p>
          </div>

          <div class="grid max-w-xl gap-1 px-4 py-4 mt-4 font-mono text-sm bg-gray-100 rounded-lg">
            <div v-for="code in recoveryCodes" :key="code">
              {{ code }}
            </div>
          </div>
        </div>
      </div>

      <div class="mt-5">
        <div v-if="!twoFactorEnabled">
          <JetConfirmsPassword @confirmed="enableTwoFactorAuthentication">
            <JetButton type="button" :class="{ 'opacity-25': enabling }" :disabled="enabling">
              {{ __('Enable') }}
            </JetButton>
          </JetConfirmsPassword>
        </div>

        <div v-else>
          <JetConfirmsPassword @confirmed="regenerateRecoveryCodes">
            <JetSecondaryButton class="mr-3" v-if="recoveryCodes.length > 0">
              {{ __('Regenerate Recovery Codes') }}
            </JetSecondaryButton>
          </JetConfirmsPassword>

          <JetConfirmsPassword @confirmed="showRecoveryCodes">
            <JetSecondaryButton class="mr-3" v-if="recoveryCodes.length === 0">
              {{ __('Show Recovery Codes') }}
            </JetSecondaryButton>
          </JetConfirmsPassword>

          <JetConfirmsPassword @confirmed="disableTwoFactorAuthentication">
            <JetDangerButton :class="{ 'opacity-25': disabling }" :disabled="disabling">
              {{ __('Disable') }}
            </JetDangerButton>
          </JetConfirmsPassword>
        </div>
      </div>
    </template>
  </JetActionSection>
</template>
