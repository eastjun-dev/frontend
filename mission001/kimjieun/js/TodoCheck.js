export default class TodoCheck {
  constructor({ $selector }) {
    this.$selector = $selector
    this.init()
  }

  init() {
    this.$selector.addEventListener('click', (e) => {
      if (e.target.className === 'all selected') this.onTodoCheck('all')
      if (e.target.className === 'active') this.onTodoCheck('new')
      if (e.target.className === 'completed') this.onTodoCheck('completed')
    })
  }
}
