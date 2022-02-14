import { trans } from 'zora-js'
import { Zora } from '../zora.js'

export default function useTrans(key, replace) {
  return trans(key, replace, Zora)
}
