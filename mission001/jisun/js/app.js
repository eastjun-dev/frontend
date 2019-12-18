import { todoListData, todoIdCount } from './store/store.js';
import { TodoList } from './components/TodoList.js';
import { TodoInput } from './components/TodoInput.js';
import { TodoCount } from './components/TodoCount.js';
import { onSelectTab } from './util/utils.js';

// 초기값 랜더
TodoList(todoListData);
TodoInput(todoListData);
TodoCount(todoListData, todoCount);

// 선택한 텝에 따라 랜더링 다시하기 'ㅁ'
onSelectTab(todoListData);


