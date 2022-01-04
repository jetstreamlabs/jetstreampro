<template>
	<MainApp title="API Tokens">
		<template #header>
			<h2 class="text-xl font-semibold leading-tight text-gray-800">API Tokens</h2>
		</template>

		<div>
			<div class="py-10 mx-auto max-w-7xl sm:px-6 lg:px-8">
				<ApiTokenManager
					:tokens="props.tokens"
					:available-permissions="props.availablePermissions"
					:default-permissions="props.defaultPermissions" />
			</div>
		</div>
	</MainApp>
</template>

<script setup>
//prettier-ignore
const props = defineProps([
  'tokens', 
  'availablePermissions', 
  'defaultPermissions'
])
</script>
