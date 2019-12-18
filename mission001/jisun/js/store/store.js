export let initData = [
  { text: "AAAAA", status: status.COMPLETED, id: 1 },
  { text: "BBBBB", status: status.PROCEEDING, id: 2 },
  { text: "DDDDD", status: status.NEED_TODO, id: 3 }
];

export const setData = newData => {
  initData = newData;
  console.log("set data: ");
  console.log(initData);
};
