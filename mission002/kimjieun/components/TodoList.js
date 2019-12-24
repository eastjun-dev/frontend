export default function TodoList({ data }) {
  this.data = data

  this.setState = (data) => {
    this.data = data
    this.render()
  }

  createTodoListHtmlString = ({ content, isCompleted }, index) => {
    return `<li class=${isCompleted}>
              <div data-idx=${index} class="view">
                <input class="toggle" type="checkbox" ${isCompleted === true && 'checked'}>
                <label class="label">${content}</label>
                <button class="destroy"></button>
              </div>
              <input class="edit" value="${content}">
            </li>`
  }

  this.render = () => {
    const $todoList = document.querySelector('#todo-list')
    $todoList.innerHTML = this.data.map(this.createTodoListHtmlString).join('')
  }
}
