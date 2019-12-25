import validator from '../utils/validator.js'
import api from '../api/api.js'

export default function TodoInput({ onAdd, setState }) {
  const $todoInput = document.querySelector('#new-todo-title')

  const initEventListener = () => {
    $todoInput.addEventListener('keydown', (event) => this.addTodoItem(event))
  }

  initEventListener()

  this.addTodoItem = async (event) => {
    const $newTodoTarget = event.target
    if (this.isValid(event, $newTodoTarget.value)) {
      await this.onAdd($newTodoTarget)
    }
  }

  this.onAdd = async ($newTodoTarget) => {
    try {
      await api.todoItem.add($newTodoTarget.value)
      const updateTodoItems = await api.todoItem.get()
      setState(updateTodoItems)
      this.initValue($newTodoTarget)
    } catch (e) {
      throw new Error(e)
    }
  }

  this.isValid = (event, newTodoContents) => {
    return validator.isEnterKey(event.key) && validator.isString(newTodoContents)
  }

  this.initValue = ($newTodoTarget) => {
    $newTodoTarget.value = ''
  }
}
