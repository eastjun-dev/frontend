import Form from '../components/Form.js'
import UserData from '../components/UserData.js'
import { basicInfoTemplate } from '../js/templates.js'
import { STEP1_MODAL_TITLE } from '../utils/constants.js'

export default class App {
  constructor() {
    this.init()
    new Form({
      userData: new UserData()
    })
  }

  init = () => {
    document.querySelector('.modal-title').innerHTML = STEP1_MODAL_TITLE
    document.querySelector('.step-form').innerHTML = basicInfoTemplate
  }
}

new App()
