const todoItemTemplate = (todoItem) => `
    <li data-id="${todoItem._id}" class="${todoItem.isCompleted ? 'completed' : ''}">
      <div class="view">
          <input class="toggle" type="checkbox" ${todoItem.isCompleted ? 'checked' : ''}>
          <label class="label">${todoItem.content}</label>
          <button class="destroy"></button>
      </div>
    </li>`


export {
  todoItemTemplate
}
