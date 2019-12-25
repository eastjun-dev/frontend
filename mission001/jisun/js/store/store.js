import { getData, postData, deleteData } from '../api/api.js';

const username = 'jisun';

export let todoListData = [];

export async function fetchData() {
  const res = await getData(username);
  return await res.json();
};

export async function getTodoListData() {
  todoListData = await fetchData();
};

export async function setTodoData(data) {
  await postData(username, data);
  getTodoListData();
  console.log('추가후: ' + todoListData);
};

export async function deleteTodoData(id) {
  await deleteData(username, id);
  getTodoListData();
  console.log('삭제후: ' + todoListData);
}

export let todoIdCount = todoListData.length + 1; 

export const setTodoIdCount = value => {
  todoIdCount = value;
};