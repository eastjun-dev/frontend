const todoItemTemplate = (todoItem, index) => `
    <li data-id="${todoItem._id}" data-index="index" class="${todoItem.isCompleted ? 'completed' : ''}">
      <div class="view">
          <input class="toggle" type="checkbox" ${todoItem.isCompleted ? 'checked' : ''}>
          <label class="label">${todoItem.content}</label>
          <button class="destroy"></button>
      </div>
    </li>`


export {
  todoItemTemplate
}
