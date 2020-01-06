export default class Form {
  constructor() {
    this.init()
  }

  init = () => {
    document.querySelector('#phoneNumber').addEventListener('change', (e) => {
      console.log(e.target.value)
      this.onChangeFormData(e)
    })
  }
}
