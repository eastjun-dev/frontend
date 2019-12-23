import TodoList from '../components/TodoList.js'

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

  console.log(getTodoList())
}

export default App
