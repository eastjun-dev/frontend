import validator from '../utils/validator.js'
import { familyFormField } from '../utils/constants.js'
import Family from './Family.js'
import { myInfoViewTemplate, familyViewTemplate } from '../utils/templates.js'

export default function Form({ mdcInit, user }) {
  this.isAgreement = false
  this.dialog = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'))

  const $formTitle = document.querySelector('#my-dialog-title')

  const addFamilyFieldTemplate = (event) => {
    event.preventDefault()
    const family = new Family()
    user.addFamily(family)
    const lastIndex = user.family.length - 1
    const $familyForm = document.querySelector('.user-family-forms')
    $familyForm.insertAdjacentHTML('beforeend', family.render(lastIndex))
    mdcInit()
  }

  const isFilledForm = () => {
    const $step1CompleteButton = document.querySelector('.step1-complete-btn')

    if (this.isAgreement && user.isBasicInfoNotEmpty()) {
      $step1CompleteButton.classList.remove('hidden')
      $step1CompleteButton.addEventListener('click', activeStep2)
      return
    }
    $step1CompleteButton.classList.add('hidden')
  }

  const step1 = () => {
    const $step1TabClassList = document.querySelector('#step1').classList
    const $bullet1ClassList = document.querySelector('.bullet1').classList
    const $agreementClassList = document.querySelector('.privacy-policy-agree-container').classList

    const active = () => {
      $step1TabClassList.remove('hidden')
      $bullet1ClassList.add('bullet-active')
    }

    const inActive = () => {
      $step1TabClassList.add('hidden')
      $bullet1ClassList.remove('bullet-active')
    }

    const togglePrivacyCheckbox = (value) => {
      validator.isEmptyString(value) ? $agreementClassList.add('hidden') : $agreementClassList.remove('hidden')
    }

    return {
      active,
      inActive,
      togglePrivacyCheckbox
    }
  }

  const step2 = () => {
    const $step2TabClassList = document.querySelector('#step2').classList
    const $bullet2ClassList = document.querySelector('.bullet2').classList

    const active = () => {
      $step2TabClassList.remove('hidden')
      $bullet2ClassList.add('bullet-active')
    }

    const inActive = () => {
      $step2TabClassList.add('hidden')
      $bullet2ClassList.remove('bullet-active')
    }

    return {
      active,
      inActive
    }
  }

  const step3 = () => {
    const $step3TabClassList = document.querySelector('#step3').classList
    const $bullet3ClassList = document.querySelector('.bullet3').classList

    const active = () => {
      $step3TabClassList.remove('hidden')
      $bullet3ClassList.add('bullet-active')
    }

    const inActive = () => {
      $step3TabClassList.add('hidden')
      $bullet3ClassList.remove('bullet-active')
    }

    const renderViewCard = () => {
      document.querySelector('#my-info-view-card').innerHTML = myInfoViewTemplate(user)
      const myFamilyInfoTemplate = user.family.map((member) => familyViewTemplate(member)).join('')
      document.querySelector('.my-family-list-container').innerHTML = myFamilyInfoTemplate
      const $myInfoEditButton = document.querySelector('#my-info-edit-button')
      $myInfoEditButton.addEventListener('click', showEditDialog)
    }

    const showEditDialog = () => {
      activeStep1()
      this.dialog.open()
    }

    return {
      active,
      inActive,
      renderViewCard
    }
  }

  const activeStep1 = () => {
    step3().inActive()
    step2().inActive()
    step1().active()
  }

  const activeStep2 = (event) => {
    event.preventDefault()
    step1().inActive()
    step2().active()
    $formTitle.innerText = '가족 구성원 입력'
  }

  const activeStep3 = (event) => {
    event.preventDefault()
    step2().inActive()
    step3().active()
    step3().renderViewCard()
    $formTitle.innerText = '업데이트 완료'
  }

  this.update = {
    name: (event) => {
      user.update.name(event.target.value)
      isFilledForm()
    },
    phone: (event) => {
      const phone = event.target.value
      user.update.phone(event.target.value)
      step1().togglePrivacyCheckbox(phone)
      isFilledForm()
    },
    email: (event) => {
      const email = event.target.value
      user.update.email(email)
      step1().togglePrivacyCheckbox(email)
      isFilledForm()
    },
    password: (event) => {
      user.update.password(event.target.value)
      isFilledForm()
    },
    introduce: (event) => {
      user.update.introduce(event.target.value)
      isFilledForm()
    },
    agreement: (event) => {
      this.isAgreement = event.target.checked
      isFilledForm()
    },
    family: (event) => {
      const index = event.target.closest('.user-family-form-fields').dataset.index
      const inputName = event.target.name
      const value = event.target.value

      switch (inputName) {
        case familyFormField.NAME:
          user.update.family.name(index, value)
          break
        case familyFormField.RELATIONS:
          user.update.family.relations(index, value)
          break
        default:
          break
      }
    }
  }

  this.initEventListener = () => {
    document.querySelector('#name').addEventListener('keyup', this.update.name)
    document.querySelector('#phone').addEventListener('keyup', this.update.phone)
    document.querySelector('#email').addEventListener('keyup', this.update.email)
    document.querySelector('#password').addEventListener('keyup', this.update.password)
    document.querySelector('#introduce').addEventListener('keyup', this.update.introduce)
    document.querySelector('#agreement').addEventListener('click', this.update.agreement)
    document.querySelector('#add-family-button').addEventListener('click', addFamilyFieldTemplate)
    document.querySelector('.user-family-forms').addEventListener('keyup', this.update.family)
    document.querySelector('form.signup').addEventListener('submit', activeStep3)
  }

  this.init = () => {
    this.dialog.open()
    this.initEventListener()
  }

  this.init()
}
