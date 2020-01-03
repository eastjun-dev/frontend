import { todoStatus } from '../utils/constants.js'

export default class TodoCount {
  constructor({ $selector }) {
    this.$selector = $selector
  }

  createHtmlString = (data) => {
    return `총 <strong>${data.length}</strong> 개`
  }

  createTodoCount = (status, data) => {
    let checkTodoData = data
    if (status && status !== todoStatus.ALL) checkTodoData = data.filter(d => d.isCompleted === status)
    return this.$selector.innerHTML = this.createHtmlString(checkTodoData)
  }
}
