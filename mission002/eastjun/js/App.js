import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'
import TodoStatus from './components/TodoStatus.js'

function TodoApp() {
    this.todoItems = []

    this.setState = (updatedItems) => {
        this.todoItems = updatedItems
        todoList.setState(this.todoItems)
        todoCount.setState(this.todoItems)
    }

    new TodoInput({
        setState: (todoItems) => {
            this.todoItems = todoItems
            this.setState(this.todoItems)
        }
    })

    new TodoStatus({
        todoItems: this.todoItems,
        filter: (filteredItems) => {
            this.setState(filteredItems)
        }
    })

    const todoList = new TodoList({
        setState: (todoItems) => {
            this.todoItems = todoItems
            this.setState(this.todoItems)
        },
        onToggleItem: (index) => {
            this.todoItems[index].isCompleted = !this.todoItems[index].isCompleted
        }
    })

    const todoCount = new TodoCount({
        todoItems: this.todoItems
    })
}

new TodoApp()
