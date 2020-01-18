import NextButton from "./NextButton.js";
import { familyTemplate, familyNodeTemplate } from "../utils/template.js";
import { onCheckNull } from "../utils/utils.js";
import { getFamilyNum, setFamilyNum } from "../store/store.js";

const modal = document.getElementById("modal");

export default function FamilyModal(data) {
  this.setState = nextData => {
    data = nextData;
    render(data);
  };
}

const render = data => {
  modal.innerHTML = familyTemplate(data);

  const inputs = document.querySelectorAll("input");
  Array.from(inputs).map(elem => {
    elem.addEventListener("change", onCheckNull);

  const btnAdd = document.getElementById("btnAdd");
  btnAdd.addEventListener("click", () => {
    addFamily();
  });

  const nextButton = new NextButton(data);
  nextButton.setState(data);
};

const addFamily = () => {
  const form = document.getElementById("familyForm");
  const familyNum = getFamilyNum();

  if (familyNum >= 5) {
    alert("구성원을 더 이상 추가할 수 없습니다");
    return;
  }

  form.insertAdjacentHTML("beforeend", familyNodeTemplate("", familyNum));
  setFamilyNum(familyNum + 1);
};
