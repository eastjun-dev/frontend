import { todoFilterTemplate } from "./utils/templates.js";

export default function TodoFilter(params) {
  const { $target, changeFilter } = params;
  let filter = params.filter || "";

  if($target === null) {
    throw new Error(errorMessageMap.IS_NO_TARGET);
  }

  $target.addEventListener("click", e => {
    changeFilter(e.target.className);
  });

  this.setState = nextFilter => {
    filter = nextFilter;
    this.render();
  };

  this.render = () => {
    $target.innerHTML = todoFilterTemplate(filter);
  };

  this.render();
}
