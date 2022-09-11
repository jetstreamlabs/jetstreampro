import { createSSRApp, h } from 'vue'
import { renderToString } from '@vue/server-renderer'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import createServer from '@inertiajs/server'
import { jetstreamssr } from '@/Application/ssrPlugin.js'

createServer(
  (page) =>
    createInertiaApp({
      title: (title) => `${title} - ${import.meta.env.VITE_APP_NAME}`,
      page,
      render: renderToString,
      resolve: (name) => require(`./Pages/${name}.vue`),
      setup({ app, props, plugin }) {
        return createSSRApp({
          render: () => h(app, props),
        })
          .use(plugin)
          .use(jetstreamssr)
      },
    }),
  import.meta.env.VITE_SSR_PORT
)
