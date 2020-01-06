import TodoList from './TodoList.js'
import { eventKeyboards } from './utils/Contants.js'

function App(inputSelector, todoListSelector) {
  this.index = 0
  this.$input = document.querySelector(inputSelector)
  this.todoListComponent = new TodoList(todoListSelector)

  this.$input.addEventListener('keydown', async e => {
    const { ENTER } = eventKeyboards
    if(e.key === ENTER) {
      const content = e.target.value
      if(content.length === 0) return
      
      e.target.value = ''
      try {
        await this.todoListComponent.addItem(content)
      } catch(e) {
        console.error({e})
      }
    } 
  })
}

new App('.new-todo', '#todo-list')