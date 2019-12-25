import { todoIdCount } from "../store/store.js";
import { addTodoList } from "./TodoList.js";
import { TodoCount } from "./TodoCount.js";

const input = document.getElementById("inputTodo");

export function TodoInput(data) {
  this.setState = nextData => {
    data = nextData;
    render(data);
  };
}

const render = data => {
  input.addEventListener("keydown", e => {
    onAddData(e, data);
  });
};

const onAddData = (e, data) => {
  if (e.keyCode === 13) {
    if (input.value === "") {
      alert("값을 입력해주세요 !");
      return;
    }

    const newTodoData = input.value;

    addTodoList(newTodoData);

    const todoCount = new TodoCount(data);
    todoCount.setState(data);

    e.target.value = "";
  }
};
