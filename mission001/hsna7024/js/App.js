import TodoList from "./TodoList.js";
import TodoInput from "./TodoInput.js";
import TodoCount from "./TodoCount.js";
import TodoFilter from "./TodoFilter.js";
import { filterMap } from "./utils/constants.js";

export default function App(params) {
  const {
    $targetTodoList,
    $targetTodoInput,
    $targetTodoCount,
    $targetTodoFilter
  } = params;
  let data = params.data || [];
  let filter = params.filter || filterMap.ALL;

  const filterTodos = (todos, filter) => {
    switch (filter) {
      case filterMap.ACTIVE:
        return todos.filter(todo => !todo.isCompleted);
      case filterMap.COMPLETED:
        return todos.filter(todo => todo.isCompleted);
      default:
        return todos;
    }
  };

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
    },
    filter,
    filterTodos
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
    count: data.length
  });

  const todoFilter = new TodoFilter({
    $target: $targetTodoFilter,
    changeFilter: nextFilter => {
      this.setState(data, nextFilter);
    },
    filter
  });

  this.setState = (nextData, nextFilter) => {
    data = nextData;
    filter = nextFilter;
    todoList.setState(data, filter);
    todoCount.setState(filterTodos(data, filter).length);
    todoFilter.setState(filter);
    this.render();
  };

  this.render = () => {
    todoList.render();
    todoCount.render();
    todoFilter.render();
  };

  this.render();
}