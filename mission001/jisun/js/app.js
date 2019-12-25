import { todoListData, todoIdCount } from "./store/store.js";
import { TodoList } from "./components/TodoList.js";
import { TodoInput } from "./components/TodoInput.js";
import { TodoCount } from "./components/TodoCount.js";
import { onSelectTab } from "./util/utils.js";
import { getTodoListData } from './store/store.js';

// 데이터 로드
getTodoListData();

setTimeout(() => {
// 초기값 랜더
const todoList = new TodoList(todoListData);
todoList.setState(todoListData);

const todoInput = new TodoInput(todoListData);
todoInput.setState(todoListData);

const todoCount = new TodoCount(todoListData);
todoCount.setState(todoListData);
}, 2000)

// 선택한 텝에 따라 랜더링 다시하기
onSelectTab(todoListData);
