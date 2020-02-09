export default function TodoCount({ todoItems }) {
  this.todoItems = todoItems

  this.setState = (updatedData) => {
    this.todoItems = updatedData
    this.render()
  }

  this.render = () => {
    document.querySelector('#total-count .count').innerHTML = this.todoItems.length
  }

  this.render()
}
