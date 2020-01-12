import Form from '../components/Form.js'
import { basicInfoTemplate } from '../js/templates.js'
import { STEP1_MODAL_TITLE } from '../utils/constants.js'

export default class App {
  constructor() {
    this.init()
  }

  init = () => {
    document.querySelector('.modal-title').innerHTML = STEP1_MODAL_TITLE
    document.querySelector('.step-form').innerHTML = basicInfoTemplate
    this.form = new Form()
  }
}

new App()
