import dotenv from 'dotenv'
import expandDotenv from 'dotenv-expand'
import { homedir } from 'os'
import fs from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import Icons from 'unplugin-icons/vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import IconsResolver from 'unplugin-icons/resolver'
import { HeadlessUiResolver } from 'unplugin-vue-components/resolvers'

const env = expandDotenv.expand(dotenv.config()).parsed

// prettier-ignore
export default defineConfig(({ command }) => {
  return {
    base: command === 'serve' ? '' : '/build/',
    publicDir: '__none__',
    build: {
      outDir: 'public/build',
      emptyOutDir: true,
      manifest: true,
      target: 'es2020',
      rollupOptions: {
        input: 'resources/js/app.js',
      },
    },
    server: command === 'serve' ? makeServer(command) : null,
    resolve: {
      alias: {
        '@': resolve(__dirname, 'resources/js'),
        '/storage': resolve(__dirname, 'storage/app/public'),
        vue: resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm-bundler.js'),
        ziggy: resolve(__dirname, 'vendor/tightenco/ziggy/dist/vue.es.js'),
        zora: resolve(__dirname, 'vendor/jetstreamlabs/zora/dist/vue.js'),
        'zora-js': resolve(__dirname, 'vendor/jetstreamlabs/zora/dist/index.js'),
        composable: resolve(__dirname, 'resources/js/Composable/index.js'),
      },
    },
    optimizeDeps: {
      include: [
        'vue',
        'vuex',
        '@inertiajs/inertia',
        '@inertiajs/inertia-vue3',
        '@inertiajs/progress',
        '@headlessui/vue',
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
  }
})

export const makeServer = (command) => {
  // We ONLY build a server here if we're in local mode
  if (command === 'serve') {
    let secure

    if (env.VITE_HTTPS == 'true') {
      const certPath = resolve(homedir(), env.VITE_CERTPATH)

      secure = {
        key: fs.readFileSync(resolve(certPath, `${env.VITE_DOMAIN}.key`)),
        cert: fs.readFileSync(resolve(certPath, `${env.VITE_DOMAIN}.crt`)),
      }
    } else {
      secure = false
    }

    return {
      host: env.VITE_DOMAIN,
      port: env.VITE_PORT,
      origin: `${env.APP_URL}:${env.VITE_PORT}`,
      strictPort: true,
      https: secure,
      hmr: {
        host: env.VITE_DOMAIN,
        port: env.VITE_PORT,
      },
    }
  }
}
