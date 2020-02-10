import SubmitButton from "./SubmitButton.js";
import { finishTemplate } from "../utils/template.js";

const modal = document.getElementById("modal");

export default function FinishModal(data) {
  this.setState = nextData => {
    data = nextData;
    render(data);
    console.log(data);
  };
}

const render = data => {
  modal.innerHTML = finishTemplate(data);

  const submitButton = new SubmitButton(data);
  submitButton.setState(data);
};
