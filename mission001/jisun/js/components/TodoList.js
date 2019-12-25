import {
  todoIdCount,
  setTodoData,
  deleteTodoData,
  setTodoIdCount,
  todoListData
} from "../store/store.js";
import { TodoCount } from "./TodoCount.js";

const todoList = document.getElementById("todoList");

export function TodoList(data) {
  this.setState = nextData => {
    data = nextData;
    renderTodoList(data);
    onEditMode(data);
  };
}

// 초기 데이터에 따라 todoList render
export const renderTodoList = list => {
  todoList.innerHTML = "";

  if (list.length === 0) {
    todoList.innerHTML = `<li>Todo List가 비어있습니다</li>`;
  } else {
    list.forEach(data => {
      todoList.innerHTML += `<li${
        data.isCompleted ? ` class="completed"` : ``
      } id="${data._id}">
            <div class="view">
              <input class="toggle" type="checkbox"${data.isCompleted ? ` checked` : ''}>
              <label class="label">${data.content}</label>
              <button class="destroy"></button>
            </div>
            <input class="edit" value="${data.content}">
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
export const addTodoList = data => {
  const list = document.createElement("li");
  list.id = `${data._id}`;
  todoList.appendChild(list);

  list.innerHTML = `<div class="view">
                      <input class="toggle" type="checkbox">
                      <label class="label">${data}</label>
                      <button class="destroy"></button>
                    </div>
                    <input class="edit" value="${data}">`;

  const checkbox = list.firstChild.childNodes[1];
  const deleteBtn = list.firstChild.childNodes[5];

  setTodoData(data);
  setTodoIdCount(todoIdCount + 1);
  console.log(todoListData);

  checkbox.addEventListener("change", e => {
    onComplete(e);
  });

  deleteBtn.addEventListener("click", (e) => {
    deleteTodoList(e);
  });
};

export const onComplete = e => {
  const list = e.target.parentElement.parentElement;

  if (e.target.checked) {
    list.classList.add("completed");
  } else {
    list.classList.remove("completed");
  }
};

// TodoList의 data 제거
export const deleteTodoList = e => {
  const list = e.target.parentElement.parentElement;
  const id = list.id;

  deleteTodoData(id);
  
  for (let i = 0; i < todoListData.length; ++i) {
    if (todoListData[i]._id.toString() === id) {
      todoListData.splice(i, 1);
    }
  }

  
  todoList.removeChild(list);

  const todoCount = new TodoCount(todoListData);
  todoCount.setState(todoListData);
};

// 더블클릭시 edit 모드
const onEditMode = data => {
  let clickCount = 0;

  todoList.addEventListener("click", e => {
    clickCount++;
    if (clickCount === 2) {
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
            while (i < data.length) {
              if (data[i]._id.toString() === id) {
                data[i].content = e.target.value;
                label.innerHTML = e.target.value;
                break;
              }
              ++i;
            }
          }
          editInput.style.display = "none";
        }
      });
    }
    setTimeout(() => {
      clickCount = 0;
    }, 200);
  });
};
