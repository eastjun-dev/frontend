import { errorMessagesMap } from './utils.js'

const ENTER_KEY = 13
const ESC_KEY = 27

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
  isEnterKey(keyCode) {
    return keyCode === ENTER_KEY
  },
  isEscKey(keyCode) {
    return keyCode === ESC_KEY
  },
}

export default validator
