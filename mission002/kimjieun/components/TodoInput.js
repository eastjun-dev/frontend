export default class TodoInput {
  constructor({ $selector }) {
    this.$selector = $selector

    this.init()
  }

  init() {
    this.$selector.addEventListener('keydown', (e) => {
      this.onKeyDown(e)
    })
  }
}
