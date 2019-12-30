import { todoStatus } from '../utils/constants.js'

export default class TodoCheck {
  constructor({ $selector }) {
    this.$selector = $selector
    this.init()
  }

  init = () => {
    this.$selector.addEventListener('click', (e) => {
      switch (e.target.className) {
        case todoStatus.ALLSELECTED:
          return this.onTodoCheck(todoStatus.ALL)
        case todoStatus.ACTIVE:
          return this.onTodoCheck(todoStatus.NEW)
        case todoStatus.COMPLETED:
          return this.onTodoCheck(todoStatus.COMPLETED)
        default:
          return
      }
    })
  }
}
