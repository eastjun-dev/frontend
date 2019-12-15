function TodoList(selector) {
  this.todoList = document.querySelector(selector) 
}

TodoList.prototype.render = function(items) {
  const itemsHtmlString = items.reduce((acc, item, index) => {
    const { content, completed } = item
    const inputHtmlString = `<input class="toggle" type="checkbox">`
    const labelHtmlString = `<label class="label">${content}</label>`
    const buttonHtmlString = `<button class="destroy"></button>`
    const viewHtmlString = `<div class="view">${inputHtmlString}${labelHtmlString}${buttonHtmlString}</div>`
    const liHtmlString = `<li ${completed && 'class="completed"'}>${viewHtmlString}<input class="edit" value="${content}"></li>`
    return `${acc}${liHtmlString}`
  }, '')

  this.todoList.innerHTML = itemsHtmlString
}


document.addEventListener('DOMContentLoaded', () => {
  const items = []
  const $input = document.querySelector('.new-todo')
  const TodoListComponent = new TodoList('#todo-list')

  $input.addEventListener('keydown', e => {
    if(e.key === 'Enter') {
      const item = {
        content: e.target.value,
        completed: false,
      }
      items.push(item)
      TodoListComponent.render(items)
    } 
  })

})