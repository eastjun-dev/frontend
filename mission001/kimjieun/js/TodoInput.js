export default class TodoList {
  constructor({ $selector }) {
    this.$selector = $selector
    this.init()
  }

  init() {
    this.$selector.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        const addData = {
          text: e.target.value,
          isStatus: '',
        }

        this.onAddTodo(addData)
      }
    })
  }
}
