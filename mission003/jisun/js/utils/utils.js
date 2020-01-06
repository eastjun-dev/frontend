export const onCheckNull = e => {
  const input = e.target;
  const value = e.target.value;

  if (value === "") {
    input.classList.remove("has-value");
  } else {
    input.classList.add("has-value");
  }
};
