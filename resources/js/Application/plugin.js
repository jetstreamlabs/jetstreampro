import { createStore } from 'vuex'
import { Head, Link } from '@inertiajs/inertia-vue3'
import mitt from 'mitt'
import dayjs from 'dayjs'
import core from './store/core.js'
import echo from './laravelEcho.js'
import axios from 'axios'
import lodash from 'lodash'

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

		app.use(store)

		app.component('Head', Head)
		app.component('Link', Link)
	}
}