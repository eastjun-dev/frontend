import TodoList from "./TodoList.js";
import TodoInput from "./TodoInput.js";
import TodoCount from "./TodoCount.js";

export default function App(params) {
  const { $targetTodoList, $targetTodoInput, $targetTodoCount } = params;
  let data = params.data || [];

  const todoList = new TodoList({
    $target: $targetTodoList,
    data,
    toggleTodo: id => {
      data[id].isCompleted = !data[id].isCompleted;
      this.render();
    },
    removeTodo: id => {
      data.splice(id, 1);
      this.render();
    }
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

  const todoCount = new TodoCount({
    $target: $targetTodoCount,
    data
  });

  this.setState = nextData => {
    data = nextData;
    todoList.setState(data);
    todoCount.setState(data);
    this.render();
  };

  this.render = () => {
    todoList.render();
    todoCount.render();
  };

  this.render();
}
