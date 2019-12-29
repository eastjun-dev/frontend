export default function TodoCount({ todoItems }) {
  this.render = (todoItems) => {
    document.querySelector('#total-count .count').innerHTML = todoItems ? todoItems.length : 0
  }

  this.render(todoItems)
}
