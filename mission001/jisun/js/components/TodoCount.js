const todoCount = document.getElementById("todoCount");

export function TodoCount(data) {
  this.setState = nextData => {
    data = nextData;
    render(data);
  };
}

const render = data => {
  todoCount.innerHTML = `총 <strong>${data.length}</strong> 개`;
};
