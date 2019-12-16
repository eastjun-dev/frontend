export default class App {
  constructor({ todoList, todoInput, todoCount, data }) {
    this.todoList = todoList
    this.todoInput = todoInput
    this.todoCount = todoCount
    this.$todoInputEl = document.querySelector('#new-todo-title')

    this.data = data
    this.setState(data)

    this.render()
    this.init()
  }

  init() {
    this.todoInput.onAddTodo = this.addTodo.bind(this)
    this.todoList.toggleTodo = this.toggleTodo.bind(this)
    this.todoList.onDeleteTodo = this.onDeleteTodo.bind(this)
  }

  setState(data) {
    this.data = data
    this.render()
    this.createTodoCount()
  }

  render() {
    this.todoList.render(this.data)
  }

  createTodoCount() {
    this.todoCount.creatTodoCount(this.data)
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
