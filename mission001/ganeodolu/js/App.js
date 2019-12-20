function App(data) {
    this.data = data;
    this.setState = function (nextData) {
        this.data = nextData;
        todoList.setState(this.data)
        todoCount.setState({
            totalCount: this.data.length,
            completedCount: this.data.filter(todo => todo.isComplete).length
        })
    }

    const $todoList = document.querySelector('.todo-list')
    const todoList = new TodoList({
        $target: $todoList,
        data: this.data,
        onToggleClick: (index) => {
            const nextData = [...this.data]
            nextData[index].isCompleted = !nextData[index].isCompleted
            this.setState(nextData)
        },
        onTodoEdit: (index) => {
            const nextData = [...this.data]
            if (!nextData[index].isCompleted) {
                nextData[index].isEditing = nextData[index].isEditing ? false : true;
            }
            this.setState(nextData)
        },
        onRemoveClick: (index) => {
            const nextData = [...this.data]
            nextData.splice(index, 1)
            this.setState(nextData)
        },
        onTodoChange: (index, value) => {
            const nextData = [...this.data]
            nextData[index] = {
                text: value,
                isCompleted: false,
                isEditing: false
            };
            this.setState(nextData)
        },
    });

    const $todoCount = document.querySelector('.todo-count');
    const $todoCountFilter = document.querySelector('.filters');
    const todoCount = new TodoCount($todoCount, $todoCountFilter, {
        totalCount: this.data.length,
        completedCount: this.data.filter(todo => todo.isCompleted).length
    })

    const $todoInput = document.querySelector('.new-todo')
    const $todoEdit = document.querySelector('.todo-list')
    const todoInput = new TodoInput($todoInput, $todoEdit,
        {
            onAdd: (text) => {
                const nextData = [...this.data]
                nextData.push({
                    text: text,
                    isCompleted: false,
                    isEditing: false,
                })
                this.setState(nextData)
            }
        }
    )
}