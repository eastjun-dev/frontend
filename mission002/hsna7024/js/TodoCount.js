import { todoCountTemplate } from "./utils/templates.js";
import {errorMessageMap} from "./utils/constants.js";

export default function TodoCount(params) {
  const { $target } = params;
  let count = params.count || 0;

  if ($target === null) {
    throw new Error(errorMessageMap.IS_NO_TARGET);
  }

  this.setState = nextCount => {
    count = nextCount;
    this.render();
  };

  this.render = () => {
    $target.innerHTML = todoCountTemplate(count);
  };
}
