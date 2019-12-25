import TodoList from './TodoList.js'

function App(inputSelector, todoListSelector) {
  this.index = 0
  this.$input = document.querySelector(inputSelector)
  this.todoListComponent = new TodoList(todoListSelector)

  this.$input.addEventListener('keydown', async e => {
    if(e.key === 'Enter') {
      const content = e.target.value
      if(content.length === 0) return
      
      e.target.value = ''
      await this.todoListComponent.addItem(content)
    } 
  })
}

new App('.new-todo', '#todo-list')