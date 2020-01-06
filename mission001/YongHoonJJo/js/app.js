import TodoList from './TodoList.js'
import { eventKeyboards } from './utils/Contants.js'

function App(inputSelector, todoListSelector) {
  this.index = 0
  this.$input = document.querySelector(inputSelector)
  this.todoListComponent = new TodoList(todoListSelector)

  this.$input.addEventListener('keydown', e => {
    const { ENTER } = eventKeyboards
    if(e.key === ENTER) {
      const item = {
        id: this.index,
        content: e.target.value,
        completed: false,
      }
      this.index+=1
      e.target.value = ''
      this.todoListComponent.addItem(item)
    } 
  })
}

new App('.new-todo', '#todo-list')