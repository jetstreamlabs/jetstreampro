<script setup>
const props = defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue'])

const input = ref()

const focus = () => {
  input.focus()
}

defineExpose({ input })
</script>

<template>
  <input
    class="rounded-md border-gray-300 shadow-sm focus:border-laravel-300 focus:ring focus:ring-laravel-200 focus:ring-opacity-50"
    :value="props.modelValue"
    @input="emit('update:modelValue', $event.target.value)"
    ref="input" />
</template>
