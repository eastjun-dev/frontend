import App from './App.js'
import TodoList from './TodoList.js'
import TodoInput from './TodoInput.js'

import { data } from './dummyData.js'
;(function() {
  new App({
    todoList: new TodoList({
      $selector: document.querySelector('#todo-list'),
    }),
    todoInput: new TodoInput({
      $selector: document.querySelector('#new-todo-title'),
    }),
    data,
  })
})()
