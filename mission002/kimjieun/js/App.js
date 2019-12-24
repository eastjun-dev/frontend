import { apiHandler } from '../utils/api.js'
import { ENTER } from '../utils/constants.js'
import { hostUrl } from '../utils/url.js'

export default class App {
  constructor({ todoList, todoInput }) {
    this.todoList = todoList
    this.todoInput = todoInput

    this.init()
    this.fetchTodoData()
  }

  init = () => {
    this.todoInput.onKeyDown = this.onKeyDown.bind(this)
  }

  fetchTodoData = async () => {
    const data = await apiHandler({ url: hostUrl })
    this.setState(data)
  }

  setState = (data) => {
    this.render(data)
  }

  render = (data) => {
    this.todoList.render(data)
  }

  onKeyDown = async (e) => {
    if (e.key === ENTER) {
      const data = await fetch(`${hostUrl}/kimjieun`, {
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
}
