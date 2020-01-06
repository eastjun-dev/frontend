import MyInfoModal from "./MyInfoModal.js";
import FamilyModal from "./FamilyModal.js";
import FinishModal from "./FinishModal.js";
import { getPage, getData } from "../store/store.js";
import { exceptionTemplate } from "../utils/template.js";
import { pageName } from "../utils/constants.js";

const modal = document.getElementById("modal");

let page;
let data;

export default function Modal(data) {
  this.setState = nextData => {
    detactChange();
    data = nextData;
    render(data);
  };
}

const render = data => {
  switch (page) {
    case pageName.MYINFO:
      const myInfoModal = new MyInfoModal(getData());
      myInfoModal.setState(getData());
      break;
    case pageName.FAMILY:
      const familyModal = new FamilyModal(getData());
      familyModal.setState(getData());
      break;
    case pageName.FINISH:
      const finishModal = new FinishModal(getData());
      finishModal.setState(getData());
      break;
    default:
      modal.innerHTML = exceptionTemplate;
      break;
  }
};

const detactChange = () => {
  page = getPage();
  data = getData();
};
