import { todoFilterTemplate } from "./utils/templates.js";

export default function TodoFilter(params) {
  const { $target, changeFilter } = params;

  $target.addEventListener("click", e => {
    changeFilter(e.target.className);
  });

  this.render = () => {
    $target.innerHTML = todoFilterTemplate();
  };

  this.render();
}
