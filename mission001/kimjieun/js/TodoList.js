import { todoStatus } from '../utils/constants.js'
import { todoItemTemplate } from '../utils/templates.js'

export default class TodoList {
  constructor({ $selector }) {
    this.$selector = $selector
    this.init()
  }

  init = () => {
    this.$selector.addEventListener('click', (e) => {
      if (e.target.className === todoStatus.DESTROY) this.onDeleteTodo(e.target.parentNode.dataset.idx)
      if (e.target.className === todoStatus.TOGGLE) this.toggleTodo(e.target.parentNode, e.target.parentNode.dataset.idx)
    })

    this.$selector.addEventListener('dblclick', (e) => {
      if (e.target.className === todoStatus.LABEL) this.changeLabelToInput(e.target.parentNode)
    })
  }

  render = (data) => {
    this.$selector.innerHTML = data.map(todoItemTemplate).join('')
  }
}
