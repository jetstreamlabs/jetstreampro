import { usePage } from '@inertiajs/inertia-vue3'
import route from 'ziggy'

export default function useRoutes(name, params) {
  return route(name, params, false, usePage().props.value.ziggy)
}
