import { v4 as uuidv4 } from "uuid";

import actions from "./actions.js";
import Dep from "./Dep.js";

const initialState = {
  todoList: [
    {
      id: uuidv4(),
      todoText: "안녕",
      completed: false,
      editing: false,
    },
    {
      id: uuidv4(),
      todoText: "하세요",
      completed: true,
      editing: false,
    },
    {
      id: uuidv4(),
      todoText: "공부 좀 하세요",
      completed: false,
      editing: false,
    },
  ],
};

const Store = class extends Dep {
  constructor(state = initialState) {
    super();
    this.state = initialState;
  }
  setState({ state }) {
    this.state = state;
    this.$_notify();
  }
};
const store = new Store();

const dispatch = (type, payload) => {
  store.setState({
    state: actions(type, payload, store.state),
  });
};

export { store, dispatch };
