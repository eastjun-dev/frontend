import "../css/style.css";

import App from "./components/TodoApp.js";
import { store } from "./store/store.js";

document.addEventListener("DOMContentLoaded", event => {
  console.log("DOM fully loaded and parsed");

  window.app = new App({
    store,
    todoForm: "#todo-form",
    todoList: "#todo-list",
    todoCount: ".todo-count",
  });
});
