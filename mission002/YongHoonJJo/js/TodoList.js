import { eventKeyboards, counterFilters, dataActions  } from './utils/Contants.js'
import { createTodoItem, getTodoList, toggleTodoItem, deleteTodoItem } from './utils/apis.js'

function TodoList(selector) {
  const { ALL } = counterFilters

  this.username = 'yonghoonjjo'
  this.items = []
  this.filter = ALL
  this.$todoList = document.querySelector(selector)
  this.$filters = document.querySelector('ul.filters')

  this.$filters.addEventListener('click', (e) => {
    if(e.target === this.$filters) return 

    const aTags = document.querySelectorAll('ul.filters li a')
    for(const tag of aTags) tag.classList.contains('selected') && tag.classList.remove('selected')
     
    this.filter = e.target.className
    e.target.classList.add('selected')

    this.renderByFilter()
  })

  this.$todoList.addEventListener('click', async (e) => {
    const { CHECK, REMOVE } = dataActions
    const datasetAction = e.target.dataset.action
    if(!datasetAction) return 

    const [action, id] = datasetAction.split('-')
    try {
      switch(action) {
        case CHECK: await this.toggleState(id); break
        case REMOVE: await this.removeState(id); break
      }
    } catch(e) {
      console.error({e})
    }
  })

  this.$todoList.addEventListener('dblclick', (e) => {
    const { EDIT } = dataActions
    const datasetAction = e.target.dataset.action
    if(!datasetAction) return 

    const [action, id] = datasetAction.split('-')
    switch(action) {
      case EDIT: this.toggleEditView(id); break
    } 
  })

  ;(async function() {
    try {
      await this.renderByFilter()
    } catch (e) {
      console.error({e})
    }
  }).bind(this)() 
}

TodoList.prototype.renderByFilter = async function() {
  const res = await getTodoList(this.username)
  this.items = await res.json()
  const { ACTIVE, COMPLETED } = counterFilters
  switch(this.filter) {
    case ACTIVE: this.renderActive(this.items); break
    case COMPLETED: this.renderCompleted(this.items); break
    default: this.render(this.items)
  }
}

TodoList.prototype.renderActive = function(items) {
  const activeItems = items.filter((item) => !item.isCompleted)
  this.render(activeItems) 
}

TodoList.prototype.renderCompleted = function(items) {
  const completedItems = items.filter((item) => item.isCompleted)
  this.render(completedItems) 
}

TodoList.prototype.render = function(items) {
  const { CHECK, REMOVE, EDIT } = dataActions
  const itemsHtmlString = items.reduce((acc, item) => {
    const { _id, content, isCompleted } = item
    const todoItemTemplate = `
      <li ${isCompleted && 'class="completed"'} data-action=${EDIT}-${_id}>
        <div class="view">
          <input class="toggle" type="checkbox" data-action=${CHECK}-${_id} ${isCompleted && 'checked'}>
          <label class="label" data-action=${EDIT}-${_id}>${content}</label>
          <button class="destroy" data-action=${REMOVE}-${_id}></button>
        </div>
        <input class="edit" value="${content}">
      </li> 
    `
    return `${acc}${todoItemTemplate}`
  }, '')

  this.$todoList.innerHTML = itemsHtmlString
  this.renderCounterContainer(items)
}

TodoList.prototype.renderCounterContainer = function(items) {
  const $countContainerSpanComponent = document.querySelector('div.count-container > span')
  $countContainerSpanComponent.innerHTML = `총 <strong>${items.length}</strong> 개`
}

TodoList.prototype.addItem = async function(content) {
  await createTodoItem(this.username, content)
  await this.renderByFilter()
}

TodoList.prototype.toggleState = async function(id) {
  await toggleTodoItem(this.username, id)
  await this.renderByFilter()
}

TodoList.prototype.removeState = async function(id) {
  await deleteTodoItem(this.username, id)
  await this.renderByFilter()
}

TodoList.prototype.toggleEditView = function(id) {
  const $liElement = document.querySelector(`li[data-action=edit-${id}]`)
  const $inputElement = $liElement.querySelector('input.edit')
 
  $liElement.classList.add('editing')

  $inputElement.addEventListener('keydown', async (e) => {
    const { ENTER, ESC } = eventKeyboards
    try {
      switch(e.key) {
        case ESC: await this.renderByFilter(); break
        case ENTER: await this.editContent(id, e.target.value); break
      }
    } catch(e) {
      console.error({e})
    }
  })
}

TodoList.prototype.editContent = async function(id, content) {
  this.items = this.items.map((item) => item._id == id ? {...item, content} : {...item})
  await this.renderByFilter()
}

export default TodoList