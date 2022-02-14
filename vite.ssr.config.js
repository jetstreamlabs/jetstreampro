import { defineConfig } from 'vite'
import { resolve } from 'path'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig(() => ({
  publicDir: false,
  build: {
    ssr: true,
    target: 'node17',
    outDir: 'public/render',
    rollupOptions: {
      input: 'resources/js/ssr.js',
    },
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'resources/js'),
      '/storage': resolve(__dirname, 'storage/app/public'),
      ziggy: resolve(__dirname, 'vendor/tightenco/ziggy/dist/vue.es.js'),
      zora: resolve(__dirname, 'vendor/jetstreamlabs/zora/dist/vue.js'),
      'zora-js': resolve(__dirname, 'vendor/jetstreamlabs/zora/dist/ssr.js'),
      composable: resolve(__dirname, 'resources/js/Composable/index.js'),
    },
  },
  optimizeDeps: {
    include: [
      'vue',
      'vuex',
      '@headlessui/vue',
      '@inertiajs/inertia',
      '@inertiajs/inertia-vue3',
      '@inertiajs/progress',
      '@inertiajs/server',
      '@vue/server-renderer',
      'vue/server-renderer',
      'larasocket-js',
      'laravel-echo',
      'ziggy-js',
      'lodash',
      'mitt',
      'dayjs',
      'axios',
    ],
  },
  plugins: [
    Vue({
      include: [/\.vue$/, /\.md$/],
    }),
    Icons({
      compiler: 'vue3',
      autoInstall: true,
    }),
    AutoImport({
      include: [
        /\.vue$/,
        /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        'vuex',
        {
          '@inertiajs/inertia': ['Inertia'],
          '@inertiajs/inertia-vue3': ['useForm', 'usePage', 'useRemember'],
          composable: ['useTrans', 'useRoutes'],
        },
      ],
      dts: 'auto-imports.d.ts',
    }),
    Components({
      dirs: ['resources/js/Components'],
      resolvers: [
        HeadlessUiResolver(),
        IconsResolver({
          prefix: 'icon',
          enabledCollections: ['heroicons-outline', 'heroicons-solid'],
          alias: {
            outline: 'heroicons-outline',
            solid: 'heroicons-solid',
          },
        }),
      ],
      dts: 'components.d.ts',
    }),
  ],
}))
