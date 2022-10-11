<script setup>
const props = defineProps(['value'])
</script>

<template>
  <label class="block text-sm font-medium text-gray-700">
    <span v-if="props.value">{{ props.value }}</span>
    <span v-else><slot></slot></span>
  </label>
</template>
