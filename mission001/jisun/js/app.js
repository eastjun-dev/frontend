const status = {
  COMPLETE: 'complete',
  PROCEEDING: 'proceeding',
  NEED_TODO: 'needTodo'
}

let todoListData = [
  { text: '할일A', status: status.COMPLETE },
  { text: '할일A', status: status.PROCEEDING },
  { text: '할일A', status: status.NEED_TODO }
];

const todoList = document.getElementById('todoList');

const renderTodoList = todoListData => {
  // todoList 비우기
  todoList.innerHTML = '';

  if (todoListData.length === 0) {
    todoList.innerHTML = `<li>Todo List가 비어있습니다</li>`;
  } else {
    todoListData.forEach(data => {
      console.log(data);
      todoList.innerHTML += 
      `<li ${data.status === status.COMPLETE ? `class="completed"` : ``}>
          <div class="view">
            <input class="toggle" type="checkbox" ${data.status === status.COMPLETE && 'checked'}>
            <label class="label">${data.text}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="${data.text}">
       </li>`
    });
  }
}
renderTodoList(todoListData);

// input
const input = document.getElementById('inputTodo');

input.addEventListener('keypress', e => {
  if (e.key === 'Enter') {
    todoListData.push({ text: input.value, status: status.NEED_TODO })
    renderTodoList(todoListData);
    e.target.value = '';

    console.log(todoListData);
  }
});

// count
const todoCount = document.getElementById('todoCount');
todoCount.innerHTML = `총 <strong>${todoListData.length}</strong> 개`