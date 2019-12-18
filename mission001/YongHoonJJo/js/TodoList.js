function TodoList(selector) {
  this.items = []
  this.className = 'all'
  this.$todoList = document.querySelector(selector)
  this.$filters = document.querySelector('ul.filters')

  this.$filters.addEventListener('click', (e) => {
    if(e.target === this.$filters) return 

    const aTags = document.querySelectorAll('ul.filters li a')
    for(const tag of aTags) tag.classList.remove('selected')
    
    this.className = e.target.className
    e.target.classList.add('selected')

    this.renderByFilter(this.className)
  })

  this.$todoList.addEventListener('click', (e) => {
    const datasetAction = e.target.dataset.action
    if(!datasetAction) return 

    const [action, id] = datasetAction.split('-')
    switch(action) {
      case 'check': this.toggleState(id); break
      case 'remove': this.removeState(id); break
    }
  })

  this.$todoList.addEventListener('dblclick', (e) => {
    const datasetAction = e.target.dataset.action
    if(!datasetAction) return 

    const [action, id] = datasetAction.split('-')
    switch(action) {
      case 'edit': this.toggleEditView(id); break
    } 
  })
}

TodoList.prototype.renderByFilter = function(filter) {
  switch(filter) {
    case 'active': this.activeRender(this.items); break
    case 'completed': this.completedRender(this.items); break
    default: this.render(this.items)
  }
}

TodoList.prototype.activeRender = function(items) {
  const activeItems = items.filter((item) => !item.completed)
  this.render(activeItems) 
}

TodoList.prototype.completedRender = function(items) {
  const completedItems = items.filter((item) => item.completed)
  this.render(completedItems) 
}

TodoList.prototype.render = function(items) {
  const itemsHtmlString = items.reduce((acc, item) => {
    const { id, content, completed } = item
    const inputHtmlString = `<input class="toggle" type="checkbox" data-action=check-${id} ${completed && 'checked'}>`
    const labelHtmlString = `<label class="label" data-action=edit-${id}>${content}</label>`
    const buttonHtmlString = `<button class="destroy" data-action=remove-${id}></button>`
    const viewHtmlString = `<div class="view">${inputHtmlString}${labelHtmlString}${buttonHtmlString}</div>`
    const liHtmlString = `<li ${completed && 'class="completed"'} data-action=edit-${id}>${viewHtmlString}<input class="edit" value="${content}"></li>`
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
  this.renderByFilter(this.className)
}

TodoList.prototype.toggleState = function(id) {
  this.items = this.items.map((item) => id == item.id ? ({...item, completed: !item.completed}) : ({...item}))
  this.renderByFilter(this.className)
}

TodoList.prototype.removeState = function(id) {
  this.items = this.items.filter((item) => id != item.id)
  this.renderByFilter(this.className)
}

TodoList.prototype.toggleEditView = function(id) {
  const $liElement = document.querySelector(`li[data-action=edit-${id}]`)
  const $inputElement = $liElement.querySelector('input.edit')
 
  $liElement.setAttribute('class', 'editing')

  $inputElement.addEventListener('keydown', (e) => {
    switch(e.key) {
      case 'Escape': this.render(this.items); break
      case 'Enter': this.editContent(id, e.target.value); break
    }
  }) 
}

TodoList.prototype.editContent = function(id, content) {
  this.items = this.items.map((item) => item.id == id ? {...item, content} : {...item})
  this.renderByFilter(this.className)
}

export default TodoList