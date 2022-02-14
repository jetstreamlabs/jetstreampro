<script setup>
const show = ref(true)
const style = computed(() => usePage().props.value.jetstream.flash?.bannerStyle || 'success')
const message = computed(() => usePage().props.value.jetstream.flash?.banner || '')
</script>

<template>
  <div>
    <div :class="{ 'bg-green-500': style == 'success', 'bg-red-700': style == 'danger' }" v-if="show && message">
      <div class="max-w-screen-xl px-3 py-2 mx-auto sm:px-6 lg:px-8">
        <div class="flex flex-wrap items-center justify-between">
          <div class="flex items-center flex-1 w-0 min-w-0">
            <span
              class="flex p-2 rounded-lg"
              :class="{ 'bg-green-600': style == 'success', 'bg-red-600': style == 'danger' }">
              <IconOutlineCheckCircle v-if="style == 'success'" class="w-5 h-5 text-white" />
              <IconOutlineExclamation v-if="style == 'danger'" class="w-5 h-5 text-white" />
            </span>

            <p class="ml-3 text-sm font-medium text-white truncate">
              {{ message }}
            </p>
          </div>

          <div class="shrink-0 sm:ml-3">
            <button
              type="button"
              class="flex p-2 -mr-1 transition rounded-full focus:outline-none sm:-mr-2"
              :class="{
                'hover:bg-green-600 focus:bg-green-600': style == 'success',
                'hover:bg-red-600 focus:bg-red-600': style == 'danger',
              }"
              aria-label="Dismiss"
              @click.prevent="show = false">
              <IconOutlineX class="w-5 h-5 text-white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
