import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { jetstreampro } from '@/Application/plugin.js'
import route from 'ziggy'
import { trans } from 'zora'
import DefaultLayout from '../Components/Layouts/MainLayout.vue'

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
      const Ziggy = { ...props.initialPage.props.ziggy }
      const Zora = { ...props.initialPage.props.zora }

      return createApp({ render: () => h(app, props) })
        .use(plugin)
        .use(jetstreampro)
        .mixin({
          methods: {
            route: (name, params, absolute, config = Ziggy) => route(name, params, false, config),
            __: (key, replace, config = Zora) => trans(key, replace, config),
            trans: (key, replace, config = Zora) => trans(key, replace, config),
          },
        })
        .mount(el)
    },
  })
}
