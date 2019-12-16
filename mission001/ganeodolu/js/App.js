function App(data) {
    this.data = data;
    // console.log(data)
    const $todoList = document.querySelector('.view')
    const todoList = new TodoList($todoList, this.data,
        (index) => {
            const nextData = [...this.data]
            nextData[index].isComplete = !nextData[index].isComplete
            this.setState(nextData)
        },
        (index) => {
            const nextData = [...this.data]
            nextData.splice(index, 1)
            this.setState(nextData)
        }
    );

    // const $todoCount = document.querySelector('.todo-count');
    // const todoCount = new TodoCount($todoCount, this.data);
    const $todoInput = document.querySelector('.new-todo')
    const todoInput = new TodoInput($todoInput, (text) => {
        this.data.push({
            text: text,  // 키,값이 같으므로 text로 생략가능함
            isCompleted: false,
        })
        todoList.setState(this.data)
        // todoCount.setState(this.data)

    })
    $todoInput.focus()

    this.setState = function (nextData) {
        this.data = nextData;
        this.todoList.setState(this.data)
        // this.todoCount.setState(this.data)
    }
}