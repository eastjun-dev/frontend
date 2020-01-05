;(async function(){
    async function fetchData(){
        const res = await fetch(APIURL)
        return await res.json()
    }
    const data = await fetchData()

    this.data = data;
    // this.render = function (filteredData) {
    //     todoList.setState(filteredData)
    //     todoCount.render(filteredData)
    //     todoCount.setState({
    //         totalCount: filteredData.length,
    //     })
    // }
    // this.setState = function (nextData) {
    //     this.data = nextData;
    //     todoList.setState(this.data)
    //     todoCount.setState({
    //         totalCount: this.data.length,
    //     })
    // }


    const $todoList = document.querySelector('.todo-list')
    const $todoFilter = document.querySelector('.filters');
    const todoList = new TodoList({
        $target: $todoList,
        $targetFilter: $todoFilter,
        data: this.data,
        onToggleClick: async (id) => {
            console.log(id)
            await fetch(`${APIURL}/${id}/toggle`, {
                method: "PUT",
            })
            const updatedData = await fetchData()
            todoList.setState(updatedData)
        },
        onRemoveClick: async (id) => {
            console.log(id)
            await fetch(`${APIURL}/${id}`, {
                method: 'DELETE'
            })

            const updatedData = await fetchData()
            todoList.setState(updatedData)
        },
        onFilterClick: (filterBoolean) => {
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
            onAdd: async (todoText) => {
                if(todoText.length > 0){
                    await fetch(APIURL,{
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

                }

            }
        }
    )
})()

