import { classNameMap, keyMap, errorMessageMap } from "./utils/constants.js";
import { todoListTemplate } from "./utils/templates.js";

export default function TodoList(params) {
  const { $target, toggleTodo, removeTodo, filterTodos } = params;
  let data = params.data || [];
  let filter = params.filter || "";
  let filteredData = [];

  if($target === null) {
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
      const { id } = e.target.closest("li").dataset;
      data[id].onEdit = true;
      this.render();
    }
  });

  $target.addEventListener("keydown", e => {
    if (e.target.classList.contains(classNameMap.EDIT)) {
      const { id } = e.target.closest("li").dataset;
      if (e.key === keyMap.ENTER && e.target.value) {
        data[id].content = e.target.value;
        data[id].onEdit = false;
        this.render();
      }
      else if (e.key === keyMap.ESC) {
        data[id].onEdit = false;
        this.render();
      }
    }
  });

  filteredData = filterTodos(data, filter);

  this.setState = (nextData, nextFilter) => {
    data = nextData || data;
    filter = nextFilter || filter;
    filteredData = filterTodos(data, filter);
    this.render();
  };

  this.render = () => {
    $target.innerHTML = filteredData.map(todoListTemplate).join("");
  };

  this.render();
}
