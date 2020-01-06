import Form from '../components/Form.js'

export default class App {
  constructor() {
    this.init()
  }

  init = () => {
    this.form = new Form()
    this.form.onChangeFormData = this.onChangeFormData.bind(this)
  }

  onChangeFormData = (e) => {
    console.log(e.target.value)
  }
}

new App()
