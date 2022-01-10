import { ref } from 'vue'
import route from 'ziggy'
import { Ziggy } from '../ziggy.js'

export default function useRoutes(name, params) {
	const href = ref(null)

	const generate = (name, params, absolute, config = Ziggy) => route(name, params, absolute, config)

	const build = () => {
		href.value = generate(name, params)
	}

	build()

	return { href }
}
