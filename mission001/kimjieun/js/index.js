// import TodoList from './TodoList.js'
// import TodoInput from './TodoInput.js'
// import App from './App.js'

// import { data } from './dummyData.js'

// (function() {
//   new App({
//     todoList: new TodoList({
//       $selector: document.querySelector("#todo-list")
//     }),
//     todoInput: new TodoInput({
//       $selector: document.querySelector('#new-todo-title')
//     }),
//     data
//   })
// })()

import App from './App.js'

document.addEventListener('DOMContentLoaded', () => {
  try {
    new App()
  } catch (error) {
    new Error(error)
  }
})
