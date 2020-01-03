const todoItemTemplate = (todoItem, index) => `
  <li class=${todoItem.isCompleted}>
    <div data-idx=${index} class="view">
      <input class="toggle" type="checkbox" ${todoItem.isCompleted === 'completed' && 'checked'}>
      <label class="label">${todoItem.text}</label>
      <button class="destroy"></button>
    </div>
    <input class="edit" value="${todoItem.text}">
  </li>
`

export {
  todoItemTemplate
}
