import actions from './actions.js';
import Dep from './Dep.js';

const initialState = {
  todoList : [
    { 
      id: 1, 
      todoText: "안녕", 
      completed: false
    },
    {
      id: 1, 
      todoText: "하세요", 
      completed: true
    },
    {
      id: 2, 
      todoText: "공부 좀 하세요", 
      completed: false
    },
  ]
}


const Store = class extends Dep {
  constructor(state = initialState){
    super()
    this.state = initialState;

  }
  setState({state}){
    this.state = state;
    this.notify();
  }
  
}
const store = new Store();


const dispatch = (type, payload) => {
  store.setState({
    state: actions(type, payload, store.state)
  });  
}



export {
  store, 
  dispatch 
};
