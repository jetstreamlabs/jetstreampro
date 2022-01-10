<script setup>
const slots = useSlots()
const emit = defineEmits(['submitted'])
const hasActions = computed(() => {
	return !!slots.actions
})
</script>

<template>
	<div class="md:grid md:grid-cols-3 md:gap-6">
		<JetSectionTitle>
			<template #title><slot name="title"></slot></template>
			<template #description><slot name="description"></slot></template>
		</JetSectionTitle>

		<div class="mt-5 md:mt-0 md:col-span-2">
			<form @submit.prevent="emit('submitted')">
				<div
					class="px-4 py-5 bg-white shadow sm:p-6"
					:class="hasActions ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md'"
				>
					<div class="grid grid-cols-6 gap-6">
						<slot name="form"></slot>
					</div>
				</div>

				<div
					class="flex items-center justify-end px-4 py-3 text-right shadow bg-gray-50 sm:px-6 sm:rounded-bl-md sm:rounded-br-md"
					v-if="hasActions"
				>
					<slot name="actions"></slot>
				</div>
			</form>
		</div>
	</div>
</template>
