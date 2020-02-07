import App from "./App.js";
import { filterMap, USERNAME } from "./utils/constants.js";
import { api } from "./utils/api.js";

const init = async () => {
  const todos = await api.getTodos(USERNAME);

  const app = new App({
    $targetTodoList: document.querySelector("#todo-list"),
    $targetTodoInput: document.querySelector("#new-todo-title"),
    $targetTodoCount: document.querySelector(".todo-count"),
    $targetTodoFilter: document.querySelector(".filters"),
    filter: filterMap.ALL,
    todos
  });
};

init();
