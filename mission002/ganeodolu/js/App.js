import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import { apiHandler } from './api.js'

export default function app() {

    function getData() {
        if (navigator.onLine) {
            return apiHandler({})
        } else {
            return JSON.parse(localStorage.getItem('todoItems'))
        }
    }

    function saveLocalStorage(data) {
        localStorage.setItem('todoItems', JSON.stringify(data))
    }

    const $networkDisplay = document.querySelector('.network-display')

    window.addEventListener("offline", function () {
        console.log('offline')
        $networkDisplay.classList.remove('hidden')
    });
    window.addEventListener("online", function () {
        console.log('online')
        $networkDisplay.classList.add('hidden')
    });

    const $todoFilter = document.querySelector('.filters');
    const $todoCount = document.querySelector('.todo-count');
    const todoCount = new TodoCount({
        $targetCount: $todoCount,
        $targetFilter: $todoFilter,
        data: {
            totalCount: [],
        },
    })

    const $todoList = document.querySelector('.todo-list')
    const todoList = new TodoList({
        $target: $todoList,
        $targetFilter: $todoFilter,
        data: [],
        onLoad: async () => {
            const data = await getData()
            todoList.setState(data)
            todoCount.setState({
                totalCount: data.length
            })
            saveLocalStorage(data)
        },
        onClickToggle: async (id) => {
            const isUpdated = await apiHandler({
                method: 'PUT',
                customUrl: `${id}/toggle`
            })
            const updatedData = await getData()
            todoList.setState(updatedData)
            todoCount.setState({
                totalCount: updatedData.length
            })
            saveLocalStorage(updatedData)
        },
        onClickRemoval: async (id) => {
            const isUpdated = await apiHandler({
                method: 'DELETE',
                customUrl: id
            })
            const updatedData = await getData()
            todoList.setState(updatedData)
            todoCount.setState({
                totalCount: updatedData.length
            })
            saveLocalStorage(updatedData)
        },
        onClickFilter: async (filterBoolean) => {
            // let filteredData = data;
            const data = await getData()
            let filteredData = data.filter(todo => todo.isCompleted !== filterBoolean)
            todoList.setState(filteredData)
            todoCount.setState({
                totalCount: filteredData.length
            })
        }
    });
    const $todoInput = document.querySelector('.new-todo')
    const todoInput = TodoInput($todoInput,
        {
            onAdd: async (todoText) => {
                const isUpdated = await apiHandler({
                    method: 'POST',
                    body: JSON.stringify({
                        content: todoText,
                    })
                })
                const updatedData = await getData()
                todoList.setState(updatedData)
                todoCount.setState({
                    totalCount: updatedData.length
                })
                saveLocalStorage(updatedData)
            }
        })
}
