import { classNameMap, keyMap, errorMessageMap } from "./utils/constants.js";
import { todoListTemplate } from "./utils/templates.js";

export default function TodoList(params) {
  const {
    $target,
    toggleTodo,
    removeTodo,
    filterTodos,
    updateTodoByIndex
  } = params;
  let todos = params.todos || [];
  let filter = params.filter || "";
  let filteredTodos = [];

  const onEditMode = $element => $element.classList.add(classNameMap.EDIT_MODE);
  const offEditMode = $element =>
    $element.classList.remove(classNameMap.EDIT_MODE);
  const onEnterInEditMode = $element => {
    const { id } = $element.closest("li").dataset;
    const index = todos.findIndex(todo => todo._id === id);
    const content = $element.value;
    
    updateTodoByIndex(index, content);
    offEditMode($element.closest("li"));
  };
  const onKeydownInEditMode = e => {
    if (e.key === keyMap.ENTER && e.target.value) {
      onEnterInEditMode(event.target);
      this.render();
    } else if (e.key === keyMap.ESC) {
      offEditMode(e.target.closest("li"));
    }
  };

  if ($target === null) {
    throw new Error(errorMessageMap.IS_NO_TARGET);
  }

  $target.addEventListener("click", e => {
    const { id } = e.target.closest("li").dataset;
    if (e.target.classList.contains(classNameMap.TOGGLE)) {
      toggleTodo(id);
    } else if (e.target.classList.contains(classNameMap.REMOVE)) {
      removeTodo(id);
    }
  });

  $target.addEventListener("dblclick", e => {
    if (e.target.classList.contains(classNameMap.LABEL)) {
      onEditMode(e.target.closest("li"));
    }
  });

  $target.addEventListener("keydown", e => {
    if (!e.target.classList.contains(classNameMap.EDIT)) {
      return;
    } else {
      onKeydownInEditMode(e);
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
