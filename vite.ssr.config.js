const dotenv = require('dotenv')
const expandDotenv = require('dotenv-expand')

import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { resolve } from 'path'
import vue from '@vitejs/plugin-vue'

const env = expandDotenv.expand(dotenv.config()).parsed

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
			vue: resolve(__dirname, 'node_modules/vue/index.js'),
			ziggy: resolve(__dirname, 'vendor/tightenco/ziggy/dist/index.es.js'),
			zora: resolve(__dirname, 'vendor/serenity/zora/dist/ssr.js'),
			composable: resolve(__dirname, 'resources/js/Composable/index.js'),
		},
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
					composable: ['useTrans', 'useRoutes'],
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
}))
