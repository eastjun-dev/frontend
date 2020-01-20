import TodoList from "./TodoList.js";

export default function App(params) {
  const $targetTodoList = params.$targetTodoList;
  let data = params.data || [];

  const todoList = new TodoList({
    $target: $targetTodoList,
    data
  });

  this.setState = nextData => {
    data = nextData;
    todoList.setState(data);
    this.render();
  };

  this.render = () => {
    todoList.render();
  };

  this.render();
}
