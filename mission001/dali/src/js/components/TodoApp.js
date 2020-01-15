import TodoForm from './TodoForm.js';
import TodoList from './TodoList.js';

const TodoApp = class {
  constructor({
    store,
    todoForm,
    todoList,
  }){
    this.store = store;

    this.todoForm = new TodoForm({
      el: todoForm
    })
    this.todoList = new TodoList({
      el: todoList,
      todoList: store.state.todoList
    })
    this.init()
  }
  init(){
    this.store.subscribe(this.handleUpdateTodo.bind(this))
  }
  handleUpdateTodo(){
    const { todoList } = this.store.state;
    this.todoList.setState(todoList)
  } 
}

export default TodoApp;
