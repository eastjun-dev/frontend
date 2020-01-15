import View from './View.js';
import { todoListTemplate } from '../template/index.js';
import { qsAll } from '../utils/dom.js';


const TodoList = class extends View {
  constructor({el, todoList = []}){
    super({
      el, 
      template: todoListTemplate,
      state: todoList
    });
    this.init()
  }
  init(){
    this.$_bindEvents('dblclick', this.handleDBClicked.bind(this))
    this.$_bindEvents('focusout', this.handleFocusOut.bind(this))
  }
  handleDBClicked({target}){
    console.log('edit start');
    const $editElList = [...qsAll('.editing')];
    console.log($editElList)
    if($editElList.length){
      $editElList.forEach(el => {
        el.classList.remove('editing')
      })
    }
  
    const $todoItem = target.closest('li')
    $todoItem.classList.add('editing');
  } 
  handleFocusOut({target}){
    console.log('focus out');
    const $todoItem = target.closest('li')
    $todoItem.classList.remove('editing'); 
  }
  setState(state){
    this.$_renderTemplate(state)
  }
}

export default TodoList;