import App from './App.js'
import TodoList from '../components/TodoList.js'
import TodoInput from '../components/TodoInput.js'
import TodoCount from '../components/TodoCount.js'
import TodoCheck from '../components/TodoCheck.js'

new App({
  todoList: new TodoList({
    $selector: document.querySelector('#todo-list'),
  }),
  todoInput: new TodoInput({
    $selector: document.querySelector('#new-todo-title'),
  }),
  todoCount: new TodoCount({
    $selector: document.querySelector('.todo-count'),
  }),
  todoCheck: new TodoCheck({
    $selector: document.querySelector('.filters'),
  })
})
