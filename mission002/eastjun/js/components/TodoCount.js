export default function TodoCount({ todoItems }) {
  this.render = (todoItems) => {
    document.querySelector('#total-count .count').innerHTML = todoItems.length
  }

  this.render(todoItems)
}
