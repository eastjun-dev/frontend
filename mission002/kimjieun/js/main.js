import App from './App.js'

document.addEventListener('DOMContentLoaded', () => {
  try {
    new App()
  } catch (error) {
    new Error(error)
  }
})
