import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import createServer from '@inertiajs/server'
import { jetstreamssr } from '@/Application/ssrPlugin.js'
import route from 'ziggy'
import { trans } from 'zora'

const pages = import.meta.globEager('./Pages/**/*.vue')

createServer((page) =>
	createInertiaApp({
		title: (title) => `${title} - ${process.env.VITE_APP_NAME}`,
		page,
		render: renderToString,
		resolve: (name) => pages[`./Pages/${name}.vue`].default,
		setup({ app, props, plugin }) {
			const Ziggy = {
				...props.initialPage.props.ziggy,
				location: new URL(props.initialPage.props.ziggy.url),
			}
			const Zora = {
				...props.initialPage.props.zora,
			}
			return createSSRApp({
				render: () => h(app, props),
			})
				.use(plugin)
				.use(jetstreamssr)
				.mixin({
					methods: {
						route: (name, params, absolute, config = Ziggy) => route(name, params, absolute, config),
						__: (key, replace, config = Zora) => trans(key, replace, config),
						trans: (key, replace, config = Zora) => trans(key, replace, config),
					},
				})
		},
	})
)
