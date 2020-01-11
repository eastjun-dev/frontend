import { error } from './constant.js'
import renderedTemplate from './template.js'

export default function TodoList({ $target, $targetFilter, data, onToggleClick, onRemoveClick, onFilterClick }) {
    this.$target = $target;
    this.$targetFilter = $targetFilter
    this.data = data;

    this.setState = function (nextData) {
        this.data = nextData;
        this.render()
    }
    const filterTypes = document.querySelectorAll('.filters li a')

    if (this === window) {
        throw new Error(error.NO_USED_NEW_KEYWORD)
    }
    else if (!Array.isArray(this.data)) {
        throw new Error(error.NOARRAY_DATA)
    }

    this.$target.addEventListener('click', async (e) => {
        const { className } = e.target;
        const { index } = e.target.parentNode.parentNode.dataset

        const id = await data[index]._id
        if (!filterTypes[0].classList.contains('selected')) return
        if (className === 'toggle') {
            onToggleClick(id)
        } else if (className === 'destroy') {
            onRemoveClick(id)
        }
    })

    this.$targetFilter.addEventListener('click', (e) => {
        const { className } = e.target;
        for (let val of filterTypes) {
            if (val.classList.contains('selected')) {
                val.classList.remove('selected')
            }
        }
        e.target.classList.add('selected');

        if (className.includes('all')) {
            onFilterClick()
        } else if (className.includes('active')) {
            onFilterClick(true)
        } else if (className.includes('completed')) {
            onFilterClick(false)
        }
    })

    this.render = function () {
        const renderedHTMLText = this.data.map((val, idx) => {
            if (!val.content) {
                throw new Error(error.NOT_DATA)
            }
            else if (typeof (val.content) !== 'string') {
                throw new Error(error.INVALID_DATA)
            }
            return renderedTemplate(val, idx)
        }).join('');

        this.$target.innerHTML = renderedHTMLText
    }
    this.render()
}