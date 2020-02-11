import TodoList from "./TodoList.js";
import TodoInput from "./TodoInput.js";
import TodoCount from "./TodoCount.js";
import TodoFilter from "./TodoFilter.js";
import { filterMap, USERNAME } from "./utils/constants.js";
import { api } from "./utils/api.js";
import { saveTodos } from "./utils/localStorage.js";

export default function App(params) {
  const {
    $targetTodoList,
    $targetTodoInput,
    $targetTodoCount,
    $targetTodoFilter
  } = params;
  let todos = params.todos || [];
  let filter = params.filter || filterMap.ALL;

  const refreshTodos = async () => {
    const nextTodos = await api.getTodos(USERNAME);
    saveTodos(nextTodos);
    this.setState(nextTodos, filter);
  };

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
      refreshTodos();
    },
    removeTodo: async id => {
      await api.removeTodo(USERNAME, id);
      refreshTodos();
    },
    onKeyEnter: async todo => {
      // TODO : 변경 된 todo로 갱신하기
      // api.updateTodo(USERNAME, todo);
      // refreshTodos();
    },
    filter,
    filterTodos
  });

  const todoInput = new TodoInput({
    $target: $targetTodoInput,
    onKeyEnter: async content => {
      await api.postTodo(USERNAME, content);
      refreshTodos();
    }
  });

  const todoCount = new TodoCount({
    $target: $targetTodoCount,
    count: todos.length
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
