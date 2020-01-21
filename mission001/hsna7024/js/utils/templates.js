import { filters } from "./constants.js";

export const todoListTemplate = (todo, index) => {
  const contentHtmlString = `<div class="view"> 
  <input class="toggle" type="checkbox" ${todo.isCompleted ? "checked" : ""}>
  <label class="label">${todo.content}</label>
  <button class="destroy"></button></div>
  <input class="edit" value="${todo.content}">`;
  const completedClassName = todo.isCompleted ? `class = "completed"` : "";
  const editingClassName = todo.onEdit ? `class = "editing"` : "";

  return `<li ${completedClassName} ${editingClassName} data-id="${index}">${contentHtmlString}</li>`;
};

export const todoFilterTemplate = filter => {
  const allSelected = filter === filters.ALL ? " selected" : "";
  const activeSelected = filter === filters.ACTIVE ? " selected" : "";
  const completedSelected = filter === filters.COMPLETED ? " selected" : "";

  return `<li>
    <a class="all${allSelected}" href="#/">전체보기</a>
  </li>
  <li>
    <a class="active${activeSelected}" href="#/active">해야할 일</a>
  </li>
  <li>
    <a class="completed${completedSelected}" href="#/completed">완료한 일</a>
  </li>`;
};

export const todoCountTemplate = length => {
  return `총 <strong>${length}</strong> 개`;
};
