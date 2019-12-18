const todoCount = document.getElementById("todoCount");

export function TodoCount (data) {
  renderCount(data, todoCount);
}

export const renderCount = (data, selector) => {
  selector.innerHTML = `총 <strong>${data.length}</strong> 개`;
}