<script setup>
const props = defineProps({ title: String })
const title = props.title || useTrans('Dashboard')
const showingNavigationDropdown = ref(false)

const switchToTeam = (team) => {
  // prettier-ignore
  Inertia.put(useRoutes('current-team.update'), 
    { team_id: team.id }, 
    { preserveState: false }
	)
}

const logout = () => {
  Inertia.post(useRoutes('logout'))
}
</script>

<template>
  <Head :title="title" />

  <Banner />

  <div class="min-h-screen bg-gray-100">
    <nav class="bg-white border-b border-color-transparent">
      <!-- Primary Navigation Menu -->
      <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex">
            <!-- Logo -->
            <div class="flex items-center shrink-0">
              <Link :href="route('dashboard.show')">
                <ApplicationMark class="block w-auto h-9" />
              </Link>
            </div>

            <!-- Navigation Links -->
            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
              <NavLink :href="route('dashboard.show')" :active="route().current('dashboard.show')">
                {{ __('Dashboard') }}
              </NavLink>
            </div>
          </div>
          <div class="hidden sm:ml-6 sm:flex sm:items-center">
            <div class="relative ml-3">
              <!-- Teams Dropdown -->
              <Dropdown align="right" width="60" v-if="$page.props.jetstream.hasTeamFeatures">
                <template #trigger>
                  <span class="inline-flex rounded-md">
                    <button
                      type="button"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:bg-gray-50 hover:text-gray-700 focus:bg-gray-50 focus:outline-none active:bg-gray-50">
                      {{ $page.props.user.current_team.name }}
                      <IconOutlineSelector class="ml-2 -mr-0.5 h-4 w-4" />
                    </button>
                  </span>
                </template>

                <template #content>
                  <div class="w-60">
                    <!-- Team Management -->
                    <template v-if="$page.props.jetstream.hasTeamFeatures">
                      <div class="block px-4 py-2 text-xs text-gray-400">{{ __('Manage Team') }}</div>

                      <!-- Team Settings -->
                      <DropdownLink :href="route('teams.show', $page.props.user.current_team)">
                        {{ __('Team Settings') }}
                      </DropdownLink>

                      <DropdownLink :href="route('teams.create')" v-if="$page.props.jetstream.canCreateTeams">
                        {{ __('Create New Team') }}
                      </DropdownLink>

                      <div class="border-t border-gray-100"></div>

                      <!-- Team Switcher -->
                      <div class="block px-4 py-2 text-xs text-gray-400">{{ __('Switch Teams') }}</div>

                      <template v-for="team in $page.props.user.all_teams" :key="team.id">
                        <form @submit.prevent="switchToTeam(team)">
                          <DropdownLink has="button">
                            <div class="flex items-center">
                              <IconOutlineBadgeCheck
                                v-if="team.id == $page.props.user.current_team_id"
                                class="w-5 h-5 mr-2 text-green-400" />
                              <div>{{ team.name }}</div>
                            </div>
                          </DropdownLink>
                        </form>
                      </template>
                    </template>
                  </div>
                </template>
              </Dropdown>
            </div>

            <!-- Settings Dropdown -->
            <div class="relative ml-3">
              <Dropdown align="right" width="48">
                <template #trigger>
                  <button
                    v-if="$page.props.jetstream.managesProfilePhotos"
                    class="flex text-sm transition border-2 border-transparent rounded-full focus:border-laravel-500 focus:outline-none">
                    <img
                      class="object-cover w-8 h-8 rounded-full"
                      :src="$page.props.user.profile_photo_url"
                      :alt="$page.props.user.name" />
                  </button>

                  <span v-else class="inline-flex rounded-md">
                    <button
                      type="button"
                      class="inline-flex items-center px-3 py-2 text-sm font-medium leading-4 text-gray-500 transition bg-white border border-transparent rounded-md hover:text-gray-700 focus:outline-none">
                      {{ $page.props.user.name }}

                      <IconOutlineChevronDown class="ml-2 -mr-0.5 h-4 w-4" />
                    </button>
                  </span>
                </template>

                <template #content>
                  <!-- Account Management -->
                  <div class="block px-4 py-2 text-xs text-gray-400">{{ __('Manage Account') }}</div>

                  <DropdownLink :href="route('profile.show')"> {{ __('Profile') }} </DropdownLink>

                  <DropdownLink :href="route('api-tokens.index')" v-if="$page.props.jetstream.hasApiFeatures">
                    {{ __('API Tokens') }}
                  </DropdownLink>

                  <div class="border-t border-gray-100"></div>

                  <!-- Authentication -->
                  <form @submit.prevent="logout">
                    <DropdownLink has="button"> {{ __('Logout') }} </DropdownLink>
                  </form>
                </template>
              </Dropdown>
            </div>
          </div>

          <!-- Hamburger -->
          <div class="flex items-center -mr-2 sm:hidden">
            <button
              @click="showingNavigationDropdown = !showingNavigationDropdown"
              class="inline-flex items-center justify-center p-2 text-gray-400 transition rounded-md hover:bg-gray-100 hover:text-gray-500 focus:bg-gray-100 focus:text-gray-500 focus:outline-none">
              <IconOutlineMenu
                class="w-6 h-6"
                :class="{ hidden: showingNavigationDropdown, 'inline-flex': !showingNavigationDropdown }" />
              <IconOutlineX
                class="w-6 h-6"
                :class="{ hidden: !showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" />
            </button>
          </div>
        </div>
      </div>

      <!-- Responsive Navigation Menu -->
      <div :class="{ block: showingNavigationDropdown, hidden: !showingNavigationDropdown }" class="sm:hidden">
        <div class="px-4 pt-2 pb-3 space-y-1">
          <ResponsiveNavLink :href="route('dashboard.show')" :active="route().current('dashboard.show')">
            {{ __('Dashboard') }}
          </ResponsiveNavLink>
        </div>

        <!-- Responsive Settings Options -->
        <div class="pt-4 pb-1 border-t border-gray-200">
          <div class="flex items-center px-4">
            <div v-if="$page.props.jetstream.managesProfilePhotos" class="mr-3 shrink-0">
              <img
                class="object-cover w-10 h-10 rounded-full"
                :src="$page.props.user.profile_photo_url"
                :alt="$page.props.user.name" />
            </div>

            <div>
              <div class="text-base font-medium text-gray-800">{{ $page.props.user.name }}</div>
              <div class="text-sm font-medium text-gray-500">{{ $page.props.user.email }}</div>
            </div>
          </div>

          <div class="px-4 mt-3 space-y-1">
            <ResponsiveNavLink :href="route('profile.show')" :active="route().current('profile.show')">
              {{ __('Profile') }}
            </ResponsiveNavLink>

            <ResponsiveNavLink
              :href="route('api-tokens.index')"
              :active="route().current('api-tokens.index')"
              v-if="$page.props.jetstream.hasApiFeatures">
              {{ __('API Tokens') }}
            </ResponsiveNavLink>

            <!-- Authentication -->
            <form method="POST" @submit.prevent="logout">
              <ResponsiveNavLink has="button">{{ __('Logout') }}</ResponsiveNavLink>
            </form>

            <!-- Team Management -->
            <template v-if="$page.props.jetstream.hasTeamFeatures">
              <div class="border-t border-gray-200"></div>

              <div class="block px-4 py-2 text-xs text-gray-400">{{ __('Manage Teams') }}</div>

              <!-- Team Settings -->
              <ResponsiveNavLink
                :href="route('teams.show', $page.props.user.current_team)"
                :active="route().current('teams.show')">
                {{ __('Team Settings') }}
              </ResponsiveNavLink>

              <ResponsiveNavLink
                :href="route('teams.create')"
                :active="route().current('teams.create')"
                v-if="$page.props.jetstream.canCreateTeams">
                {{ __('Create New Team') }}
              </ResponsiveNavLink>

              <div class="border-t border-gray-200"></div>

              <!-- Team Switcher -->
              <div class="block px-4 py-2 text-xs text-gray-400">{{ __('Switch Teams') }}</div>

              <template v-for="team in $page.props.user.all_teams" :key="team.id">
                <form @submit.prevent="switchToTeam(team)">
                  <ResponsiveNavLink has="button">
                    <div class="flex items-center">
                      <IconOutlineBadgeCheck
                        v-if="team.id == $page.props.user.current_team_id"
                        class="w-5 h-5 mr-2 text-green-400" />
                      <div>{{ team.name }}</div>
                    </div>
                  </ResponsiveNavLink>
                </form>
              </template>
            </template>
          </div>
        </div>
      </div>
    </nav>

    <!-- Page Heading -->
    <header class="bg-gray-300" v-if="$slots.header">
      <div class="px-4 py-6 mx-auto text-white max-w-7xl sm:px-6 lg:px-8">
        <slot name="header"></slot>
      </div>
    </header>

    <!-- Page Content -->
    <main>
      <slot></slot>
    </main>
  </div>
</template>
