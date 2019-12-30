import { todoStatus } from '../utils/constants.js'

export default class TodoList {
  constructor({ $selector }) {
    this.$selector = $selector
    this.init()
  }

  init = () => {
    this.$selector.addEventListener('keydown', (e) => {
      if (e.key === todoStatus.ENTER) {
        const todoItem = {
          text: e.target.value,
          isCompleted: todoStatus.NEW,
        }

        this.onAddTodo(todoItem)
      }
    })
  }
}
