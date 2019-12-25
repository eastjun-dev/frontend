import { onSelectTab } from "../util/utils.js";

const tab = document.getElementById("tab");

export function TodoTab(data) {
  this.setState = nextData => {
    data = nextData;
    render(data);
  };
}

const render = data => {
  tab.addEventListener("click", () => {
    onSelectTab(data);
  });
};
