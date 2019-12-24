export default class TodoList {
  constructor({ $selector }) {
    this.$selector = $selector
  }

  createLiClassName = (isCompleted) => {
    if (!isCompleted) return 'view'
    return 'completed'
  }

  createTodoListHtmlString = ({ content, isCompleted }, index) => {
    return `<li class=${this.createLiClassName(isCompleted)}>
              <div data-idx=${index} class="view">
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
