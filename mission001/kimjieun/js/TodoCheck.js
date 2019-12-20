import { constant } from '../utils/constants.js'

export default class TodoCheck {
  constructor({ $selector }) {
    this.$selector = $selector
    this.init()
  }

  init = () => {
    this.$selector.addEventListener('click', (e) => {
      if (e.target.className === constant.ALLSELECTED) this.onTodoCheck(constant.ALL)
      if (e.target.className === constant.ACTIVE) this.onTodoCheck(constant.NEW)
      if (e.target.className === constant.COMPLETED) this.onTodoCheck(constant.COMPLETED)
    })
  }
}
