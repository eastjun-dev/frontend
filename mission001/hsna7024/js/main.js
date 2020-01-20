import App from "./App.js";

const data = [
  {
    content: "새로운 타이틀"
  },
  {
    content: "완료된 타이틀"
  },
  {
    content: "완료된 타이틀"
  }
];

const init = () => {
  const app = new App({
    $targetTodoList: document.querySelector("#todo-list"),
    data
  });
};

init();
