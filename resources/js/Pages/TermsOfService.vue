<script setup>
const props = defineProps(['terms'])
</script>

<template>
  <Head :title="__('Terms of Service')" />

  <div class="font-sans antialiased text-gray-900">
    <div class="pt-4 bg-gray-100">
      <div class="flex flex-col items-center min-h-screen pt-6 sm:pt-0">
        <div>
          <AuthenticationCard-logo />
        </div>

        <div
          v-html="props.terms"
          class="w-full p-6 mt-6 overflow-hidden prose bg-white shadow-md sm:max-w-2xl sm:rounded-lg"></div>
      </div>
    </div>
  </div>
</template>
