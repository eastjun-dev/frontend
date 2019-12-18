import { status, todoIdCount } from '../store/store.js';
import { addTodoList } from './TodoList.js';
import { TodoCount } from './TodoCount.js';

const input = document.getElementById("inputTodo");

export function TodoInput (data) {
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

      data.push(newTodoData);
      addTodoList(newTodoData);
      TodoCount(data);
      e.target.value = "";
    }
  });
}
