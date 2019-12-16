function TodoList(selector) {
  this.items = []
  this.$todoList = document.querySelector(selector) // #todo-list
}

TodoList.prototype.render = function(items) {
  console.log(items)
  const itemsHtmlString = items.reduce((acc, item, index) => {
    const { content, completed } = item
    const inputHtmlString = `<input class="toggle" type="checkbox" data-action=check-${index} ${completed && 'checked'}>`
    const labelHtmlString = `<label class="label">${content}</label>`
    const buttonHtmlString = `<button class="destroy"></button>`
    const viewHtmlString = `<div class="view">${inputHtmlString}${labelHtmlString}${buttonHtmlString}</div>`
    const liHtmlString = `<li ${completed && 'class="completed"'}>${viewHtmlString}<input class="edit" value="${content}"></li>`
    return `${acc}${liHtmlString}`
  }, '')

  this.$todoList.innerHTML = itemsHtmlString
}

TodoList.prototype.addState = function(item) {
  this.items.push(item)
  this.render(this.items)
}

TodoList.prototype.toggleState = function(idx) {
  this.items = this.items.map((item, index) => idx == index ? ({...item, completed: !item.completed}) : ({...item}))
  this.render(this.items) 
}

function App(inputSelector, todoListSelector) {
  this.$input = document.querySelector(inputSelector)
  this.TodoListComponent = new TodoList(todoListSelector)

  this.$input.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
      const item = {
        content: e.target.value,
        completed: false,
      }
      this.TodoListComponent.addState(item)
    } 
  })

  this.TodoListComponent.$todoList.addEventListener('click', (e) => {
    const datasetAction = e.target.dataset.action
    if(!datasetAction) return ;

    const [action, idx] = datasetAction.split('-')
    switch(action) {
      case 'check': this.TodoListComponent.toggleState(idx); break;
    }
  })
}

App.prototype.toggle

document.addEventListener('DOMContentLoaded', () => {
  new App('.new-todo', '#todo-list')
})