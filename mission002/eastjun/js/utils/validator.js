import { errorMessagesMap, keyboardMap } from './utils.js'

const validator = {
  isValid(result, message) {
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
    return key === keyboardMap.ENTER
  },
  isEscKey(key) {
    return key === keyboardMap.ESC
  }
}

export default validator
