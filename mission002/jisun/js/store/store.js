import { getData, postData, deleteData, putData } from '../api/api.js';

const username = 'jisun';

export let todoListData = [];

export async function fetchData() {
  const res = await getData(username);
  return await res.json();
};

export async function getTodoListData(callback) {
  todoListData = await fetchData();
  callback();
};

export async function setTodoData(data, callback) {
  await postData(username, data);
  getTodoListData(() => {
    callback();
  });
};

export async function deleteTodoData(id, callback) {
  await deleteData(username, id);
  getTodoListData(() => {
    callback();
  });
}

export async function editTodoData(id, callback) {
  await putData(username, id);
  getTodoListData(() => {
    callback();
  });
}
