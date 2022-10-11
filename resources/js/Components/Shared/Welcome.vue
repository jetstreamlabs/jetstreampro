<template>
  <div>
    <div class="p-6 bg-white border-b border-gray-200 sm:px-20">
      <div>
        <ApplicationLogo class="block w-auto h-12" />
      </div>

      <div class="mt-8 text-2xl">{{ __('Welcome to your Jetstream application!') }}</div>

      <div class="mt-6 text-gray-500">
        {{
          __(
            'Laravel Jetstream provides a beautiful, robust starting point for your next Laravel application. Laravel is designed to help you build your application using a development environment that is simple, powerful, and enjoyable. We believe you should love expressing your creativity through programming, so we have spent time carefully crafting the Laravel ecosystem to be a breath of fresh air. We hope you love it.'
          )
        }}
      </div>
    </div>

    <div class="grid grid-cols-1 bg-gray-200 bg-opacity-25 md:grid-cols-2">
      <div class="p-6">
        <div class="flex items-center">
          <IconOutlineBookOpen class="w-8 h-8 text-gray-400" />
          <div class="ml-4 text-lg font-semibold leading-7 text-gray-600">
            <a href="https://laravel.com/docs">{{ __('Documentation') }}</a>
          </div>
        </div>

        <div class="ml-12">
          <div class="mt-2 text-sm text-gray-500">
            {{
              __(
                "Laravel has wonderful documentation covering every aspect of the framework. Whether you're new to the framework or have previous experience, we recommend reading all of the documentation from beginning to end."
              )
            }}
          </div>

          <a href="https://laravel.com/docs">
            <div class="flex items-center mt-3 text-sm font-semibold text-laravel-500">
              <div>{{ __('Explore the documentation') }}</div>

              <div class="ml-1">
                <IconSolidArrowRight class="w-4 h-4" />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="p-6 border-t border-gray-200 md:border-t-0 md:border-l">
        <div class="flex items-center">
          <IconOutlineCamera class="w-8 h-8 text-gray-400" />
          <div class="ml-4 text-lg font-semibold leading-7 text-gray-600">
            <a href="https://laracasts.com">{{ __('Laracasts') }}</a>
          </div>
        </div>

        <div class="ml-12">
          <div class="mt-2 text-sm text-gray-500">
            {{
              __(
                'Laracasts offers thousands of video tutorials on Laravel, PHP, and JavaScript development. Check them out, see for yourself, and massively level up your development skills in the process.'
              )
            }}
          </div>

          <a href="https://laracasts.com">
            <div class="flex items-center mt-3 text-sm font-semibold text-laravel-500">
              <div>{{ __('Start watching Laracasts') }}</div>

              <div class="ml-1">
                <IconSolidArrowRight class="w-4 h-4" />
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="p-6 border-t border-gray-200">
        <div class="flex items-center">
          <IconOutlinePhotograph class="w-8 h-8 text-gray-400" />
          <div class="ml-4 text-lg font-semibold leading-7 text-gray-600">
            <a href="https://tailwindcss.com/">{{ __('Tailwind') }}</a>
          </div>
        </div>

        <div class="ml-12">
          <div class="mt-2 text-sm text-gray-500">
            {{
              __(
                "Laravel Jetstream is built with Tailwind, an amazing utility first CSS framework that doesn't get in your way. You'll be amazed how easily you can build and maintain fresh, modern designs with this wonderful framework at your fingertips."
              )
            }}
          </div>
        </div>
      </div>

      <div class="p-6 border-t border-gray-200 md:border-l">
        <div class="flex items-center">
          <IconOutlineLockClosed class="w-8 h-8 text-gray-400" />
          <div class="ml-4 text-lg font-semibold leading-7 text-gray-600">{{ __('Authentication') }}</div>
        </div>

        <div class="ml-12">
          <div class="mt-2 text-sm text-gray-500">
            {{
              __(
                "Authentication and registration views are included with Laravel Jetstream, as well as support for user email verification and resetting forgotten passwords. So, you're free to get started what matters most: building your application."
              )
            }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
