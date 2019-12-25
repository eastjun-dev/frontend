import { todoItemTemplate } from '../utils/templates.js'
import validator from '../utils/validator.js'
import api from '../api/api.js'

export default function TodoList({setState, onToggleItem, onRemoveItem}) {
  this.$todoList = document.querySelector('#todo-list')

  const loadTodoItems = async () => {
    try {
      const todoItems = await api.todoItem.get()
      setState(todoItems)
    } catch (e) {
      throw new Error(e)
    }
  }

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

    this.$todoList.addEventListener('keydown', (event) => {
      if (event.target.classList.contains('edit')) onEdit(event)
    })
  }

  this.init = () => {
    loadTodoItems()
    initEventListener()
  }

  this.init()


  this.setState = (updatedTodoItems) => {
    this.todoItems = updatedTodoItems
    this.render(this.todoItems)
  }

  this.render = (items) => {
    const template = items.map(todoItemTemplate)
    this.$todoList.innerHTML = template.join('')
  }

  const getIndex = (event) => {
    return event.target.closest('li').dataset.id
  }

  const onFocusItem = (event) => {
    const $target = event.target.closest('li')
    $target.classList.toggle('editing')
  }

  const onEdit = (event) => {
    const $target = event.target.closest('li')
    const editValue = $target.querySelector('input.edit').value

    if (validator.isEnterKey(event.key)) {
      isValidInputValue($target, editValue)
    }

    if (validator.isEscKey(event.key)) {
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
