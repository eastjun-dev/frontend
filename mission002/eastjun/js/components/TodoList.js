import { todoItemTemplate } from '../utils/templates.js'
import validator from '../utils/validator.js'
import api from '../api/api.js'

export default function TodoList({loadTodoItems, setState, toggleItem}) {
  this.$todoList = document.querySelector('#todo-list')

  const initEventListener = () => {
    this.$todoList.addEventListener('click', (event) => {
      const classList = event.target.classList
      if (classList.contains('toggle')) onToggleItem(event)
      if (classList.contains('destroy')) onRemoveItem(event)
    })

    this.$todoList.addEventListener('dblclick', (event) => {
      const classList = event.target.classList
      if (classList.contains('label')) onFocusItem(event)
    })

    this.$todoList.addEventListener('keydown', (event) => {
      const classList  = event.target.classList
      if (classList.contains('edit')) onEdit(event)
    })
  }

  const onToggleItem = async (event) => {
    const $targetTodoItem = event.target.closest('li')
    const itemId = $targetTodoItem.dataset.id
    try {
      await api.todoItem.complete(itemId)
      $targetTodoItem.classList.toggle('completed')
      toggleItem(getIndex(event))
    } catch (e) {
      throw new Error(e)
    }
  }

  const onRemoveItem = async (event) => {
    const $targetTodoItem = event.target.closest('li')
    const itemId = $targetTodoItem.dataset.id
    try {
      await api.todoItem.remove(itemId)
      const todoItems = await api.todoItem.get()
      setState(todoItems)
    } catch (e) {
      throw new Error(e)
    }
  }

  this.init = () => {
    loadTodoItems()
    initEventListener()
  }

  this.init()

  this.render = (items) => {
    const template = items.map(todoItemTemplate)
    this.$todoList.innerHTML = template.join('')
  }

  const getIndex = (event) => {
    return event.target.closest('li').dataset.index
  }

  const onFocusItem = (event) => {
    const $target = event.target.closest('li')
    $target.classList.toggle('editing')
  }

  const onEdit = (event) => {
    const $target = event.target.closest('li')
    const editValue = $target.querySelector('input.edit').value

    if (validator.isEnterKey(event.key)) {
      return isValidInputValue($target, editValue)
    }

    if (validator.isEscKey(event.key)) {
      return $target.classList.toggle('editing')
    }
  }

  const isValidInputValue = ($target, inputValue) => {
    if (validator.isString(inputValue) && !validator.isEmptyString(inputValue)){
      $target.querySelector('label').innerText = inputValue
      $target.classList.toggle('editing')
    }
  }
}
