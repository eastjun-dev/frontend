import { keyboardMap } from './utils.js'

const validator = {
  isString(str) {
    return typeof str === 'string' || str instanceof String
  },
  isEmptyString(str) {
    return (!str || 0 === str.length)
  },
  isEnterKey(key) {
    return key === keyboardMap.ENTER
  },
  isEscKey(key) {
    return key === keyboardMap.ESC
  },
}

export default validator
