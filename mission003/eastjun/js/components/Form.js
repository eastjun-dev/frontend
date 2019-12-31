import validator from '../utils/validator.js'

export default function Form() {
  const $email = document.querySelector('#email')
  const $phone = document.querySelector('#phone')

  this.name = ''
  this.email = ''
  this.phone = ''
  this.password = ''
  this.introduce = ''
  this.agreement = ''


  const initEventListener = () => {
    $email.addEventListener('keyup', (event) => {
      const value = event.target.value
      this.email = value
      togglePrivacyCheckbox(this.email)
    })

    $phone.addEventListener('keyup', (event) => {
      const value = event.target.value
      this.phone = value
      togglePrivacyCheckbox(this.phone)
    })
  }

  const togglePrivacyCheckbox = (value) => {
    const $agreementContainer = document.querySelector('.privacy-policy-agree-container')

    if (validator.isNotEmptyString(event.target.value)) {
      $agreementContainer.classList.remove('hidden')
    }

    if (validator.isEmptyString(value) && validator.isEmptyString(value)) {
      $agreementContainer.classList.add('hidden')
    }
  }

  initEventListener()

}
