import App from "./App.js";

const data = [
  {
    content: "새로운 타이틀",
    isCompleted: false
  },
  {
    content: "완료된 타이틀",
    isCompleted: true
  },
  {
    content: "완료된 타이틀",
    isCompleted: true
  }
];

const init = () => {
  const app = new App({
    $targetTodoList: document.querySelector("#todo-list"),
    $targetTodoInput: document.querySelector("#new-todo-title"),
    data
  });
};

init();
