export const status = {
  COMPLETED: "completed",
  PROCEEDING: "proceeding",
  NEED_TODO: "needTodo"
};

export let todoListData = [
  { text: "AAAAA", status: status.COMPLETED, id: 1 },
  { text: "BBBBB", status: status.PROCEEDING, id: 2 },
  { text: "DDDDD", status: status.NEED_TODO, id: 3 }
];

export const setData = value => {
  todoListData = value;
  console.log("set data: ");
  console.log(todoListData);
};

export let todoIdCount = todoListData.length + 1; 

export const setTodoIdCount = value => {
  todoIdCount = value;
} 