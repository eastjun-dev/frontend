export default class TodoList {
  constructor({ $selector, onAddData }) {
    this.$selector = $selector
    this.onAddData = onAddData
    this.init()
  }

  init() {
    this.$selector.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) {
        const addData = {
          text: e.target.value,
          isStatus: '',
        }

        this.onAddData(addData)
      }
    })
  }
}