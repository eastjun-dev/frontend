import validator from '../utils/validator.js'

export default function Form() {
  const $email = document.querySelector('#email')
  const $phone = document.querySelector('#phone')
  const $name = document.querySelector('#name')
  const $password = document.querySelector('#password')
  const $introduce = document.querySelector('#introduce')
  const $agreement = document.querySelector('#agreement')

  this.formFields = {
    name: '',
    email: '',
    phone: '',
    password: '',
    introduce: '',
    agreement: ''
  }

  const initEventListener = () => {
    $name.addEventListener('keyup', (event) => {
      this.formFields.name = event.target.value
      isFilledForm()
    })

    $password.addEventListener('keyup', (event) => {
      this.formFields.password = event.target.value
      isFilledForm()
    })

    $introduce.addEventListener('keyup', (event) => {
      this.formFields.introduce = event.target.value
      isFilledForm()
    })

    $email.addEventListener('keyup', (event) => {
      this.formFields.email = event.target.value
      togglePrivacyCheckbox(this.formFields.email)
      isFilledForm()
    })

    $phone.addEventListener('keyup', (event) => {
      this.formFields.phone = event.target.value
      togglePrivacyCheckbox(this.formFields.phone)
      isFilledForm()
    })

    $agreement.addEventListener('click', (event) => {
      this.formFields.agreement = event.target.checked
      isFilledForm()
    })

  }

  const isFilledForm = () => {
    if (this.formFields.agreement &&
        validator.isNotEmptyString(this.formFields.name) &&
        validator.isNotEmptyString(this.formFields.email) &&
        validator.isNotEmptyString(this.formFields.phone) &&
        validator.isNotEmptyString(this.formFields.password) &&
        validator.isNotEmptyString(this.formFields.introduce)
    ) {
      const $step1CompleteButton = document.querySelector('.step1-complete-btn')
      $step1CompleteButton.classList.remove('hidden')
    }
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
