import { keyCodeMap } from "./utils/constants.js";

export default function TodoInput(params) {
  const { $target, onKeyEnter } = params;

  $target.addEventListener("keydown", e => {
    if (e.keyCode === keyCodeMap.ENTER) {
      onKeyEnter($target.value);
      $target.value = "";
    }
  });
}
