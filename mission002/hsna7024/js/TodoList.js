import { classNameMap, keyMap, errorMessageMap } from "./utils/constants.js";
import { todoListTemplate } from "./utils/templates.js";

export default function TodoList(params) {
  const { $target, toggleTodo, removeTodo, filterTodos, onKeyEnter } = params;
  let todos = params.todos || [];
  let filter = params.filter || "";
  let filteredTodos = [];

  if ($target === null) {
    throw new Error(errorMessageMap.IS_NO_TARGET);
  }

  $target.addEventListener("click", e => {
    const { id } = e.target.closest("li").dataset;
    if (e.target.classList.contains(classNameMap.TOGGLE)) {
      toggleTodo(id);
    }
    else if (e.target.classList.contains(classNameMap.REMOVE)) {
      removeTodo(id);
    }
  });

  $target.addEventListener("dblclick", e => {
    if (e.target.classList.contains(classNameMap.LABEL)) {
      e.target.closest("li").classList.toggle("editing");
    }
  });

  $target.addEventListener("keydown", e => {
    if (e.target.classList.contains(classNameMap.EDIT)) {
      const { id } = e.target.closest("li").dataset;
      if (e.key === keyMap.ENTER && e.target.value) {
        const index = todos.findIndex(todo => {
          return todo._id === id;
        });
        todos[index].content = e.target.value;
        onKeyEnter(todos[index]);
        e.target.closest("li").classList.toggle("editing");
        this.render();
      }
      else if (e.key === keyMap.ESC) {
        e.target.closest("li").classList.toggle("editing");
      }
    }
  });

  filteredTodos = filterTodos(todos, filter);

  this.setState = (nextTodos, nextFilter) => {
    todos = nextTodos || todos;
    filter = nextFilter || filter;
    filteredTodos = filterTodos(todos, filter);
    this.render();
  };

  this.render = () => {
    $target.innerHTML = filteredTodos.map(todoListTemplate).join("");
  };

  this.render();
}
