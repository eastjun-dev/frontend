export default class TodoList {
  constructor({ $selector }) {
    this.$selector = $selector
  }

  createTodoListHtmlString = ({ text, isStatus }) => {
  return `<li ${isStatus ? `class=${isStatus}` : ''}>
    <div class="view">
      <input class="toggle" type="checkbox">
      <label class="label">${text}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${text}">
  </li>`
  }

  render = function(data) {
    this.$selector.innerHTML = data.map(this.createTodoListHtmlString).join('')
  }
}
