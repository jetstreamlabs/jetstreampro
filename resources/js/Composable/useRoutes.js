import route from 'ziggy-js'
import { Ziggy } from '../ziggy.js'

export default function useRoutes(name, params) {
  return route(name, params, false, Ziggy)
}
