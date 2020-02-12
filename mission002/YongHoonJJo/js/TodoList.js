import { counterFilters, dataActions  } from './utils/Contants.js'
import { createTodoItem, getTodoList, toggleTodoItem, deleteTodoItem } from './utils/apis.js'
import { renderBySelectedFilterHandler, doByActionHandler, showEditViewHandler, doByEscOrEnterHandler } from './eventHandler/TodoListHandler.js'

function TodoList(selector) {
  const { ALL } = counterFilters

  this.username = 'yonghoonjjo'
  this.items = []
  this.filter = ALL
  this.$todoList = document.querySelector(selector)
  this.$filters = document.querySelector('ul.filters')

  this.$filters.addEventListener('click', renderBySelectedFilterHandler.bind(this))
  this.$todoList.addEventListener('click', doByActionHandler.bind(this))
  this.$todoList.addEventListener('dblclick', showEditViewHandler.bind(this))

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
  const { CHECK, REMOVE } = dataActions
  const itemsHtmlString = items.reduce((acc, item) => {
    const { _id, content, isCompleted } = item
    const todoItemTemplate = `
      <li ${isCompleted ? 'class="completed"' : ''} data-id=${_id}>
        <div class="view">
          <input class="toggle" type="checkbox" data-action=${CHECK}-${_id} ${isCompleted ? 'checked' : ''}>
          <label class="label" data-id=${_id}>${content}</label>
          <button class="destroy" data-action=${REMOVE}-${_id}></button>
        </div>
        <input class="edit" value="${content}">
      </li> 
    `
    return `${acc}${todoItemTemplate}`
  }, '')

  this.$todoList.innerHTML = itemsHtmlString
  this.renderCountContainer(items)
}

TodoList.prototype.renderCountContainer = function(items) {
  const $countContainerSpan = document.querySelector('div.count-container > span')
  $countContainerSpan.innerHTML = `총 <strong>${items.length}</strong> 개`
}

TodoList.prototype.addItem = async function(content) {
  await createTodoItem(this.username, content)
  await this.renderByFilter()
}

TodoList.prototype.toggleState = async function(id) {
  await toggleTodoItem(this.username, id)
  await this.renderByFilter()
}

TodoList.prototype.removeItem = async function(id) {
  await deleteTodoItem(this.username, id)
  await this.renderByFilter()
}

TodoList.prototype.toggleEditView = function(id) {
  const $li = document.querySelector(`li[data-id="${id}"]`)
  const $input = $li.querySelector('input.edit')
 
  $li.classList.add('editing')
  $input.addEventListener('keydown', doByEscOrEnterHandler.bind(this, id))
}

TodoList.prototype.editContent = async function(id, content) {
  this.items = this.items.map((item) => item._id == id ? {...item, content} : {...item})
  await this.renderByFilter()
}

export default TodoList