import { classNames } from "./utils/constants"

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
      const ENTER_KEY_CODE = 13;
      const ESC_KEY_CODE = 27;
      if (e.keyCode === ENTER_KEY_CODE) {
        const { id } = e.target.parentElement.dataset;
        data[id].content = e.target.value;
        data[id].onEdit = false;
        this.render();
      }
      if (e.keyCode === ESC_KEY_CODE) {
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
    console.log(filter);
    filteredData = filterTodos(data, filter);
    this.render();
  };

  this.render = () => {
    $target.innerHTML = filteredData
      .map((todo, index) => {
        const contentHtmlString = `<div class="view"> 
        <input class="toggle" type="checkbox" ${
          todo.isCompleted ? "checked" : ""
        }>
        <label class="label">${todo.content}</label>
        <button class="destroy"></button></div>
        <input class="edit" value="${todo.content}">`;
        const completedClassName = todo.isCompleted
          ? `class = "completed"`
          : "";
        const editingClassName = todo.onEdit ? `class = "editing"` : "";

        return `<li ${completedClassName} ${editingClassName} data-id="${index}">${contentHtmlString}</li>`;
      })
      .join("");
  };

  this.render();
}
