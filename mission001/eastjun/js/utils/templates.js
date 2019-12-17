const todoItemTemplate = (todoItem, index) => `
     <li data-id="${index}" class="${todoItem.isCompleted ? 'completed' : ''}">
        <div class="view">
          <input class="toggle" type="checkbox" ${todoItem.isCompleted ? 'checked' : ''}>
          <label class="label">${todoItem.contents}</label>
          <button class="destroy"></button>
        </div>
        <input class="edit" value="${todoItem.contents}">
     </li>`

export {
  todoItemTemplate
}
