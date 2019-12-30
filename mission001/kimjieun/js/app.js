import { todoStatus } from '../utils/constants.js'

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

  createTodoCount = (status) => {
    this.todoCount.createTodoCount(status, this.data)
  }

  addTodo = (data) => {
    const addTodoData = [...this.data]
    addTodoData.push(data)
    this.$todoInput.value = ''
    this.setState(addTodoData)
  }

  toggleTodo = (target, dataIndex) => {
    if (this.data[dataIndex].isCompleted === todoStatus.COMPLETED) {
      return this.setToggleTodo(dataIndex, target, '.completed', todoStatus.NEW)
    }

    if (this.data[dataIndex].isCompleted === todoStatus.NEW) {
      return this.setToggleTodo(dataIndex, target, '.new', todoStatus.COMPLETED)
    }
  }

  setToggleTodo = (index, target, closet, className) => {
    this.data[index].isCompleted = todoStatus.COMPLETED
    target.closest(`${closet}`).setAttribute('class', className)
  }

  onDeleteTodo = (index) => {
    const deletedData = [...this.data]
    deletedData.splice(index, 1)
    this.setState(deletedData)
  }

  changeLabelToInput = (target) => {
    target.closest('.new').setAttribute('class', todoStatus.EDITING)
  }

  onTodoCheck = (status) => {
    this.createTodoCount(status)
    if (status === todoStatus.ALL) return this.render(this.data)
    const filteredData = this.data.filter(({ isCompleted }) => isCompleted === status)
    this.render(filteredData)
  }
}
