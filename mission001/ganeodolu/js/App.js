function App(data) {
    this.data = data;
    // this.render = function (filteredData){
    //     console.log(filteredData)
    //     todoList.render(filteredData)
    //     todoCount.render(filteredData)
    // }
    this.setState = function (nextData) {
        this.data = nextData;
        todoList.setState(this.data)
        todoCount.setState({
            totalCount: this.data.length,
            completedCount: this.data.filter(todo => todo.isComplete).length
        })
    }

    const $todoList = document.querySelector('.todo-list')
    const $todoFilter = document.querySelector('.filters');
    
    const todoList = new TodoList({
        $target: $todoList,
        $targetFilter: $todoFilter,
        data: this.data,
        onToggleClick: (index) => {
            const nextData = [...this.data]
            nextData[index].isCompleted = !nextData[index].isCompleted
            this.setState(nextData)
        },
        onTodoEdit: (index) => {
            const nextData = [...this.data]
            if (!nextData[index].isCompleted) {
                nextData[index].isEditing = !nextData[index].isEditing
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
                isEditing: false,
                // isFiltered: false
            };
            this.setState(nextData)
        },
        onFilterClick: (filterBoolean) => {
            // let filteredData = [...this.data]
            // console.log(this.data)
            // console.log(filterBoolean)
            // // filteredData = this.data.filter(todo => todo.isCompleted !== filterBoolean)
            // filteredData = this.data.map((todo, idx) => {
            //     (todo.isCompleted !== filterBoolean) && todo[idx].isFiltered = true;
            // })
            // console.log(filteredData)
            // this.setState(filteredData)
            // // this.setState(nextData)
        }
    });

    const $todoCount = document.querySelector('.todo-count');
    // const $todoFilter = document.querySelector('.filters');
    const todoCount = new TodoCount({
        $targetCount: $todoCount,
        $targetFilter: $todoFilter,
        data: {
            totalCount: this.data.length,
            completedCount: this.data.filter(todo => todo.isComplete).length
        },
        // onFilterClick: (filterBoolean) => {
        //     let filteredData = [...this.data]
        //     console.log(this.data)
        //     console.log(filterBoolean)
        //     filteredData = this.data.filter(todo => todo.isCompleted !== filterBoolean)
        //     console.log(filteredData)
        //     this.render(filteredData)
        //     // this.setState(nextData)
        // }

        // totalCount: this.data.length,
        // completedCount: this.data.filter(todo => todo.isCompleted).length
    })

    const $todoInput = document.querySelector('.new-todo')
    const todoInput = TodoInput($todoInput,
        {
            onAdd: (text) => {
                const nextData = [...this.data]
                nextData.push({
                    text: text,
                    isCompleted: false,
                    isEditing: false,
                    // isFiltered: false
                })
                this.setState(nextData)
            }
        }
    )
}