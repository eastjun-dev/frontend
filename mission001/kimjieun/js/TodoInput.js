import { constant } from '../utils/constants.js'

export default class TodoList {
  constructor({ $selector }) {
    this.$selector = $selector
    this.init()
  }

  init = () => {
    this.$selector.addEventListener('keydown', (e) => {
      if (e.key === constant.ENTER) {
        const todoItem = {
          text: e.target.value,
          isCompleted: constant.NEW,
        }

        this.onAddTodo(todoItem)
      }
    })
  }
}
