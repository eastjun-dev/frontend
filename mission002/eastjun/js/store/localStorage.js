const TODO_ITEM_KEY = 'todoItems'

const storage = (() => {
  const set = (todoItems) => {
    localStorage.setItem(TODO_ITEM_KEY, JSON.stringify(todoItems))
  }

  const get = () => JSON.parse(localStorage.getItem(TODO_ITEM_KEY))

  return {
    get,
    set,
  }
})()

export default storage
