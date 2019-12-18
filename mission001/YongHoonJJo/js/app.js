import TodoList from './TodoList.js'

function App(inputSelector, todoListSelector) {
  this.index = 0
  this.$input = document.querySelector(inputSelector)
  this.TodoListComponent = new TodoList(todoListSelector)

  this.$input.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
      const item = {
        id: this.index++,
        content: e.target.value,
        completed: false,
      }
      e.target.value = ''
      this.TodoListComponent.addState(item)
    } 
  })
}

document.addEventListener('DOMContentLoaded', () => {
  new App('.new-todo', '#todo-list')
})