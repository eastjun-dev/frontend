const validator = {
  isString(str) {
    return typeof str === 'string' || str instanceof String
  },
  isEmptyString(str) {
    return (!str || 0 === str.length)
  },
  isNotEmptyString(str) {
    return (this.isString(str) && str.length > 0)
  },
}

export default validator
