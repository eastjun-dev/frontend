import { DESTROY, TOGGLE } from '../utils/constants.js'

export default class TodoList {
  constructor({ $selector }) {
    this.$selector = $selector
    this.init()
  }

  init = () => {
    this.$selector.addEventListener('click', (e) => {
      if (e.target.className === DESTROY) return this.onDeleteTodo(e.target.parentNode.dataset.idx)
      if (e.target.className === TOGGLE) return this.onToggleTodo(e.target.parentNode.dataset.idx)
    })
  }

  createLiClassName = (isCompleted) => isCompleted ? 'completed' : 'view'

  createTodoListHtmlString = ({ content, isCompleted, _id }) => {
    return `<li class=${this.createLiClassName(isCompleted)}>
              <div data-idx=${_id} class="view">
                <input class="toggle" type="checkbox" ${isCompleted === true && 'checked'}>
                <label class="label">${content}</label>
                <button class="destroy"></button>
              </div>
              <input class="edit" value="${content}">
            </li>`
  }

  render = (data) => {
    const $todoList = document.querySelector('#todo-list')
    $todoList.innerHTML = data.map(this.createTodoListHtmlString).join('')
  }
}
