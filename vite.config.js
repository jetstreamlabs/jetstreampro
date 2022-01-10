import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'
import Dotenv from 'dotenv'
const { resolve } = require('path')

Dotenv.config()

// prettier-ignore
export default defineConfig(({ command }) => {
  return {
		base: command === 'serve' ? '' : '/build/',
		publicDir: '__none__',
		build: {
			outDir: 'public/build',
			emptyOutDir: true,
			manifest: true,
			target: 'es2018',
			rollupOptions: {
				input: ['resources/js/app.js'],
			},
		},
		server: {
			host: 'jetstreampro.test',
			strictPort: true,
			origin: process.env.VITE_DOMAIN,
			port: process.env.VITE_PORT,
		},
		resolve: {
			alias: {
				'@': resolve(__dirname, 'resources/js'),
				'/storage': resolve(__dirname, 'storage/app/public'),
				vue: resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm-bundler.js'),
				ziggy: resolve(__dirname, 'vendor/tightenco/ziggy/dist/index.es.js'),
				zora: resolve(__dirname, 'vendor/serenity/zora/dist/index.js'),
				composable: resolve(__dirname, 'resources/js/Composable/index.js'),
			},
		},
		optimizeDeps: {
			include: ['vue', '@inertiajs/inertia', '@inertiajs/inertia-vue3', '@inertiajs/progress', 'axios'],
		},
		plugins: [
			vue(),
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
						'composable': ['useTrans', 'useRoutes'],
					},
				],
			}),
			Components({
				dirs: ['resources/js/Components'],
				extensions: ['vue'],
				deep: true,
				resolvers: [],
				dts: false,
				directoryAsNamespace: false,
				globalNamespaces: [],
				directives: true,
				include: [/\.vue$/, /\.vue\?vue/],
				exclude: [/[\\/]node_modules[\\/]/, /[\\/]\.git[\\/]/, /[\\/]\.nuxt[\\/]/],
			}),
		],
	}
})
