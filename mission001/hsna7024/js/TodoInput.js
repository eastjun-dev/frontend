import { keyMap, errorMessageMap } from "./utils/constants.js";

export default function TodoInput(params) {
  const { $target, onKeyEnter } = params;

  if ($target === null) {
    throw new Error(errorMessageMap.IS_NO_TARGET);
  }

  $target.addEventListener("keydown", e => {
    if (e.key === keyMap.ENTER && $target.value) {
      onKeyEnter($target.value);
      $target.value = "";
    }
  });
}
