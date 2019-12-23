import { todoListData, todoIdCount } from "./store/store.js";
import { TodoList } from "./components/TodoList.js";
import { TodoInput } from "./components/TodoInput.js";
import { TodoCount } from "./components/TodoCount.js";
import { onSelectTab } from "./util/utils.js";

// 초기값 랜더
const todoList = new TodoList(todoListData);
todoList.setState(todoListData);

const todoInput = new TodoInput(todoListData);
todoInput.setState(todoListData);

const todoCount = new TodoCount(todoListData);
todoCount.setState(todoListData);

// 선택한 텝에 따라 랜더링 다시하기
onSelectTab(todoListData);
