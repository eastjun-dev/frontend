import TodoForm from "./TodoForm.js";
import TodoList from "./TodoList.js";
import TodoCount from "./TodoCount.js";

const TodoApp = class {
  constructor({ store, todoForm, todoList, todoCount }) {
    this.store = store;

    this.todoForm = new TodoForm({
      el: todoForm,
    });
    this.todoList = new TodoList({
      el: todoList,
      todoList: store.state.todoList,
    });

    this.todoCount = new TodoCount({
      el: todoCount,
      todoCount: store.state.todoList.length,
    });
    this.init();
  }
  init() {
    this.store.$_subscribe(this.handleUpdateTodo.bind(this));
  }
  handleUpdateTodo() {
    const { todoList } = this.store.state;
    console.log("updated", todoList);
    this.todoList.render(todoList);
    this.todoCount.render(todoList.length);
  }
};

export default TodoApp;
