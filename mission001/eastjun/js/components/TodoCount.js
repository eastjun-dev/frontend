export default function TodoCount({ todoItems }) {
  this.$todoCount = document.querySelector('#total-count')
  this.todoItems = todoItems

  this.setState = (updatedData) => {
    this.todoItems = updatedData
    this.render()
  }

  this.render = () => {
    document.querySelector('#total-count .count').innerHTML = this.todoItems.length
    // const { totalCount, completedCount } = this.data
    // $target.innerHTML = `Total Count: ${totalCount} / Completed Count: ${completedCount}`
  }

  this.render()
}
