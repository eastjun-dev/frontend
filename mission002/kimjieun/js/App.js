import TodoList from '../components/TodoList.js'
import TodoInput from '../components/TodoInput.js'

function App({ target }) {
  this.data = []

  const getTodoList = async () => {
    try {
      const res = await fetch('http://todo-api.roto.codes/kimjieun')
      return await res.json()
    } catch (error) {
      throw new Error(error)
    }
  }

  const onKeyDown = async (e) => {
    if (e.key === 'Enter') {
      const data = await fetch('http://todo-api.roto.codes/kimjieun', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: e.target.value,
        })
      })
    }
  }

  this.todoInput = new TodoInput({
    onKeyDown,
  })
}

export default App
