export default function TodoList(params) {
  const { $target } = params;
  let data = params.data || [];

  this.setState = nextData => {
    data = nextData;
    this.render();
  };

  this.render = () => {
    $target.innerHTML = data
      .map((todo, index) => {
        return `<li data-id="${index}">
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
