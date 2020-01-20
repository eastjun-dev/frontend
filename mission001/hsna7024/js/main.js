import App from "./App.js";

const data = [
  {
    content: "새로운 타이틀",
    isCompleted: false,
    onEdit: false
  },
  {
    content: "완료된 타이틀",
    isCompleted: true,
    onEdit: false
  },
  {
    content: "완료된 타이틀",
    isCompleted: true,
    onEdit: false
  }
];

const init = () => {
  const app = new App({
    $targetTodoList: document.querySelector("#todo-list"),
    $targetTodoInput: document.querySelector("#new-todo-title"),
    $targetTodoCount: document.querySelector(".todo-count"),
    data
  });
};

init();
