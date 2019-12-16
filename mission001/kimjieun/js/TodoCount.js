export default class TodoCount {
  constructor({ $selector }) {
    this.$selector = $selector
  }

  creatTodoCount = function(data) {
    const creatHtmlString = `총 <strong>${data.length}</strong> 개`
    this.$selector.innerHTML = creatHtmlString
  }
}
