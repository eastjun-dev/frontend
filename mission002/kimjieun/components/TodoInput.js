export default function TodoInput({ onKeyDown }) {
  document.querySelector('#new-todo-title').addEventListener('keydown', (e) => {
    onKeyDown(e)
  })
}
