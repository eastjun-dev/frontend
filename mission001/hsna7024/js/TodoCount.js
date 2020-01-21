import { todoCountTemplate } from "./utils/templates.js";

export default function TodoCount(params) {
  const { $target } = params;
  let data = params.data || [];

  if($target === null) {
    throw new Error(errorMessageMap.IS_NO_TARGET);
  }

  this.setState = nextData => {
    data = nextData;
    this.render();
  };

  this.render = () => {
    $target.innerHTML = todoCountTemplate(data.length);
  };
}
