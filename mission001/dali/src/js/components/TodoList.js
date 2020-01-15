import View from './View.js';
import { todoListTemplate } from '../template/index.js';
import { qs, getClosetLI } from '../utils/dom.js';



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
   
    this.$_bindEvents('click', this.handleClicked.bind(this))
    window.addEventListener('keydown', this.handleKeyDown.bind(this))
  }
  handleDBClicked({target}){
    const $todoListItemEl = getClosetLI(target);
    const id = $todoListItemEl.dataset.id;
    this.setFocusOutEvent(qs('input', $todoListItemEl));
    this.$_dispatch('EDIT_TODO', Number(id));

  }
  setFocusOutEvent(inputEl){
    inputEl.addEventListener('focusout', this.handleFocusOut.bind(this))
  }
  handleFocusOut({target}){
    // TODO focusout event 감지해서 edit 모드 나가게 하기 
    console.log('focus out');
    this.$_dispatch('OUT_EDITMODE')
  }
  handleClicked({target}){
    const id = getClosetLI(target).dataset.id
    // 의문점 switch case return 안하니까 둘다 탄다 ?? 왜 ?
    switch(target.className){
      case 'toggle': {
        return this.handleUpdateCompleted(Number(id))
      }
      case 'destroy': {
        return this.handleDelete(Number(id))
      }
    }
  }
  handleUpdateCompleted(id){
    this.$_dispatch('TOGGLE_TODO', id) 
  }
  handleDelete(id){
    this.$_dispatch('DELETE_TODO', id) 
  }
  handleKeyDown({key, target}){
    switch(key){
      case 'Enter': {
        if(target.nodeName !== 'INPUT') return;
        const id = getClosetLI(target).dataset.id
        return this.handleUpdateTodoText(Number(id), target.value)
      }
      case 'Escape': {
        return this.handleESCKeyDown();
      }
    }
  }
  handleUpdateTodoText(id, value){
    this.$_dispatch('UPDATE_TODO', {id, value})
  }
  handleESCKeyDown(){
    this.$_dispatch('OUT_EDITMODE')
  }
  setState(state){
    this.$_renderTemplate(state)
  }
}

export default TodoList;
