import { ACTIVE, COMPLETED, ALLSELECTED } from '../utils/constants.js'

export default class TodoCheck {
  constructor({ $selector }) {
    this.$selector = $selector

    this.init()
  }

  init = () => {
    this.$selector.addEventListener('click', (e) => {
      switch (e.target.className) {
        case ACTIVE:
          return this.onTodoCheck(ACTIVE)
        case COMPLETED:
          return this.onTodoCheck(COMPLETED)
        default:
          return this.onTodoCheck(ALLSELECTED)
      }
    })
  }
}
