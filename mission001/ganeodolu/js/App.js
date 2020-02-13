import TodoList from "./TodoList.js"
import TodoCount from "./TodoCount.js"
import TodoInput from "./TodoInput.js"
import {error} from "./constant.js"

export default function App(data) {
    this.data = data;
    this.render = function (filteredData) {
        todoList.setState(filteredData)
        todoCount.render(filteredData)
        todoCount.setState({
            totalCount: filteredData.length,
        })
    }
    this.setState = function (nextData) {
        this.data = nextData;
        todoList.setState(this.data)
        todoCount.setState({
            totalCount: this.data.length,
        })
    }

    const $todoList = document.querySelector('.todo-list')
    const $todoFilter = document.querySelector('.filters');
    const todoList = new TodoList({
        $target: $todoList,
        $targetFilter: $todoFilter,
        data: this.data,
        onClickToggle: (index) => {
            const nextData = [...this.data]
            nextData[index].isCompleted = !nextData[index].isCompleted
            this.setState(nextData)
        },
        onEditTodo: (index) => {
            const nextData = [...this.data]
            if (!nextData[index].isCompleted) {
                nextData[index].isEditing = !nextData[index].isEditing
            }
            this.setState(nextData)
        },
        onClickRemoval: (index) => {
            const nextData = [...this.data]
            nextData.splice(index, 1)
            this.setState(nextData)
        },
        onChangeTodo: (index, value) => {
            const nextData = [...this.data]
            nextData[index] = {
                text: value,
                isCompleted: false,
                isEditing: false
            };
            this.setState(nextData)
        },
        onClickFilter: (filterBoolean) => {
            let filteredData = [...this.data]
            filteredData = this.data.filter(todo => todo.isCompleted !== filterBoolean)
            this.render(filteredData)
        }
    });

    const $todoCount = document.querySelector('.todo-count');
    const todoCount = new TodoCount({
        $targetCount: $todoCount,
        $targetFilter: $todoFilter,
        data: {
            totalCount: this.data.length,
        },
    })

    const $todoInput = document.querySelector('.new-todo')
    const todoInput = TodoInput($todoInput,
        {
            onAdd: (text) => {
                const nextData = [...this.data]
                nextData.push({
                    text: text,
                    isCompleted: false,
                    isEditing: false
                })
                this.setState(nextData)
            }
        }
    )
    if(!todoList instanceof TodoList || !todoCount instanceof TodoCount){
        throw new Error(error.NO_USED_NEW_KEYWORD)
    }
}
