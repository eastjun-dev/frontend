function TodoList(selector) {
  this.items = []
  this.$todoList = document.querySelector(selector) // #todo-list

  this.$todoList.addEventListener('click', (e) => {
    const datasetAction = e.target.dataset.action
    if(!datasetAction) return ;

    const [action, idx] = datasetAction.split('-')
    switch(action) {
      case 'check': this.toggleState(idx); break;
      case 'remove': this.removeState(idx); break; 
    }
  })

  this.$todoList.addEventListener('dblclick', (e) => {
    const datasetAction = e.target.dataset.action
    if(!datasetAction) return ;

    const [action, idx] = datasetAction.split('-')
    switch(action) {
      case 'edit': this.toggleEditView(idx); break;
    } 
  })
}

TodoList.prototype.render = function(items) {
  const itemsHtmlString = items.reduce((acc, item, index) => {
    const { content, completed } = item
    const inputHtmlString = `<input class="toggle" type="checkbox" data-action=check-${index} ${completed && 'checked'}>`
    const labelHtmlString = `<label class="label" data-action=edit-${index}>${content}</label>`
    const buttonHtmlString = `<button class="destroy" data-action=remove-${index}></button>`
    const viewHtmlString = `<div class="view">${inputHtmlString}${labelHtmlString}${buttonHtmlString}</div>`
    const liHtmlString = `<li ${completed && 'class="completed"'} data-action=edit-${index}>${viewHtmlString}<input class="edit" value="${content}"></li>`
    return `${acc}${liHtmlString}`
  }, '')

  this.$todoList.innerHTML = itemsHtmlString
  this.renderCounterContainer(items)
}

TodoList.prototype.renderCounterContainer = function(items) {
  const $countContainerSpanComponent = document.querySelector('div.count-container > span')
  $countContainerSpanComponent.innerHTML = `총 <strong>${items.length}</strong> 개`
}

TodoList.prototype.addState = function(item) {
  this.items.push(item)
  this.render(this.items)
}

TodoList.prototype.toggleState = function(idx) {
  this.items = this.items.map((item, index) => idx == index ? ({...item, completed: !item.completed}) : ({...item}))
  this.render(this.items) 
}

TodoList.prototype.removeState = function(idx) {
  this.items = this.items.filter((items, index) => idx != index)
  this.render(this.items) 
}

TodoList.prototype.toggleEditView = function(idx) {
  const $liElement = document.querySelector(`li[data-action=edit-${idx}]`)
  const $inputElement = $liElement.querySelector('input.edit')
 
  $liElement.setAttribute('class', 'editing')

  $inputElement.addEventListener('keydown', (e) => {
    switch(e.key) {
      case 'Escape': this.render(this.items); break;
      case 'Enter': this.editContent(idx, e.target.value); break;
    }
  }) 
}

TodoList.prototype.editContent = function(idx, content) {
  this.items = this.items.map((item, index) => index == idx ? {...item, content} : {...item})
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
      e.target.value = ''
      this.TodoListComponent.addState(item)
    } 
  })
}

App.prototype.toggle

document.addEventListener('DOMContentLoaded', () => {
  new App('.new-todo', '#todo-list')
})