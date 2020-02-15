import View from "./View.js";
import { todoCountTemplate } from "../template/index.js";

const TodoCount = class extends View {
  constructor({ el, todoCount }) {
    super({
      el,
      template: todoCountTemplate,
      state: todoCount,
    });
  }
  setState(state) {
    this.$_renderTemplate(state);
  }
};

export default TodoCount;
