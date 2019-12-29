import validator from '../utils/validator.js'
import api from '../api/api.js'
import TodoItem from './TodoItem.js'

export default function TodoInput({ addTodoItem, setState }) {
  const $todoInput = document.querySelector('#new-todo-title')

  const initEventListener = () => {
    $todoInput.addEventListener('keydown', (event) => this.addTodoItem(event))
  }

  initEventListener()

  this.addTodoItem = async (event) => {
    const $newTodoTarget = event.target

    if (!this.isValid(event, $newTodoTarget.value)) {
      return
    }

    this.onAdd($newTodoTarget)
  }

  this.onAdd = async ($newTodoTarget) => {
    if (!navigator.onLine) {
      return
    }

    try {
      await api.todoItem.add(new TodoItem($newTodoTarget.value))
      this.initValue($newTodoTarget)
      const updateTodoItems = await api.todoItem.get()
      setState(updateTodoItems)
    } catch (e) {
      throw new Error(e)
    }
  }

  this.isValid = (event, newTodoContents) => {
    return validator.isEnterKey(event.key) && !validator.isEmptyString(newTodoContents)
  }

  this.initValue = ($newTodoTarget) => {
    $newTodoTarget.value = ''
  }
}
