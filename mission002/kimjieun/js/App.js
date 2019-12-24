import { apiHandler } from '../utils/api.js'
import { ENTER, NAME } from '../utils/constants.js'
import { hostUrl } from '../utils/url.js'

export default class App {
  constructor({ todoList, todoInput, todoCount }) {
    this.todoList = todoList
    this.todoInput = todoInput
    this.todoCount = todoCount

    this.init()
    this.fetchTodoData()
  }

  init = () => {
    this.todoInput.onKeyDown = this.onKeyDown.bind(this)
    this.todoList.onDeleteTodo = this.onDeleteTodo.bind(this)
    this.todoList.onToggleTodo = this.onToggleTodo.bind(this)
  }

  fetchTodoData = async () => {
    const data = await apiHandler({ url: hostUrl })
    this.setState(data)
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
        headers: {
          'Content-Type': 'application/json',
        },
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
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.fetchTodoData()
  }

  onToggleTodo = async (id) => {
    await fetch(`${hostUrl}/${NAME}/${id}/toggle`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
    })

    this.fetchTodoData()
  }
}
