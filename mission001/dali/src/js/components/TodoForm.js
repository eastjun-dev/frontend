import View from "./View.js";
import { todoFormTemplate } from "../template/index.js";

const TodoForm = class extends View {
  constructor({ el }) {
    super({
      el,
      template: todoFormTemplate,
    });
    this.init();
  }
  init() {
    this.$_bindEvents("submit", this.handleSubmit.bind(this));
  }
  handleSubmit(e) {
    e.preventDefault();
    const todoForm = e.target;
    const todoInputName = "new-todo";
    const todoText = todoForm[todoInputName].value.trim();
    if (!todoText) {
      return;
    }
    this.$_dispatch("ADD_TODO", todoText);
    todoForm.reset();
  }
};

export default TodoForm;
