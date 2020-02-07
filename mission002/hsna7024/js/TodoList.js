import { classNameMap, keyMap, errorMessageMap } from "./utils/constants.js";
import { todoListTemplate } from "./utils/templates.js";

export default function TodoList(params) {
  const { $target, toggleTodo, removeTodo, filterTodos } = params;
  let todos = params.todos || [];
  let filter = params.filter || "";
  let filteredTodos = [];

  if($target === null) {
    throw new Error(errorMessageMap.IS_NO_TARGET);
  }

  $target.addEventListener("click", e => {
    const { id } = e.toElement.parentElement.parentElement.dataset;
    if (e.target.className === classNameMap.TOGGLE) {
      toggleTodo(id);
    }
    if (e.target.className === classNameMap.REMOVE) {
      removeTodo(id);
    }
  });

  $target.addEventListener("dblclick", e => {
    if (e.target.className === classNameMap.LABEL) {
      const { id } = e.toElement.parentElement.parentElement.dataset;
      todos[id].onEdit = true;
      this.render();
    }
  });

  $target.addEventListener("keydown", e => {
    if (e.target.className === classNameMap.EDIT) {
      const { id } = e.target.parentElement.dataset;
      if (e.key === keyMap.ENTER && e.target.value) {
        todos[id].content = e.target.value;
        todos[id].onEdit = false;
        this.render();
      }
      if (e.key === keyMap.ESC) {
        todos[id].onEdit = false;
        this.render();
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
