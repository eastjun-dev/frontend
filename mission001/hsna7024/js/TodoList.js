import { classNames, keyCodes } from "./utils/constants.js";
import { todoListTemplate } from "./utils/templates.js";

export default function TodoList(params) {
  const { $target, toggleTodo, removeTodo, filterTodos } = params;
  let data = params.data || [];
  let filter = params.filter || "";
  let filteredData = [];

  $target.addEventListener("click", e => {
    const { id } = e.toElement.parentElement.parentElement.dataset;
    if (e.target.className === classNames.TOGGLE) {
      toggleTodo(id);
    }
    if (e.target.className === classNames.REMOVE) {
      removeTodo(id);
    }
  });

  $target.addEventListener("dblclick", e => {
    if (e.target.className === classNames.LABEL) {
      const { id } = e.toElement.parentElement.parentElement.dataset;
      data[id].onEdit = true;
      this.render();
    }
  });

  $target.addEventListener("keydown", e => {
    if (e.target.className === classNames.EDIT) {
      if (e.keyCode === keyCodes.ENTER) {
        const { id } = e.target.parentElement.dataset;
        data[id].content = e.target.value;
        data[id].onEdit = false;
        this.render();
      }
      if (e.keyCode === keyCodes.ESC) {
        const { id } = e.target.parentElement.dataset;
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
