<template>
	<div>
		<button
			type="submit"
			class="block w-full px-4 py-2 text-sm leading-5 text-left text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
			v-if="has == 'button'">
			<slot></slot>
		</button>

		<a
			:href="href"
			class="block px-4 py-2 text-sm leading-5 text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
			v-else-if="has == 'a'">
			<slot></slot>
		</a>

		<Link
			:href="href"
			class="block px-4 py-2 text-sm leading-5 text-gray-700 transition hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
			v-else>
			<slot></slot>
		</Link>
	</div>
</template>

<script>
export default defineComponent({
	props: ['href', 'has'],
})
</script>
