import {
  setTodoData,
  deleteTodoData,
  editTodoData,
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
              <input class="toggle" type="checkbox"${
                data.isCompleted ? ` checked` : ""
              }>
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
  setTodoData(data, () => {
    const todoList = new TodoList(todoListData);
    todoList.setState(todoListData);

    const todoCount = new TodoCount(todoListData);
    todoCount.setState(todoListData);
  });
};

export const onComplete = e => {
  const list = e.target.parentElement.parentElement;
  const id = list.id;
  editTodoData(id, () => {
    if (e.target.checked) {
      list.classList.add("completed");
    } else {
      list.classList.remove("completed");
    }
  });
};

// TodoList의 data 제거
export const deleteTodoList = e => {
  const id = e.target.parentElement.parentElement.id;

  deleteTodoData(id, () => {
    const todoList = new TodoList(todoListData);
    todoList.setState(todoListData);

    const todoCount = new TodoCount(todoListData);
    todoCount.setState(todoListData);
  });
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
      const id = e.target.parentElement.id;

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
