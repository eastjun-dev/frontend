export default function TodoList({ data }) {
  this.setState = (data) => {
    this.data = data
    this.render()
  }

  this.render = () => {
    const $todoList = document.querySelector('#todo-list')
  }
}
