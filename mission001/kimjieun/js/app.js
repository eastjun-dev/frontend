export default class App {
  constructor({ todoList, todoInput, data }) {
    this.todoList = todoList
    this.todoInput = todoInput
    this.$todoInputEl = document.querySelector('#new-todo-title')

    this.data = data
    this.setState(data)

    this.render()
    this.init()
  }

  render() {
    this.todoList.render(this.data)
  }

  init() {
    this.todoInput.onAddTodo = this.addTodo.bind(this)
    this.todoList.toggleTodo = this.toggleTodo.bind(this)
    this.todoList.onDeleteTodo = this.onDeleteTodo.bind(this)
  }

  setState(data) {
    this.data = data
    this.render()
  }

  addTodo(data) {
    const addTodoData = [...this.data]
    addTodoData.push(data)
    this.$todoInputEl.value = ''
    this.setState(addTodoData)
  }

  toggleTodo(target) {
    target.parentNode.setAttribute('class', 'completed')
  }

  onDeleteTodo(index) {
    const deletedData = [...this.data]
    deletedData.splice(index, 1)
    this.setState(deletedData)
  }
}
