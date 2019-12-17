import { todoItemTemplate } from '../utils/templates.js'
import validator from '../utils/validator.js'

export default function TodoList({todoItems, onToggleItem, onRemoveItem}) {
  this.$todoList = document.querySelector('#todo-list')
  this.todoItems = todoItems

  const initEventListener = () => {
    this.$todoList.addEventListener('click', (event) => {
      const { classList } = event.target
      if (classList.contains('toggle')) onToggleItem(getIndex(event))
      if (classList.contains('destroy')) onRemoveItem(getIndex(event))
    })

    this.$todoList.addEventListener('dblclick', (event) => {
      const { classList } = event.target
      if (classList.contains('label')) onFocusItem(event)
    })
  }

  initEventListener()

  this.setState = (updatedTodoItems) => {
    this.todoItems = updatedTodoItems
    this.render(this.todoItems)
  }

  this.render = (items) => {
    const template = items.map((item, index) => todoItemTemplate(item, index))
    this.$todoList.innerHTML = template.join('')
  }

  const getIndex = (event) => {
    return event.target.closest('li').dataset.id
  }

  const onFocusItem = (event) => {
    const $target = event.target.closest('li')
    $target.classList.toggle('editing')
    $target.addEventListener('keydown', onEdit)
  }

  const onEdit = (event) => {
    const $target = event.target.closest('li')
    const editValue = $target.querySelector('input.edit').value

    if (validator.isEnterKey(event.which)) {
      isValidInputValue($target, editValue)
    }

    if (validator.isEscKey(event.which)) {
      $target.classList.toggle('editing')
    }
  }

  const isValidInputValue = ($target, inputValue) => {
    if (validator.isString(inputValue) && !validator.isEmptyString(inputValue)){
      $target.querySelector('label').innerText = inputValue
      $target.classList.toggle('editing')
    }
  }
}
