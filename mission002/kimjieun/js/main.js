import App from './App.js'

document.addEventListener('DOMContentLoaded', () => {
  const target = document.querySelector('#app')

  try {
    new App(target)
  } catch (error) {
    new Error(target, error)
  }
})
