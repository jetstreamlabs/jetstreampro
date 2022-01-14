import { defineConfig } from 'vite'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import vue from '@vitejs/plugin-vue'
import dotenv from 'dotenv'
import dotenvExpand from 'dotenv-expand'
import { homedir } from 'os'
import fs from 'fs'
import { resolve } from 'path'

const process = dotenv.config()
const parsed = dotenvExpand(process).parsed

const certPath = resolve(homedir(), parsed.VITE_CERTPATH)

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
		server: command === 'serve' ? makeServer() : null,
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
	}
})

export const makeServer = () => {
	if (parsed.VITE_HTTPS == 'true') {
		console.log('here')
		return {
			host: parsed.VITE_DOMAIN,
			port: parsed.VITE_PORT,
			origin: `${parsed.APP_URL}:${parsed.VITE_PORT}`,
			strictPort: true,
			https: {
				key: fs.readFileSync(resolve(certPath, `${parsed.VITE_DOMAIN}.key`)),
				cert: fs.readFileSync(resolve(certPath, `${parsed.VITE_DOMAIN}.crt`)),
			},
			hmr: {
				host: parsed.VITE_DOMAIN,
				port: parsed.VITE_PORT,
			},
		}
	} else {
		return {
			host: parsed.VITE_DOMAIN,
			port: parsed.VITE_PORT,
			origin: `${parsed.APP_URL}:${parsed.VITE_PORT}`,
			strictPort: true,
			https: false,
			hmr: {
				host: parsed.VITE_DOMAIN,
				port: parsed.VITE_PORT,
			},
		}
	}
}
