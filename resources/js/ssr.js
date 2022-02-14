import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import createServer from '@inertiajs/server'
import { jetstreamssr } from '@/Application/ssrPlugin.js'

const pages = import.meta.globEager('./Pages/**/*.vue')

createServer((page) =>
  createInertiaApp({
    title: (title) => `${title} - ${process.env.VITE_APP_NAME}`,
    page,
    render: renderToString,
    resolve: (name) => pages[`./Pages/${name}.vue`].default,
    setup({ app, props, plugin }) {
      return createSSRApp({
        render: () => h(app, props),
      })
        .use(plugin)
        .use(jetstreamssr)
    },
  })
)
