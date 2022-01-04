<template>
	<div>
		<transition
			leave-active-class="transition duration-1000 ease-in"
			leave-from-class="opacity-100"
			leave-to-class="opacity-0"
		>
			<div v-show="props.on" class="text-sm text-gray-600">
				<slot />
			</div>
		</transition>
	</div>
</template>

<script setup>
const props = defineProps(['on']);
</script>
