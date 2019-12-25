import TodoList from './components/TodoList.js'
import TodoInput from './components/TodoInput.js'
import TodoCount from './components/TodoCount.js'
import TodoStatus from './components/TodoStatus.js'
import { todoItemStatusMap } from './utils/utils.js'
import storage from './store/localStorage.js'
import api from './api/api.js'

function TodoApp() {
    this.todoItems = []
    this.isOnline = navigator.onLine

    const initNetworkEventListener = () => {
        window.addEventListener('offline', () => this.isOnline = false)
        window.addEventListener('online', () => this.isOnline = true)
    }

    initNetworkEventListener()

    this.setState = (updatedItems) => {
        this.todoItems = updatedItems
        this.render(this.todoItems)
        if (!this.isOnline) {
            storage.set(this.todoItems)
        }
    }

    this.render = (items) => {
        todoList.render(items)
        todoCount.render(items)
    }

    new TodoInput({
        setState: (todoItems) => {
            this.setState(todoItems)
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
        loadTodoItems: async () => {
            try {
                const todoItems = this.isOnline ? await api.todoItem.get() : storage.get(this.todoItems)
                this.setState(todoItems)
            } catch (e) {
                throw new Error(e)
            }
        },
        setState: (todoItems) => {
            this.setState(todoItems)
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
