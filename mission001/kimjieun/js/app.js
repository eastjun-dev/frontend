export default class App {
  constructor({ todoList, todoInput, todoCount, todoCheck, data }) {
    this.todoList = todoList
    this.todoInput = todoInput
    this.todoCount = todoCount
    this.todoCheck = todoCheck
    this.$todoInput = document.querySelector('#new-todo-title')

    this.setState(data)
    this.init()
  }

  init = () => {
    this.todoInput.onAddTodo = this.addTodo.bind(this)
    this.todoList.toggleTodo = this.toggleTodo.bind(this)
    this.todoList.onDeleteTodo = this.onDeleteTodo.bind(this)
    this.todoList.changeLabelToInput = this.changeLabelToInput.bind(this)
    this.todoCheck.onTodoCheck = this.onTodoCheck.bind(this)
  }

  setState = (data) => {
    this.data = data
    this.render(data)
    this.createTodoCount()
  }

  render = (data) => {
    this.todoList.render(data)
  }

  createTodoCount = () => {
    this.todoCount.createTodoCount(this.data)
  }

  addTodo = (data) => {
    const addTodoData = [...this.data]
    addTodoData.push(data)
    this.$todoInput.value = ''
    this.setState(addTodoData)
  }

  toggleTodo = (target, dataIndex) => {
    this.data[dataIndex].isCompleted = 'completed'
    target.closest('.new').setAttribute('class', 'completed')
  }

  onDeleteTodo = (index) => {
    const deletedData = [...this.data]
    deletedData.splice(index, 1)
    this.setState(deletedData)
  }

  changeLabelToInput = (target) => {
    target.closest('.new').setAttribute('class', 'editing')
  }

  onTodoCheck = (status) => {
    if (status === 'all') return this.render(this.data)
    const filteredData = this.data.filter((d) => d.isCompleted === status)
    this.render(filteredData)
  }
}
