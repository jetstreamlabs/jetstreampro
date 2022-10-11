<script setup>
const displayingToken = ref(false)
const managingPermissionsFor = ref(null)
const apiTokenBeingDeleted = ref(null)

const props = defineProps(['tokens', 'availablePermissions', 'defaultPermissions'])
const { tokens, availablePermissions } = toRefs(props)

const createApiTokenForm = useForm({
  name: '',
  permissions: props.defaultPermissions,
})
const updateApiTokenForm = useForm({
  permissions: [],
})
const deleteApiTokenForm = useForm()

const createApiToken = () => {
  createApiTokenForm.post(useRoutes('api-tokens.store'), {
    preserveScroll: true,
    onSuccess: () => {
      displayingToken.value = true
      createApiTokenForm.reset()
    },
  })
}

const manageApiTokenPermissions = (token) => {
  updateApiTokenForm.permissions = token.abilities
  managingPermissionsFor.value = token
}

const updateApiToken = () => {
  updateApiTokenForm.put(useRoutes('api-tokens.update', { token: managingPermissionsFor.value.id }), {
    preserveScroll: true,
    preserveState: true,
    onSuccess: () => (managingPermissionsFor.value = null),
  })
}

const confirmApiTokenDeletion = (token) => {
  apiTokenBeingDeleted.value = token
}

const deleteApiToken = () => {
  deleteApiTokenForm.delete(useRoutes('api-tokens.destroy', { token: apiTokenBeingDeleted.value.id }), {
    preserveScroll: true,
    preserveState: true,
    onSuccess: () => (apiTokenBeingDeleted.value = null),
  })
}
</script>

<template>
  <div>
    <!-- Generate API Token -->
    <FormSection @submitted="createApiToken">
      <template #title>{{ __('Create API Token') }}</template>

      <template #description>
        {{ __('API tokens allow third-party services to authenticate with our application on your behalf.') }}
      </template>

      <template #form>
        <!-- Token Name -->
        <div class="col-span-6 sm:col-span-4">
          <Label for="name" :value="__('Name')" />
          <Input id="name" type="text" class="block w-full mt-1" v-model="createApiTokenForm.name" autofocus />
          <Input-error :message="createApiTokenForm.errors.name" class="mt-2" />
        </div>

        <!-- Token Permissions -->
        <div class="col-span-6" v-if="availablePermissions.length > 0">
          <Label for="permissions" :value="__('Permissions')" />

          <div class="grid grid-cols-1 gap-4 mt-2 md:grid-cols-2">
            <div v-for="permission in availablePermissions" :key="permission">
              <label class="flex items-center">
                <Checkbox :value="permission" v-model:checked="createApiTokenForm.permissions" />
                <span class="ml-2 text-sm text-gray-600">{{ permission }}</span>
              </label>
            </div>
          </div>
        </div>
      </template>

      <template #actions>
        <ActionMessage :on="createApiTokenForm.recentlySuccessful" class="mr-3"> {{ __('Created.') }}</ActionMessage>

        <Button :class="{ 'opacity-25': createApiTokenForm.processing }" :disabled="createApiTokenForm.processing">
          {{ __('Create') }}
        </Button>
      </template>
    </FormSection>

    <div v-if="tokens.length > 0">
      <SectionBorder />

      <!-- Manage API Tokens -->
      <div class="mt-10 sm:mt-0">
        <ActionSection>
          <template #title>{{ __('Manage API Tokens') }}</template>

          <template #description>
            {{ __('You may delete any of your existing tokens if they are no longer needed.') }}
          </template>

          <!-- API Token List -->
          <template #content>
            <div class="space-y-6">
              <div class="flex items-center justify-between" v-for="token in tokens" :key="token.id">
                <div>
                  {{ token.name }}
                </div>

                <div class="flex items-center">
                  <div class="text-sm text-gray-400" v-if="token.last_used_ago">
                    {{ __('Last used') }} {{ token.last_used_ago }}
                  </div>

                  <button
                    class="ml-6 text-sm text-gray-400 underline cursor-pointer"
                    @click="manageApiTokenPermissions(token)"
                    v-if="availablePermissions.length > 0">
                    {{ __('Permissions') }}
                  </button>

                  <button class="ml-6 text-sm text-red-500 cursor-pointer" @click="confirmApiTokenDeletion(token)">
                    {{ __('Delete') }}
                  </button>
                </div>
              </div>
            </div>
          </template>
        </ActionSection>
      </div>
    </div>

    <!-- Token Value Modal -->
    <DialogModal :show="displayingToken" @close="displayingToken = false">
      <template #title>{{ __('API Token') }}</template>

      <template #content>
        <div>
          {{ __("Please copy your new API token. For your security, it won't be shown again.") }}
        </div>

        <div
          class="px-4 py-2 mt-4 font-mono text-sm text-gray-500 bg-gray-100 rounded"
          v-if="$page.props.jetstream.flash.token">
          {{ $page.props.jetstream.flash.token }}
        </div>
      </template>

      <template #footer>
        <SecondaryButton @click="displayingToken = false">
          {{ __('Close') }}
        </SecondaryButton>
      </template>
    </DialogModal>

    <!-- API Token Permissions Modal -->
    <DialogModal :show="managingPermissionsFor" @close="managingPermissionsFor = null">
      <template #title>{{ __('API Token Permissions') }}</template>

      <template #content>
        <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div v-for="permission in availablePermissions" :key="permission">
            <label class="flex items-center">
              <Checkbox :value="permission" v-model:checked="updateApiTokenForm.permissions" />
              <span class="ml-2 text-sm text-gray-600">{{ permission }}</span>
            </label>
          </div>
        </div>
      </template>

      <template #footer>
        <Button color="light" size="md" @click="managingPermissionsFor = null">
          {{ __('Cancel') }}
        </Button>

        <Button
          class="ml-2"
          @click="updateApiToken"
          :class="{ 'opacity-25': updateApiTokenForm.processing }"
          :disabled="updateApiTokenForm.processing">
          {{ __('Save') }}
        </Button>
      </template>
    </DialogModal>

    <!-- Delete Token Confirmation Modal -->
    <ConfirmationModal :show="apiTokenBeingDeleted" @close="apiTokenBeingDeleted = null">
      <template #title>{{ __('Delete API Token') }}</template>

      <template #content>
        {{ __('Are you sure you would like to delete this API token?') }}
      </template>

      <template #footer>
        <SecondaryButton @click="apiTokenBeingDeleted = null">
          {{ __('Cancel') }}
        </SecondaryButton>

        <DangerButton
          class="ml-2"
          @click="deleteApiToken"
          :class="{ 'opacity-25': deleteApiTokenForm.processing }"
          :disabled="deleteApiTokenForm.processing">
          {{ __('Delete') }}
        </DangerButton>
      </template>
    </ConfirmationModal>
  </div>
</template>
