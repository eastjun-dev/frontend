import { errorMessagesMap } from './utils.js'

const ENTER_KEY = 'Enter'
const ESC_KEY = 'Escape'

const validator = {
  validate(result, message) {
    if (!result) throw new Error(message)
  },
  isString(str) {
    return typeof str === 'string' || str instanceof String
  },
  isEmptyString(str) {
    return (!str || 0 === str.length);
  },
  isNewInstance(instance, originClass) {
    this.validate(instance instanceof originClass, errorMessagesMap.NOT_NEW_INSTANCE)
  },
  isNotEmptyArray(list) {
    this.validate(Array.isArray(list) && !!list.length, errorMessagesMap.IS_NOT_ARRAY)
  },
  isEnterKey(key) {
    return key === ENTER_KEY
  },
  isEscKey(key) {
    return key === ESC_KEY
  },
}

export default validator
