const checkInput = id => {
  const input = document.getElementById(id);
  const value = document.getElementById(id).nodeValue;

  if (value === "") {
    input.classList.remove("has-value");
  }

  if (value !== "") {
    input.classList.add("has-value");
  }
};

checkInput("inputName");
