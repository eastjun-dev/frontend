const status = {
  COMPLETED: "completed",
  PROCEEDING: "proceeding",
  NEED_TODO: "needTodo"
};

let todoListData = [
  { text: "AAAAA", status: status.COMPLETED, id: 1 },
  { text: "BBBBB", status: status.PROCEEDING, id: 2 },
  { text: "DDDDD", status: status.NEED_TODO, id: 3 }
];

let todoIdCount = todoListData.length + 1;

// todoList 관련
const todoList = document.getElementById("todoList");

// 초기 데이터에 따라 todoList render
const renderTodoList = todoListData => {
  todoList.innerHTML = "";

  if (todoListData.length === 0) {
    todoList.innerHTML = `<li>Todo List가 비어있습니다</li>`;
  } else {
    todoListData.forEach(data => {
      todoList.innerHTML += `<li${
        data.status === status.COMPLETED ? ` class="completed"` : ``
      } id="todo-${data.id}">
            <div class="view">
              <input class="toggle" type="checkbox"${data.status ===
                status.COMPLETED && ` checked`}>
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

// TodoList에 new data 추가
const addTodoList = data => {
  const list = document.createElement("li");
  list.id = `todo-${data.id}`;
  todoList.appendChild(list);

  list.innerHTML = `<div class="view">
                      <input class="toggle" type="checkbox" ${data.status ===
                        status.COMPLETED && "checked"}>
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

  renderCount(todoListData);
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

input.addEventListener("keydown", e => {
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

// 더블클릭시 edit 모드
todoList.addEventListener("dblclick", e => {
  const label = e.target.childNodes[3];
  const editInput = e.target.nextSibling.nextSibling;
  const prevValue = editInput.value;
  const id = e.target.parentElement.id.replace(/[^0-9]/g, "");

  editInput.style.display = "block";
  editInput.addEventListener("keydown", e => {
    if (e.keyCode === 27) {
      editInput.style.display = "none";
    }

    if (e.keyCode === 13) {
      if (prevValue !== editInput.value) {
        let i = 0;
        while (i < todoListData.length) {
          if (todoListData[i].id.toString() === id) {
            todoListData[i].text = e.target.value;
            label.innerHTML = e.target.value;
            break;
          }
          ++i;
        }
      }
      editInput.style.display = "none";
    }
  });
});

// count
const todoCount = document.getElementById("todoCount");

const renderCount = todoListData => {
  todoCount.innerHTML = `총 <strong>${todoListData.length}</strong> 개`;
};

// 선택한 텝에 따라 랜더링 다시하기 'ㅁ'
const tab = document.getElementById("tab");
tab.addEventListener("click", e => {
  const selectedTab = e.target;
  const prevSelectedTab = document.querySelector(".selected");

  prevSelectedTab.classList.remove("selected");
  selectedTab.classList.add("selected");

  let selectedTodoData = [];

  if (
    selectedTab.id === status.COMPLETED ||
    selectedTab.id === status.NEED_TODO
  ) {
    for (let i = 0; i < todoListData.length; ++i) {
      if (todoListData[i].status === selectedTab.id) {
        selectedTodoData.push(todoListData[i]);
      }
    }
    renderTodoList(selectedTodoData);
  } else {
    renderTodoList(todoListData);
  }
});

// 초기값 랜더
renderCount(todoListData);
renderTodoList(todoListData);
