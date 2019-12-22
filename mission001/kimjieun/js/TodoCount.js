import { constant } from '../utils/constants.js'

export default class TodoCount {
  constructor({ $selector }) {
    this.$selector = $selector
  }

  createHtmlString = (data) => {
    return `총 <strong>${data.length}</strong> 개`
  }

  createTodoCount = (status, data) => {
    if (status === constant.ALL || !status) return this.$selector.innerHTML = this.createHtmlString(data)
    if (status) {
      const checkTodoData = data.filter(d => d.isCompleted === status)
      return this.$selector.innerHTML = this.createHtmlString(checkTodoData)
    }
  }
}
