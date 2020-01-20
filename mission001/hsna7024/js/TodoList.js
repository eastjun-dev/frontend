export default function TodoList(params) {
  const { $target } = params;
  let data = params.data || [];

  $target.addEventListener("click", e => {
    if (e.target.className === "toggle") {
      const { id } = e.toElement.parentElement.parentElement.dataset;
      data[id].isCompleted = e.toElement.checked;
      this.render();
    }

    if (e.target.className === "destroy") {
      const { id } = e.toElement.parentElement.parentElement.dataset;
      data.splice(id, 1);
      this.render();
    }
  });

  this.setState = nextData => {
    data = nextData;
    this.render();
  };

  this.render = () => {
    $target.innerHTML = data
      .map((todo, index) => {
        return todo.isCompleted
          ? `<li class="completed" data-id="${index}">
        <div class="view">
         <input class="toggle" type="checkbox" checked="true">
         <label class="label">${todo.content}</label>
         <button class="destroy"></button>
       </div></li>`
          : `<li data-id="${index}">
        <div class="view">
         <input class="toggle" type="checkbox">
         <label class="label">${todo.content}</label>
         <button class="destroy"></button>
       </div></li>`;
      })
      .join("");
  };

  this.render();
}
