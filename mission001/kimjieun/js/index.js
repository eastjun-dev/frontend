import TodoList from './TodoList.js'
import App from './App.js'

import { data } from './dummyData.js'

(function() {
  new App({
    todoList: new TodoList({
      $selector: document.querySelector("#todo-list")
    }),
    data
  })
})()