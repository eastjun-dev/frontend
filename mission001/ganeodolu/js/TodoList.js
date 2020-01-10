import {error, keyName} from "./constant.js"

export default function TodoList({ $target, $targetFilter, data, onClickToggle, onEditTodo, onClickRemoval, onChangeTodo, onClickFilter }) {
    this.$target = $target;
    this.$targetFilter = $targetFilter
    this.data = data;

    this.setState = function (nextData) {
        this.data = nextData;
        this.render()
    }

    const filterTypes = document.querySelectorAll(".filters li a")

    if (this === window) {
        throw new Error(error.NO_USED_NEW_KEYWORD)
    }
    else if (Array.isArray(this.data) === false) {
        throw new Error(error.NOARRAY_DATA)
    }

    this.$target.addEventListener('click', (e) => {
        const { className } = e.target;
        const { index } = e.target.parentNode.parentNode.dataset
        if (!filterTypes[0].classList.contains("selected")) return

        switch (className) {
            case 'toggle': onClickToggle(index) 
                break;
            case 'destroy': onClickRemoval(index)
                break;
        }
    })

    this.$target.addEventListener('dblclick', (e) => {
        const { className } = e.target;
        const { index } = e.target.closest('li').dataset
        if (className === 'label') {
            onEditTodo(index)
        }
    })

    this.$target.addEventListener('keydown', (e) => {
        const { className } = e.target;
        const { index } = e.target.parentNode.dataset;
        if (className === 'edit') {
            if (e.key === keyName.ENTER) {
                onChangeTodo(index, e.target.value)
            } else if (e.key === keyName.ESC) {
                onEditTodo(index)
            }
        }
    })

    this.$targetFilter.addEventListener('click', (e) => {
        const { className } = e.target;
        for (let val of filterTypes) {
            if (val.classList.contains("selected")) {
                val.classList.remove("selected")
            }
        }
        e.target.classList.add("selected");

        if (className.includes('all')) {
            onClickFilter()
        } else if (className.includes('active')) {
            onClickFilter(true)
        } else if (className.includes('completed')) {
            onClickFilter(false)
        }
    })

    this.render = function () {
        const renderedHTMLText = this.data.map((val, idx) => {
            if (!val.text) {
                throw new Error(error.NOT_DATA)
            }
            else if (typeof (val.text) !== "string") {
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
        this.$target.innerHTML = renderedHTMLText
    }
    this.render()
}