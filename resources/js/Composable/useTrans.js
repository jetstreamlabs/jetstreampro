import { usePage } from '@inertiajs/inertia-vue3'
import { trans } from 'zora'

export default function useTrans(key, replace) {
  return trans(key, replace, usePage().props.value.zora)
}
