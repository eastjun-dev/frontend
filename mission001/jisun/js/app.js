const status = {
  COMPLETE: "complete",
  PROCEEDING: "proceeding",
  NEED_TODO: "needTodo"
};

let todoListData = [
  { text: "할일A", status: status.COMPLETE, id: 1 },
  { text: "할일B", status: status.PROCEEDING, id: 2 },
  { text: "할일D", status: status.NEED_TODO, id: 3 }
];

let todoIdCount = todoListData.length + 1;

// todoList 관련
const todoList = document.getElementById("todoList");

// 초기 데이터에 따라 todoList render
const renderTodoList = todoListData => {
  if (todoListData.length === 0) {
    todoList.innerHTML = `<li>Todo List가 비어있습니다</li>`;
  } else {
    todoListData.forEach(data => {
      todoList.innerHTML += `<li${
        data.status === status.COMPLETE ? ` class="completed"` : ``
      } id="todo-${data.id}">
          <div class="view">
            <input class="toggle" type="checkbox"${data.status ===
              status.COMPLETE && ` checked`}>
            <label class="label">${data.text}</label>
            <button class="destroy"></button>
          </div>
          <input class="edit" value="${data.text}">
       </li>`;
    });
  }

  const toggles = document.getElementsByClassName("toggle");
  const deleteBtns = document.getElementsByClassName("destroy");

  for (let i = 0; i < toggles.length; ++i) {
    toggles[i].addEventListener("change", e => {
      onComplete(e);
    });
  }

  for (let i = 0; i < deleteBtns.length; ++i) {
    deleteBtns[i].addEventListener("click", e => {
      deleteTodoList(e);
    });
  }
};
renderTodoList(todoListData);

// TodoList에 new data 추가
const addTodoList = data => {
  const list = document.createElement("li");
  list.id = `todo-${data.id}`;
  todoList.appendChild(list);

  list.innerHTML = `<div class="view">
                      <input class="toggle" type="checkbox" ${data.status ===
                        status.COMPLETE && "checked"}>
                      <label class="label">${data.text}</label>
                      <button class="destroy"></button>
                    </div>
                    <input class="edit" value="${data.text}">`;

  const checkbox = list.firstChild.childNodes[1];
  const deleteBtn = list.firstChild.childNodes[5];
  todoIdCount++;

  checkbox.addEventListener("change", e => {
    onComplete(e);
  });

  deleteBtn.addEventListener("click", e => {
    deleteTodoList(e);
  });
};

// TodoList의 data 제거
const deleteTodoList = e => {
  const list = e.target.parentElement.parentElement;
  todoList.removeChild(list);
  id = list.id.replace(/[^0-9]/g, "");
  for (let i = 0; i < todoListData.length; ++i) {
    if (todoListData[i].id.toString() === id) {
      todoListData.splice(i, 1);
    }
  }

  console.log(todoListData);
};

// TodoList - checkbox 관련
const onComplete = e => {
  const list = e.target.parentElement.parentElement;

  if (e.target.checked) {
    list.classList.add("completed");
  } else {
    list.classList.remove("completed");
  }
};

// input
const input = document.getElementById("inputTodo");

input.addEventListener("keypress", e => {
  if (e.key === "Enter") {
    if (input.value === "") {
      alert("값을 입력해주세요 !");
    }

    const newTodoData = {
      text: input.value,
      status: status.NEED_TODO,
      id: todoIdCount
    };

    todoListData.push(newTodoData);
    addTodoList(newTodoData);
    renderCount(todoListData);
    e.target.value = "";
  }
});

// count
const todoCount = document.getElementById("todoCount");

const renderCount = todoListData => {
  todoCount.innerHTML = `총 <strong>${todoListData.length}</strong> 개`;
};

// 초기값 랜더
renderCount(todoListData);
