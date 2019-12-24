import TodoList from '../components/TodoList.js'
import TodoInput from '../components/TodoInput.js'
import { apiHandler } from '../utils/api.js'

function App() {
  this.data = []

  const fetchTodoData = async () => {
    const data = await apiHandler({ url: 'http://todo-api.roto.codes' })
    setState(data)
  }

  fetchTodoData()

  this.todoList = new TodoList({
    data: this.data,
  })

  function setState(data) {
    this.todoList.setState(data)
  }

  // this.setState = (updateData) => {
  //   console.log(updateData)
  //   this.todoList.setState(updateData)
  // }

  const onKeyDown = async (e) => {
    const $todoInput = document.querySelector('#new-todo-title')

    if (e.key === 'Enter') {
      const data = await fetch('http://todo-api.roto.codes/kimjieun', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: e.target.value,
        }),
      })

      if (data) {
        $todoInput.value = ''
        $todoInput.focus()
      }
    }

    fetchTodoData()
  }

  this.todoInput = new TodoInput({
    onKeyDown,
  })
}

export default App
