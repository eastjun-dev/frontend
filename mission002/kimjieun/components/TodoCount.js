export default class TodoCount {
  constructor({ $selector }) {
    this.$selector = $selector
  }

  createHtmlString = (data) => {
    return `총 <strong>${data.length}</strong> 개`
  }

  createTodoCount = (data) => {
    this.$selector.innerHTML = this.createHtmlString(data)
  }
}
