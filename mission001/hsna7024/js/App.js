import TodoList from "./TodoList.js";
import TodoInput from "./TodoInput.js";

export default function App(params) {
  const { $targetTodoList, $targetTodoInput } = params;
  let data = params.data || [];

  const todoList = new TodoList({
    $target: $targetTodoList,
    data
  });

  const todoInput = new TodoInput({
    $target: $targetTodoInput,
    onKeyEnter: content => {
      data.push({
        content
      });
      this.render();
    }
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
