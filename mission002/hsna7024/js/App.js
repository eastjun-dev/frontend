import TodoList from "./TodoList.js";
import TodoInput from "./TodoInput.js";
import TodoCount from "./TodoCount.js";
import TodoFilter from "./TodoFilter.js";
import { filterMap, USERNAME } from "./utils/constants.js";
import { api } from "./utils/api.js";

export default function App(params) {
  const {
    $targetTodoList,
    $targetTodoInput,
    $targetTodoCount,
    $targetTodoFilter
  } = params;
  let todos = params.todos || [];
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
    todos,
    toggleTodo: async id => {
      await api.toggleTodo(USERNAME, id);
      const nextTodos = await api.getTodos(USERNAME);
      this.setState(nextTodos, filter);
    },
    removeTodo: id => {
      todos.splice(id, 1);
      this.render();
    },
    filter,
    filterTodos
  });

  const todoInput = new TodoInput({
    $target: $targetTodoInput,
    onKeyEnter: async content => {
      const res = await api.postTodo(USERNAME, content);
      const nextTodos = await api.getTodos(USERNAME);
      this.setState(nextTodos, filter);
    }
  });

  const todoCount = new TodoCount({
    $target: $targetTodoCount,
    count : todos.length
  });

  const todoFilter = new TodoFilter({
    $target: $targetTodoFilter,
    changeFilter: nextFilter => {
      this.setState(todos, nextFilter);
    },
    filter
  });

  this.setState = (nextTodos, nextFilter) => {
    todos = nextTodos;
    filter = nextFilter;
    todoList.setState(todos, filter);
    todoCount.setState(filterTodos(todos, filter).length);
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
