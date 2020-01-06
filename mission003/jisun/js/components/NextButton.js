import { getPage, setPage, setData } from "../store/store.js";
import { pageName, inputType } from "../utils/constants.js";
import Modal from "./Modal.js";

let inputData = {};

export default function NextButton(data) {
  this.setState = nextData => {
    const button = document.getElementById("btnNext");
    data = nextData;
    inputData = data;
    button.addEventListener("click", () => {
      onNext();
    });
  };
}

const onNext = () => {
  const inputs = document.querySelectorAll("input");
  const checkbox =
    getPage() === pageName.MYINFO
      ? document.getElementById("checkboxLabel").childNodes[1]
      : null;
  const currentPage = getPage();

  for (let i in inputs) {
    if (inputs[i].value === "") {
      alert("빈 값이 있습니다. 모든 input을 채워주세요.");
      return;
    }
  }

  if (checkbox && !checkbox.checked) {
    alert("개인정보보호방침에 동의해주세요");
    return;
  }

  Array.from(inputs).map(elem => {
    currentPage === pageName.MYINFO ? myInfoValid(elem) : familyValid(elem);
  });

  setData(inputData);

  switch (currentPage) {
    case pageName.MYINFO:
      setPage(pageName.FAMILY);
      break;
    case pageName.FAMILY:
      setPage(pageName.FINISH);
      break;
    default:
      break;
  }

  const modal = new Modal("");
  modal.setState("");
};

const myInfoValid = elem => {
  switch (elem.id) {
    case inputType.NAME:
      inputData.name = elem.value;
      break;
    case inputType.TEL:
      inputData.tel = elem.value;
      break;
    case inputType.EMAIL:
      inputData.email = elem.value;
      break;
    case inputType.PASSWORD:
      inputData.password = elem.value;
      break;
    case inputType.INTRODUCE:
      inputData.introduce = elem.value;
    default:
      break;
  }
};

const familyValid = elem => {
  inputData.family.push(elem.value);
};
