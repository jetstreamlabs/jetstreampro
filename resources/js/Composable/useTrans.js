import { ref } from 'vue'
import { trans } from 'zora'
import { Zora } from '../zora.js'

export default function useTrans(key, replace) {
	const phrase = ref('')

	const translate = () => {
		phrase.value = trans(key, replace, Zora)
	}

	translate()

	return { phrase }
}
