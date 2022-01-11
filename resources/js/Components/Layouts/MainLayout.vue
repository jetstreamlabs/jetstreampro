<script setup>
const { trans } = useTrans('layouts.main.dashboard')
const props = defineProps({ title: String })
const title = props.title || trans.value
const showingNavigationDropdown = ref(false)

const switchToTeam = (team) => {
	const { href } = useRoutes('current-team.update')
	// prettier-ignore
	Inertia.put(href.value, 
    { team_id: team.id }, 
    { preserveState: false }
	)
}

const logout = () => {
	const { href } = useRoutes('logout')
	Inertia.post(href.value)
}
</script>

<template>
	<div>
		<Head :title="title" />

		<JetBanner />

		<div class="min-h-screen bg-gray-100">
			<nav class="bg-white border-b border-gray-100">
				<!-- Primary Navigation Menu -->
				<div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<div class="flex justify-between h-16">
						<div class="flex">
							<!-- Logo -->
							<div class="flex items-center shrink-0">
								<Link :href="route('dashboard')">
									<JetApplicationMark class="block w-auto h-9" />
								</Link>
							</div>

							<!-- Navigation Links -->
							<div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
								<JetNavLink :href="route('dashboard')" :active="route().current('dashboard')">
									{{ __('layouts.main.dashboard') }}
								</JetNavLink>
							</div>
						</div>

						<div class="hidden sm:flex sm:items-center sm:ml-6">
							<div class="relative ml-3">
								<!-- Teams Dropdown -->
								<JetDropdown align="right" width="60" v-if="$page.props.jetstream.hasTeamFeatures">
									<template #trigger>
										<span class="inline-flex rounded-md">
											<button
												type="button"
												class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:bg-gray-50 hover:text-gray-700 focus:outline-none focus:bg-gray-50 active:bg-gray-50"
											>
												{{ $page.props.user.current_team.name }}

												<svg
													class="ml-2 -mr-0.5 h-4 w-4"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fill-rule="evenodd"
														d="M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
														clip-rule="evenodd"
													/>
												</svg>
											</button>
										</span>
									</template>

									<template #content>
										<div class="w-60">
											<!-- Team Management -->
											<template v-if="$page.props.jetstream.hasTeamFeatures">
												<div class="block px-4 py-2 text-xs text-gray-400">{{ __('layouts.main.manage') }}</div>

												<!-- Team Settings -->
												<JetDropdownLink :href="route('teams.show', $page.props.user.current_team)">
													{{ __('layouts.main.settings') }}
												</JetDropdownLink>

												<JetDropdownLink :href="route('teams.create')" v-if="$page.props.jetstream.canCreateTeams">
													{{ __('layouts.main.create') }}
												</JetDropdownLink>

												<div class="border-t border-gray-100"></div>

												<!-- Team Switcher -->
												<div class="block px-4 py-2 text-xs text-gray-400">{{ __('layouts.main.switch') }}</div>

												<template v-for="team in $page.props.user.all_teams" :key="team.id">
													<form @submit.prevent="switchToTeam(team)">
														<JetDropdownLink has="button">
															<div class="flex items-center">
																<svg
																	v-if="team.id == $page.props.user.current_team_id"
																	class="w-5 h-5 mr-2 text-green-400"
																	fill="none"
																	stroke-linecap="round"
																	stroke-linejoin="round"
																	stroke-width="2"
																	stroke="currentColor"
																	viewBox="0 0 24 24"
																>
																	<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
																</svg>
																<div>{{ team.name }}</div>
															</div>
														</JetDropdownLink>
													</form>
												</template>
											</template>
										</div>
									</template>
								</JetDropdown>
							</div>

							<!-- Settings Dropdown -->
							<div class="relative ml-3">
								<JetDropdown align="right" width="48">
									<template #trigger>
										<button
											v-if="$page.props.jetstream.managesProfilePhotos"
											class="flex text-sm transition border-2 border-transparent rounded-full focus:outline-none focus:border-gray-300"
										>
											<img
												class="object-cover w-8 h-8 rounded-full"
												:src="$page.props.user.profile_photo_url"
												:alt="$page.props.user.name"
											/>
										</button>

										<span v-else class="inline-flex rounded-md">
											<button
												type="button"
												class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none"
											>
												{{ $page.props.user.name }}

												<svg
													class="ml-2 -mr-0.5 h-4 w-4"
													xmlns="http://www.w3.org/2000/svg"
													viewBox="0 0 20 20"
													fill="currentColor"
												>
													<path
														fill-rule="evenodd"
														d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
														clip-rule="evenodd"
													/>
												</svg>
											</button>
										</span>
									</template>

									<template #content>
										<!-- Account Management -->
										<div class="block px-4 py-2 text-xs text-gray-400">{{ __('layouts.main.account') }}</div>

										<JetDropdownLink :href="route('profile.show')"> {{ __('layouts.main.profile') }} </JetDropdownLink>

										<JetDropdownLink :href="route('api-tokens.index')" v-if="$page.props.jetstream.hasApiFeatures">
											{{ __('layouts.main.tokens') }}
										</JetDropdownLink>

										<div class="border-t border-gray-100"></div>

										<!-- Authentication -->
										<form @submit.prevent="logout">
											<JetDropdownLink has="button"> {{ __('layouts.main.logout') }} </JetDropdownLink>
										</form>
									</template>
								</JetDropdown>
							</div>
						</div>

						<!-- Hamburger -->
						<div class="flex items-center -mr-2 sm:hidden">
							<button
								@click="showingNavigationDropdown = !showingNavigationDropdown"
								class="inline-flex items-center justify-center p-2 text-gray-400 transition rounded-md hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500"
							>
								<svg class="w-6 h-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
									<path
										:class="{ hidden: showingNavigationDropdown, 'inline-flex': !showingNavigationDropdown }"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
									<path
										:class="{ hidden: !showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>

				<!-- Responsive Navigation Menu -->
				<div :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }" class="sm:hidden">
					<div class="pt-2 pb-3 space-y-1">
						<JetResponsiveNavLink :href="route('dashboard')" :active="route().current('dashboard')">
							{{ __('layouts.main.dashboard') }}
						</JetResponsiveNavLink>
					</div>

					<!-- Responsive Settings Options -->
					<div class="pt-4 pb-1 border-t border-gray-200">
						<div class="flex items-center px-4">
							<div v-if="$page.props.jetstream.managesProfilePhotos" class="mr-3 shrink-0">
								<img
									class="object-cover w-10 h-10 rounded-full"
									:src="$page.props.user.profile_photo_url"
									:alt="$page.props.user.name"
								/>
							</div>

							<div>
								<div class="text-base font-medium text-gray-800">{{ $page.props.user.name }}</div>
								<div class="text-sm font-medium text-gray-500">{{ $page.props.user.email }}</div>
							</div>
						</div>

						<div class="mt-3 space-y-1">
							<JetResponsiveNavLink :href="route('profile.show')" :active="route().current('profile.show')">
								{{ __('layouts.main.profile') }}
							</JetResponsiveNavLink>

							<JetResponsiveNavLink
								:href="route('api-tokens.index')"
								:active="route().current('api-tokens.index')"
								v-if="$page.props.jetstream.hasApiFeatures"
							>
								{{ __('layouts.main.tokens') }}
							</JetResponsiveNavLink>

							<!-- Authentication -->
							<form method="POST" @submit.prevent="logout">
								<JetResponsiveNavLink has="button">{{ __('layouts.main.logout') }}</JetResponsiveNavLink>
							</form>

							<!-- Team Management -->
							<template v-if="$page.props.jetstream.hasTeamFeatures">
								<div class="border-t border-gray-200"></div>

								<div class="block px-4 py-2 text-xs text-gray-400">{{ __('layouts.main.manage') }}</div>

								<!-- Team Settings -->
								<JetResponsiveNavLink
									:href="route('teams.show', $page.props.user.current_team)"
									:active="route().current('teams.show')"
								>
									{{ __('layouts.main.settings') }}
								</JetResponsiveNavLink>

								<JetResponsiveNavLink
									:href="route('teams.create')"
									:active="route().current('teams.create')"
									v-if="$page.props.jetstream.canCreateTeams"
								>
									{{ __('layouts.main.create') }}
								</JetResponsiveNavLink>

								<div class="border-t border-gray-200"></div>

								<!-- Team Switcher -->
								<div class="block px-4 py-2 text-xs text-gray-400">{{ __('layouts.main.switch') }}</div>

								<template v-for="team in $page.props.user.all_teams" :key="team.id">
									<form @submit.prevent="switchToTeam(team)">
										<JetResponsiveNavLink has="button">
											<div class="flex items-center">
												<svg
													v-if="team.id == $page.props.user.current_team_id"
													class="w-5 h-5 mr-2 text-green-400"
													fill="none"
													stroke-linecap="round"
													stroke-linejoin="round"
													stroke-width="2"
													stroke="currentColor"
													viewBox="0 0 24 24"
												>
													<path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
												</svg>
												<div>{{ team.name }}</div>
											</div>
										</JetResponsiveNavLink>
									</form>
								</template>
							</template>
						</div>
					</div>
				</div>
			</nav>

			<!-- Page Heading -->
			<header class="bg-white shadow" v-if="$slots.header">
				<div class="px-4 py-6 mx-auto max-w-7xl sm:px-6 lg:px-8">
					<slot name="header"></slot>
				</div>
			</header>

			<!-- Page Content -->
			<main>
				<slot></slot>
			</main>
		</div>
	</div>
</template>