import { qs } from "../utils/dom.js";
import { dispatch } from "../store/store.js";

const View = class {
  constructor({ el, template, state }) {
    this.$el = qs(el);
    this.template = template;
    this.$_renderTemplate(state);
  }
  $_dispatch(actionType, payload) {
    dispatch(actionType, payload);
  }
  $_renderTemplate(state) {
    this.$el.innerHTML = this.template(state);
  }
  $_bindEvents(eventName, handler) {
    this.$el.addEventListener(eventName, handler);
  }
};

export default View;
