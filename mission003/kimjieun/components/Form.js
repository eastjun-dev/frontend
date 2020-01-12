export default class Form {
  constructor() {
    this.init()
  }

  init = () => {
    document.querySelector('#phoneNumber').addEventListener('blur', (e) => {
      this.onChangeFormData('#phoneNumber', e)
    })
  }

  onChangeFormData = (target, e) => {
    console.log(target, e)
  }
}
