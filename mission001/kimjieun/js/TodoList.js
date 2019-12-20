import { constant } from '../utils/constants.js'

export default class TodoList {
  constructor({ $selector }) {
    this.$selector = $selector
    this.init()
  }

  init = () => {
    this.$selector.addEventListener('click', (e) => {
      if (e.target.className === constant.DESTROY) this.onDeleteTodo(e.target.parentNode.dataset.idx)
      if (e.target.className === constant.TOGGLE) this.toggleTodo(e.target.parentNode, e.target.parentNode.dataset.idx)
    })

    this.$selector.addEventListener('dblclick', (e) => {
      if (e.target.className === constant.LABEL) this.changeLabelToInput(e.target.parentNode)
    })
  }

  createTodoListHtmlString = ({ text, isCompleted }, index) => {
    return `<li class=${isCompleted}>
              <div data-idx=${index} class="view">
                <input class="toggle" type="checkbox" ${isCompleted === 'completed' && 'checked'}>
                <label class="label">${text}</label>
                <button class="destroy"></button>
              </div>
              <input class="edit" value="${text}">
            </li>`
  }

  render = (data) => {
    this.$selector.innerHTML = data.map(this.createTodoListHtmlString).join('')
  }
}
