<script setup>
const props = defineProps({
	canResetPassword: Boolean,
	status: String,
})

const form = useForm({
	email: '',
	password: '',
	remember: false,
})

const submit = () => {
	form
		.transform((data) => ({
			...data,
			remember: form.remember ? 'on' : '',
		}))
		.post(useRoutes('login'), {
			onFinish: () => form.reset('password'),
		})
}
</script>

<template>
	<Head :title="__('Login')" />

	<JetAuthenticationCard>
		<template #logo>
			<JetAuthenticationCard-logo />
		</template>

		<JetValidationErrors class="mb-4" />

		<div v-if="props.status" class="mb-4 text-sm font-medium text-green-600">
			{{ props.status }}
		</div>

		<form @submit.prevent="submit">
			<div>
				<JetLabel for="email" :value="__('Email')" />
				<JetInput id="email" type="email" class="block w-full mt-1" v-model="form.email" required autofocus />
			</div>

			<div class="mt-4">
				<JetLabel for="password" :value="__('Password')" />
				<JetInput
					id="password"
					type="password"
					class="block w-full mt-1"
					v-model="form.password"
					required
					autocomplete="current-password"
				/>
			</div>

			<div class="block mt-4">
				<label class="flex items-center">
					<JetCheckbox name="remember" v-model:checked="form.remember" />
					<span class="ml-2 text-sm text-gray-600">{{ __('Remember me') }}</span>
				</label>
			</div>

			<div class="flex items-center justify-end mt-4">
				<Link
					v-if="props.canResetPassword"
					:href="route('password.request')"
					class="text-sm text-gray-600 underline hover:text-gray-900"
				>
					{{ __('Forgot your password?') }}
				</Link>

				<JetButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
					{{ __('Login') }}
				</JetButton>
			</div>
		</form>
	</JetAuthenticationCard>
</template>
