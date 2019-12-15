export default class TodoList {
  constructor({ $selector }) {
    this.$selector = $selector
  }

  createTodoListHtmlString = () => {
  return `<li class="editing">
    <div class="view">
      <input class="toggle" type="checkbox">
      <label class="label">완료된 타이틀</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="완료된 타이틀">
  </li>`
  }

  render = function(data) {
    this.$selector.innerHTML = this.createTodoListHtmlString()
  }
}