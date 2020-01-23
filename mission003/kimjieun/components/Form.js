import { policyTemplate } from '../js/templates.js'

export default function Form({ userData }) {
  this.init = () => {
    document.querySelector('#phoneNumber').addEventListener('blur', (e) => {
      this.onChangeFormData('phoneNumber', e)
    })
    document.querySelector('#name').addEventListener('blur', (e) => {
      this.onChangeFormData('name', e)
    })
    document.querySelector('#email').addEventListener('blur', (e) => {
      this.onChangeFormData('email', e)
    })
    document.querySelector('#password').addEventListener('blur', (e) => {
      this.onChangeFormData('password', e)
    })
    document.querySelector('#myIntroduce').addEventListener('blur', (e) => {
      this.onChangeFormData('myIntroduce', e)
    })
  }
  
  this.init()
  
  this.onChangeFormData = (target, e) => {
    switch (target) {
      case 'phoneNumber':
        userData.phoneNumber = e.target.value
        getTempleteWithPolicy()
        break
      case 'name':
        userData.name = e.target.value
        break
      case 'email':
        userData.email = e.target.value
        getTempleteWithPolicy()
        break
      case 'password':
        userData.password = e.target.value
        break
      case 'myIntroduce':
        userData.introduceData = e.target.value
        break
      default:
        return ''
    }

    this.setState(userData)
  }

  this.getTempleteWithPolicy = () => {
    console.log('getTempleteWithPolicy')
    document.querySelector('.policy').innerHTML = policyTemplate
  }

  this.setState = (data) => {
    console.log(data)
  }
}
