import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { jetstreampro } from '@/Application/plugin.js'
import DefaultLayout from '@/Components/Layouts/MainLayout.vue'

const pages = import.meta.glob('../Pages/**/*.vue')

export default async function createJetstreamApp({ appName }) {
	return createInertiaApp({
		title: (title) => `${title} - ${appName}`,
		resolve: (name) => {
			const page = pages[`../Pages/${name}.vue`]

			if (!page) {
				throw new Error(`Unknown page ${name}. Is it located in resources/js/Pages with a .vue extension?`)
			}

			page.layout = page.layout || DefaultLayout

			return page().then((module) => module.default)
		},
		setup({ el, app, props, plugin }) {
			return createApp({ render: () => h(app, props) })
				.use(plugin)
				.use(jetstreampro)
				.mount(el)
		},
	})
}
