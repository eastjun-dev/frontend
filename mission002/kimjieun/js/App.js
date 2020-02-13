import { apiHandler } from '../utils/api.js'
import {
  ENTER,
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

    try {
      this.data = await apiHandler({ url: hostUrl })
      localStorage.setItem('todoData', JSON.stringify(this.data))
      this.setState(this.data)
    } catch (error) {
      throw new Error(error)
    }
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
    if (!e.target.value) return

    if (e.key === ENTER) {
      try {
        const data = await apiHandler({
          url: hostUrl,
          method: 'POST',
          body: JSON.stringify({
            content: e.target.value,
          }),
        })
  
        if (data) e.target.value = ''
      } catch (error) {
        throw new Error(error)
      }

      this.fetchTodoData()
    }
  }

  onDeleteTodo = async (id) => {
    try {
      await apiHandler({
        url: hostUrl,
        customUrl: id,
        method: 'DELETE',
      })
    } catch (error) {
      throw new Error(error)
    }

    this.fetchTodoData()
  }

  onToggleTodo = async (id) => {
    try {
      await apiHandler({
        url: hostUrl,
        customUrl: `${id}/toggle`,
        method: 'PUT',
      })
    } catch (error) {
      throw new Error(error)
    }

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
