function TodoList({ $target, data, onToggleClick, onTodoEdit, onRemoveClick, onTodoChange }) {
    this.$target = $target;
    this.data = data;

    this.setState = function (nextData) {
        this.data = nextData;
        this.render()
    }

    if (this === window) {
        throw new Error(error.NO_USED_NEW_KEYWORD)
    }
    else if (Array.isArray(this.data) === false) {
        throw new Error(error.NOARRAY_DATA)
    }

    this.$target.addEventListener('click', (e) => {
        const { className } = e.target;
        const { index } = e.target.parentNode.parentNode.dataset
        if (className === 'toggle') {
            onToggleClick(index)
        } else if (className === 'destroy') {
            onRemoveClick(index)
        }
    })

    this.$target.addEventListener('dblclick', (e) => {
        const { className } = e.target;
        const { index } = e.target.closest('li').dataset
        if (className === 'label') {
            onTodoEdit(index)
        }
    })

    this.$target.addEventListener('keydown', (e) => {
        const { className } = e.target;
        const { index } = e.target.parentNode.dataset;
        if (className === 'edit') {
            if (e.code === "Enter") {
                onTodoChange(index, e.target.value)
            } else if (e.code === "Escape") {
                onTodoEdit(index)
            }
        }
    })

    this.render = function () {
        const renderHTMLText = this.data.map((val, idx) => {
            if (!val.text) {
                throw new Error(error.NOT_DATA)
            }
            else if (typeof (val.text) != "string") {
                throw new Error(error.INVALID_DATA)
            }
            return `
                <li ${val.isCompleted ? 'class="completed"' : (val.isCompleted === false && val.isEditing === false) ? "" : 'class="editing"'} data-index=${idx}>
                    <div class="view">
                        <input class="toggle" type="checkbox"  ${val.isCompleted ? 'checked' : ""}>
                        <label class="label">${val.text}</label>
                        <button class="destroy"></button>
                    </div>
                    <input class="edit" value="${val.text}">
                </li>`
        }).join('');
        this.$target.innerHTML = renderHTMLText
    }
    this.render()
}