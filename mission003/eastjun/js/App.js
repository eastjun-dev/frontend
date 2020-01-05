import Form from './components/Form.js'
import User from  './components/User.js'
function FormApp() {
  this.user = new User()
  this.mdcInit = () => mdc.autoInit()

  this.init = () => {
    new Form({
      mdcInit: this.mdcInit,
      user: this.user
    })
    this.mdcInit()
  }

  this.init()
}

new FormApp()
