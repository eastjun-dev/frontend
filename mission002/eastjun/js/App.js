import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'
import TodoStatus from './components/TodoStatus.js'
import { todoItemStatusMap } from './utils/utils.js'

function TodoApp() {
    this.todoItems = []

    this.setState = (updatedItems) => {
        this.todoItems = updatedItems
        todoList.render(this.todoItems)
        todoCount.render(this.todoItems)
    }

    this.render = (filteredItems) => {
        todoList.render(filteredItems)
        todoCount.render(filteredItems)
    }

    new TodoInput({
        setState: (todoItems) => {
            this.todoItems = todoItems
            this.setState(this.todoItems)
        }
    })

    new TodoStatus({
        filter: (status) => {
            switch (status) {
                case todoItemStatusMap.ALL: {
                    this.render(this.todoItems)
                    break
                }
                case todoItemStatusMap.ACTIVE: {
                    const filteredItems =  this.todoItems.filter(item => item.isCompleted === false)
                    this.render(filteredItems)
                    break
                }
                case todoItemStatusMap.COMPLETED: {
                    const filteredItems =  this.todoItems.filter(item => item.isCompleted === true)
                    this.render(filteredItems)
                    break
                }
            }
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
