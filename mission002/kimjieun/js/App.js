import { apiHandler } from '../utils/api.js'
import {
  ENTER,
  NAME,
  ACTIVE,
  COMPLETED,
  ALLSELECTED,
  INIT,
} from '../utils/constants.js'
import { hostUrl } from '../utils/url.js'

export default class App {
  constructor({ todoList, todoInput, todoCount, todoCheck }) {
    this.todoList = todoList
    this.todoInput = todoInput
    this.todoCount = todoCount
    this.todoCheck = todoCheck

    this.init()
    this.fetchTodoData(INIT)
  }

  init = () => {
    this.todoInput.onKeyDown = this.onKeyDown.bind(this)
    this.todoList.onDeleteTodo = this.onDeleteTodo.bind(this)
    this.todoList.onToggleTodo = this.onToggleTodo.bind(this)
    this.todoCheck.onTodoCheck = this.onTodoCheck.bind(this)
  }

  getStorageData = (storageData) => {
    this.data = JSON.parse(storageData)
    this.setState(this.data)
  }

  fetchTodoData = async (isStatus) => {
    const storageData = localStorage.getItem('todoData')
    if (isStatus === INIT && storageData) return this.getStorageData(storageData)

    this.data = await apiHandler({ url: hostUrl })
    localStorage.setItem('todoData', JSON.stringify(this.data))
    this.setState(this.data)
  }

  setState = (data) => {
    this.render(data)
    this.createTodoCount(data)
  }

  render = (data) => {
    this.todoList.render(data)
  }

  createTodoCount = (data) => {
    this.todoCount.createTodoCount(data)
  }

  onKeyDown = async (e) => {
    if (e.key === ENTER) {
      const data = await fetch(`${hostUrl}/${NAME}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          content: e.target.value,
        }),
      })

      if (data) e.target.value = ''
    }

    this.fetchTodoData()
  }

  onDeleteTodo = async (id) => {
    await fetch(`${hostUrl}/${NAME}/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
    })

    this.fetchTodoData()
  }

  onToggleTodo = async (id) => {
    await fetch(`${hostUrl}/${NAME}/${id}/toggle`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
    })

    this.fetchTodoData()
  }

  onTodoCheck = (todoStatus) => {
    const todoData = this.data.filter(d => {
      if (todoStatus === ACTIVE) return !d.isCompleted
      if (todoStatus === COMPLETED) return d.isCompleted
      if (todoStatus === ALLSELECTED) return this.data
    })

    this.setState(todoData)
  }
}
