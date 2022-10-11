const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
    './vendor/laravel/jetstream/**/*.blade.php',
    './storage/framework/views/*.php',
    './resources/views/**/*.blade.php',
    './resources/js/**/*.vue',
    //'./node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx}',
    //'./node_modules/flowbite/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        gray: colors.slate,
        laravel: {
          50: '#FEF2F1',
          100: '#FDE9E7',
          200: '#FBCECB',
          300: '#F8AFAA',
          400: '#F5837A',
          500: '#EF3B2D',
          600: '#DF1F11',
          700: '#C71B0F',
          800: '#A6170D',
          900: '#721009',
        },
      },
    },
  },

  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
    require('flowbite-vue'),
  ],
}
