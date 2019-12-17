export default class TodoCount {
  constructor({ $selector }) {
    this.$selector = $selector
  }

  creatHtmlString(data) {
    return `총 <strong>${data.length}</strong> 개`
  }

  creatTodoCount = function(data) {
    this.$selector.innerHTML = this.creatHtmlString(data)
  }
}
