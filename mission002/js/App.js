import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'
import TodoCount from './TodoCount.js'
import { APIURL } from './constant.js' 
import { fetchData } from './api.js';

export default async function app(){
    // ;(async function(){
        const data = await fetchData()

        const $todoList = document.querySelector('.todo-list')
        const $todoFilter = document.querySelector('.filters');
        const todoList = new TodoList({
            $target: $todoList,
            $targetFilter: $todoFilter,
            data: data,
            onToggleClick: async (id) => {
                await fetch(`${APIURL}/${id}/toggle`, {
                    method: "PUT",
                })
                const updatedData = await fetchData()
                todoList.setState(updatedData)
                todoCount.setState({
                    totalCount: updatedData.length
                })
            },
            onRemoveClick: async (id) => {
                await fetch(`${APIURL}/${id}`, {
                    method: 'DELETE'
                })
                const updatedData = await fetchData()
                todoList.setState(updatedData)
                todoCount.setState({
                    totalCount: updatedData.length
                })
            },
            onFilterClick: (filterBoolean) => {
                let filteredData = [...data]
                filteredData = data.filter(todo => todo.isCompleted !== filterBoolean)
                todoList.setState(filteredData)
                todoCount.setState({
                    totalCount: filteredData.length
                })
            }
        });
    
        const $todoCount = document.querySelector('.todo-count');
        const todoCount = new TodoCount({
            $targetCount: $todoCount,
            $targetFilter: $todoFilter,
            data: {
                totalCount: data.length,
            },
        })
    
        const $todoInput = document.querySelector('.new-todo')
        const todoInput = TodoInput($todoInput,
            {
                onAdd: async (todoText) => {
                    if (todoText.length > 0) {
                        await fetch(APIURL, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                            },
                            body: JSON.stringify({
                                content: todoText,
                            }),
                        })
                        const updatedData = await fetchData();
                        todoList.setState(updatedData)
                        todoCount.setState({
                            totalCount: updatedData.length
                        })
                    }
                }
            }
        )
    // })
}

