import { createStore } from 'vuex'
import { Head, Link } from '@inertiajs/inertia-vue3'
import mitt from 'mitt'
import dayjs from 'dayjs'
import core from './store/core.js'
import echo from './laravelEcho.js'
import axios from 'axios'
import lodash from 'lodash'
import { ZiggyVue } from 'ziggy'
import { Ziggy } from '../ziggy.js'
import { ZoraVue } from 'zora'
import { Zora } from '../zora.js'

//prettier-ignore
export const jetstreamssr = {
	install(app) {
		axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
		axios.defaults.withCredentials = true

	  app.provide('emitter', mitt())
    app.provide('dayjs', dayjs)
    app.provide('echo', echo)
    app.provide('axios', axios)
    app.provide('_', lodash)

		const store = createStore({
			modules: { core }
    })
    
    app.use(ZiggyVue, Ziggy)
    app.use(ZoraVue, Zora)
		app.use(store)

		app.component('Head', Head)
		app.component('Link', Link)
	}
}
