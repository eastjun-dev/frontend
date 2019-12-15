import { data } from './dummyData.js'
import TodoList from './TodoList.js'
// 초기에는 카운트 나오지만, 할일 추가후 카운트도 변경되어야 한다.
// const $liCount = `총<strong> ${document.querySelector('#todo-list').childElementCount} </strong>개`
// document.querySelector('.todo-count').innerHTML = $liCount

// document.querySelector('#new-todo-title').addEventListener('keyup', (e) => {
//   const $todoList = document.querySelector('#todo-list')
//   const $li = document.createElement('li')
//   const htmlTemplate = `
//     <div class="view">
//       <input class="toggle" type="checkbox">
//       <label class="label">${e.target.value}</label>
//       <button class="destroy"></button>
//     </div>
//     <input class="edit" value="${e.target.value}">
//   `

//   if (e.keyCode === 13) {
//     $li.innerHTML = htmlTemplate
//     $todoList.appendChild($li)
//   }
// })

// data-index
// document.querySelector('.destroy').addEventListener('click', () => {
//   const $el = document.querySelector('.destroy').parentNode
//   $el.parentElement.remove()
// })

// data-index
// document.querySelector('.toggle').addEventListener('click', (e) => {
//   const $div = document.querySelector('.toggle').parentNode
//   $div.parentElement.setAttribute('class', 'completed')
// })

export default class App {
  constructor({ todoList, todoInput, data }) {
    this.todoList = todoList
    this.todoInput = todoInput
    this.data = data
    this.setState(this.data)

    this.render()
    this.init()
  }

  init() {
    this.todoInput.onAddTodo = this.addTodo.bind(this)
  }

  setState() {
    this.data = data
    this.render()
  }

  render() {
    this.todoList.render(this.data)
  }

  addTodo(data) {
    console.log(data)
  }
}
