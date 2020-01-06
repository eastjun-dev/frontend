import NextButton from "./NextButton.js";
import { myInfoTemplate } from "../utils/template.js";
import { onCheckNull } from "../utils/utils.js";

const modal = document.getElementById("modal");

export default function MyInfoModal(data) {
  this.setState = nextData => {
    data = nextData;
    render(data);
  };
}

const render = data => {
  modal.innerHTML = myInfoTemplate(data);
  showCheckbox();

  const inputs = document.querySelectorAll("input");
  Array.from(inputs).map(elem => {
    elem.addEventListener("change", e => {
      onCheckNull(e);
      if (e.target.id === "email" || e.target.id === "tel") {
        showCheckbox();
      }
    });
  });

  const nextButton = new NextButton(data);
  nextButton.setState(data);
};

const showCheckbox = () => {
  const checkbox = document.getElementById("checkboxLabel");
  const emailValue = document.getElementById("email").value;
  const telValue = document.getElementById("tel").value;

  emailValue !== "" || telValue !== ""
    ? checkbox.classList.remove("hide")
    : checkbox.classList.add("hide");
};
