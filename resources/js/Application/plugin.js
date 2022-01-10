import { createStore } from 'vuex'
import { Head, Link } from '@inertiajs/inertia-vue3'
import mitt from 'mitt'
import dayjs from 'dayjs'
import route from 'ziggy'
import { Ziggy } from '../ziggy.js'
import { trans } from 'zora'
import { Zora } from '../zora.js'
import core from './store/core.js'
import echo from './laravelEcho.js'
import axios from 'axios'
import lodash from 'lodash'
//prettier-ignore
const Translate = {
	install: (app, options) => app.mixin({
    methods: {
      __: (key, replace, config = options) => trans(key, replace, config),
      trans: (key, replace, config = options) => trans(key, replace, config)
    }
  })
}
//prettier-ignore
const Router = {
	install: (app, options) => app.mixin({
    methods: {
      route: (name, params, absolute, config = options) => route(name, params, absolute, config)
    }
  })
}
//prettier-ignore
export const jetstreampro = {
	install(app) {
		axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
		axios.defaults.withCredentials = true

		Object.defineProperty(app.config.globalProperties, 'emitter', { get: () => mitt() })
		Object.defineProperty(app.config.globalProperties, 'dayjs', { get: () => dayjs })
		Object.defineProperty(app.config.globalProperties, 'echo', { get: () => echo })
		Object.defineProperty(app.config.globalProperties, 'axios', { get: () => axios })
    Object.defineProperty(app.config.globalProperties, '_', { get: () => lodash })

		window.axios = axios
		window._ = lodash

		const store = createStore({
			modules: { core }
		})

    app.use(Router, Ziggy)
    app.use(Translate, Zora)
		app.use(store)

		app.component('Head', Head)
		app.component('Link', Link)
	}
}
