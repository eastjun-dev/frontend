export default function TodoList(params) {
  const { $target } = params;
  let data = params.data || [];

  $target.addEventListener("click", e => {
    if (e.target.className === "toggle") {
      const { id } = e.toElement.parentElement.parentElement.dataset;
      console.log(e.toElement.checked);
      data[id].isCompleted = e.toElement.checked;
      this.render();
    }

    if (e.target.className === "destroy") {
      const { id } = e.toElement.parentElement.parentElement.dataset;
      data.splice(id, 1);
      this.render();
    }
  });

  $target.addEventListener("dblclick", e => {
    if (e.target.className === "label") {
      const { id } = e.toElement.parentElement.parentElement.dataset;
      data[id].onEdit = true;
      this.render();
    }
  });

  $target.addEventListener("keydown", e => {
    if (e.target.className === "edit") {
      const ENTER_KEY_CODE = 13;
      const ESC_KEY_CODE = 27;
      if (e.keyCode === ENTER_KEY_CODE) {
        const { id } = e.target.parentElement.dataset;
        data[id].content = e.target.value;
        data[id].onEdit = false;
        this.render();
      }
      if (e.keyCode === ESC_KEY_CODE) {
        const { id } = e.target.parentElement.dataset;
        data[id].onEdit = false;
        this.render();
      }
    }
  });

  this.setState = nextData => {
    data = nextData;
    this.render();
  };

  this.render = () => {
    $target.innerHTML = data
      .map((todo, index) => {
        const contentHtmlString = `<div class="view">
        <input class="toggle" type="checkbox" ${
          todo.isCompleted ? "checked" : ""
        }>
        <label class="label">${todo.content}</label>
        <button class="destroy"></button></div>
        <input class="edit" value="${todo.content}">`;
        const completedClassName = todo.isCompleted
          ? `class = "completed"`
          : "";
        const editingClassName = todo.onEdit ? `class = "editing"` : "";

        return `<li ${completedClassName} ${editingClassName} data-id="${index}">${contentHtmlString}</li>`;
      })
      .join("");
  };

  this.render();
}
