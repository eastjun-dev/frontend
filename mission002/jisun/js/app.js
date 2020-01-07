import { todoListData } from "./store/store.js";
import { TodoList } from "./components/TodoList.js";
import { TodoInput } from "./components/TodoInput.js";
import { TodoCount } from "./components/TodoCount.js";
import { TodoTab } from "./components/TodoTab.js";
import { getTodoListData } from "./store/store.js";

getTodoListData(() => {
  const todoList = new TodoList(todoListData);
  todoList.setState(todoListData);

  const todoInput = new TodoInput(todoListData);
  todoInput.setState(todoListData);

  const todoCount = new TodoCount(todoListData);
  todoCount.setState(todoListData);

  const todoTab = new TodoTab(todoListData);
  todoTab.setState(todoListData);
});
