export default function TodoInput(params) {
  const { $target, onKeyEnter } = params;

  $target.addEventListener("keydown", e => {
    const ENTER_KEY_CODE = 13;

    if (e.keyCode === ENTER_KEY_CODE) {
      onKeyEnter($target.value);
      $target.value = "";
    }
  });
}
