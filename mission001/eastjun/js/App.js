import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import TodoItem from './components/TodoItem.js'
import TodoCount from './components/TodoCount.js'
import TodoStatus from "./components/TodoStatus.js"

function TodoApp() {
    this.todoItems = []

    this.setState = (updatedItems) => {
        this.todoItems = updatedItems
        todoList.setState(this.todoItems)
        todoCount.setState(this.todoItems)
    }

    new TodoInput({
        onAdd: (contents) => {
            const newTodoItem = new TodoItem(contents)
            this.todoItems.push(newTodoItem)
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
        todoItems: this.todoItems,
        onToggleItem: (index) => {
            this.todoItems[index].isCompleted = !this.todoItems[index].isCompleted
            this.setState(this.todoItems)
        },
        onRemoveItem: (index) => {
            this.todoItems.splice(index, 1)
            this.setState(this.todoItems)
        },
    })

    const todoCount = new TodoCount({
        todoItems: this.todoItems
    })
}

new TodoApp()
