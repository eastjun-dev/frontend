import validator from '../utils/validator.js'

export default function TodoInput({ onAdd }) {
  const $todoInput = document.querySelector('#new-todo-title')

  $todoInput.addEventListener('keydown', (event) => this.addTodoItem(event))

  this.addTodoItem = (event) => {
    const $newTodoTarget = event.target
    if (this.validate(event, $newTodoTarget.value)) {
      this.onAdd($newTodoTarget, $newTodoTarget.value)
    }
  }

  this.validate = (event, newTodoContents) => {
    return validator.isEnterKey(event.which) && validator.isString(newTodoContents) ? true : false
  }

  this.onAdd = ($newTodoTarget, newTodoContents) => {
    onAdd(newTodoContents)
    $newTodoTarget.value = ''
  }
}
