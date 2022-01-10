<script setup>
const props = defineProps({
	checked: {
		type: [Array, Boolean],
		default: false,
	},
	value: {
		default: null,
	},
})
const emit = defineEmits(['update:checked'])

const proxyChecked = computed({
	get: () => {
		return props.checked
	},
	set: (val) => {
		emit('update:checked', val)
	},
})
</script>

<template>
	<input
		type="checkbox"
		:value="props.value"
		v-model="proxyChecked"
		class="text-indigo-600 border-gray-300 rounded shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
</template>
