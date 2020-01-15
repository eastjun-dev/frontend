const todoFormTemplate = () =>
`
  <input type="text"
    class="new-todo" placeholder="할일을 추가해주세요" autofocus
    name="new-todo"
  >
  <button 
    type="submit">
  </button>
`;

const todoItempTemplate = ({ id, completed, todoText, editing}) => {
  const getTodoClass = (completed, editing) => {
    const todoItemClass = [];
    console.log('completed', completed);
    console.log('editing', editing);
    if(completed) todoItemClass.push('completed')
    if(editing) todoItemClass.push('editing')
    return todoItemClass.join(' ');
  }

  return `<li 
      data-id="${id}"
      class="${getTodoClass(completed, editing)}"
    >
  <div class="view">
    <input class="toggle" type="checkbox">
    <label class="label">${todoText}</label>
    <button class="destroy"></button>
  </div>
    <input class="edit" value="${todoText}">
  </li>
  `;
}

const todoListTemplate = (todoList) =>
todoList.map(todoItem => todoItempTemplate(todoItem)).join('');


export {
  todoFormTemplate,
  todoListTemplate
}
