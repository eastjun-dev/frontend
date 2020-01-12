export default function Form({ userData }) {
  console.log(userData)
  
  this.init = () => {
    console.log('dd', this.userData)
    document.querySelector('#phoneNumber').addEventListener('blur', (e) => {
      this.onChangeFormData('#phoneNumber', e)
      this.userData.update()
    })
  }
  
  this.init()

  this.onChangeFormData = (target, e) => {
    console.log(target, e)
  }
}
