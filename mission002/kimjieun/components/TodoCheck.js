import { ACTIVE, COMPLETED, ALLSELECTED } from '../utils/constants.js'

export default class TodoCheck {
  constructor({ $selector }) {
    this.$selector = $selector

    this.init()
  }

  init = () => {
    this.$selector.addEventListener('click', (e) => {
      if (e.target.className === ACTIVE) this.onTodoCheck(ACTIVE)
      if (e.target.className === COMPLETED) this.onTodoCheck(COMPLETED)
      if (e.target.className === ALLSELECTED) this.onTodoCheck(ALLSELECTED)
    })
  }
}
