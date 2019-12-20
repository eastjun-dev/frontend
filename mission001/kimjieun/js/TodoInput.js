import { constant } from '../utils/constants.js'

export default class TodoList {
  constructor({ $selector }) {
    this.$selector = $selector
    this.init()
  }

  init = () => {
    this.$selector.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        const todoItem = {
          text: e.target.value,
          isCompleted: constant.NEW,
        }

        this.onAddTodo(todoItem)
      }
    })
  }
}
