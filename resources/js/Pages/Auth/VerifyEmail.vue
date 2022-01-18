<script setup>
const props = defineProps({ status: String })
const form = useForm()

const submit = () => {
	form.post(useRoutes('verification.send'))
}

const verificationLinkSent = computed(() => {
	return props.status === 'verification-link-sent'
})
</script>

<template>
	<Head :title="__('Email Verification')" />

	<JetAuthenticationCard>
		<template #logo>
			<JetAuthenticationCard-logo />
		</template>

		<div class="mb-4 text-sm text-gray-600">
			{{
				__(
					"Thanks for signing up! Before getting started, could you verify your email address by clicking on the link we just emailed to you? If you didn't receive the email, we will gladly send you another."
				)
			}}
		</div>

		<div class="mb-4 text-sm font-medium text-green-600" v-if="verificationLinkSent">
			{{ __('A new verification link has been sent to the email address you provided during registration.') }}
		</div>

		<form @submit.prevent="submit">
			<div class="flex items-center justify-between mt-4">
				<JetButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
					{{ __('Resend Verification Email') }}
				</JetButton>

				<Link
					:href="route('logout')"
					method="post"
					has="button"
					class="text-sm text-gray-600 underline hover:text-gray-900"
				>
					{{ __('Log Out') }}
				</Link>
			</div>
		</form>
	</JetAuthenticationCard>
</template>
