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
        window.addEventListener('offline', () => setIsOnline())
        window.addEventListener('online', () => setIsOnline())
    }

    initNetworkEventListener()

    const setIsOnline = () => {
        this.isOnline = navigator.onLine
        const $offlineAlert = document.querySelector('.alert-container .offline')
        if (!this.isOnline) {
            $offlineAlert.classList.remove('hidden')
        } else {
            $offlineAlert.classList.add('hidden')
        }
    }

    this.render = (items) => {
        todoList.render(items)
        todoCount.render(items)
    }

    this.setState = (updatedItems) => {
        this.todoItems = updatedItems
        storage.set(this.todoItems)
        this.render(this.todoItems)
    }

    const offlineMode = () => {
        const initTodoList = () => {
            const $offlineAlert = document.querySelector('.alert-container .offline')
            $offlineAlert.classList.remove('hidden')
            this.todoItems = storage.get()
            if (this.todoItems) {
                this.render(this.todoItems)
            }
        }

        return {
            initTodoList,
        }
    }

    new TodoInput({
        setState: (todoItems) => {
            this.setState(todoItems)
        },
        addTodoItem: (todoItem) => {
            offlineMode().addTodoItem(todoItem)
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
                const todoItems = await api.todoItem.get()
                this.setState(todoItems)
            } catch (e) {
                throw new Error(e)
            }
        },
        setState: (todoItems) => {
            this.setState(todoItems)
        },
        toggleItem: (index) => {
            this.todoItems[index].isCompleted = !this.todoItems[index].isCompleted
        },
    })

    const todoCount = new TodoCount({
        todoItems: this.todoItems,
    })

    if (!this.isOnline) {
        offlineMode().initTodoList()
    }

}

new TodoApp()
