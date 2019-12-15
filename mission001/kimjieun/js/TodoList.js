// export default class TodoList {
//   constructor({ $selector }) {
//     this.$selector = $selector
//   }

  // createTodoListHtmlString = ({ text, isStatus }) => {
  // return `<li ${isStatus ? `class=${isStatus}` : ''}>
  //   <div class="view">
  //     <input class="toggle" type="checkbox">
  //     <label class="label">${text}</label>
  //     <button class="destroy"></button>
  //   </div>
  //   <input class="edit" value="${text}">
  // </li>`
  // }

//   render = function(data) {
//     this.$selector.innerHTML = data.map(this.createTodoListHtmlString).join('')
//   }
// }

function TodoList({ data }) {
  this.data = data

  this.setState = function(data) {
    this.data = data
    this.render()
  }

  this.createTodoListHtmlString = ({ text, isStatus }) => {
  return `<li ${isStatus ? `class=${isStatus}` : ''}>
    <div class="view">
      <input class="toggle" type="checkbox">
      <label class="label">${text}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${text}">
  </li>`
  }

  this.render = () => {
    const $todoList = document.querySelector('#todo-list')
    const todoListHTMLString = this.data.map(this.createTodoListHtmlString).join('')
    $todoList.innerHTML = todoListHTMLString
  }
}

export default TodoList
