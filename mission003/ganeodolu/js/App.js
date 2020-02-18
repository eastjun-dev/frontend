import UserForm from "../form/UserForm.js"
import FamilyForm from "../form/FamilyForm.js"
import MyInfoForm from "../form/MyInfoForm.js"

export default function App(data) {
    this.dialog = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'))
    this.dialog.open()
    mdc.autoInit()
    this.data = data

    const $targetUserForm = document.querySelector('.user-primary-info-container')
    const $targetInput = document.querySelectorAll('.mdc-text-field input')
    const $targetPhone = document.getElementById('phone')
    const $targetEmail = document.getElementById('email')
    const $targetIntroduce = document.getElementById('introduce')

    const $targetAgreement = document.querySelector('.mdc-form-field')
    const $targetCheckBox = document.querySelector('.mdc-checkbox')

    const $targetCompleteButton1 = document.querySelector('.step1-complete-btn')
    const $targetCompleteButton2 = document.querySelector('.step2-complete-btn')
    const $targetCompleteButton3 = document.querySelector('.step3-complete-btn')

    const $targetTitle = document.getElementById('my-dialog-title')

    const $targetStep1 = document.getElementById('step1')
    const $targetStep2 = document.getElementById('step2')
    const $targetStep3 = document.getElementById('step3')

    const $targetAddFamilyFormData = document.querySelector('.user-family-forms-data')
    const $targetAddFamilyButton = document.getElementById('add-family-button')

    const $targetMyInfo = document.querySelector('#my-info-view-card')

    let $targetFamilyContainer = document.querySelectorAll('.flex-container div input')

    const userForm = new UserForm({
        $targetTitle,
        $targetUserForm,
        $targetInput,
        $targetPhone,
        $targetEmail,
        $targetIntroduce,
        $targetAgreement,
        $targetCheckBox,
        $targetCompleteButton1,
        $targetStep1,
        $targetStep2,
        data: this.data,
    })

    const familyForm = new FamilyForm({
        $targetTitle,
        $targetAddFamilyFormData,
        $targetAddFamilyButton,
        $targetFamilyContainer,
        $targetCompleteButton2,
        $targetStep2,
        $targetStep3,
        data: this.data,
    })

    const myInfoForm = new MyInfoForm({
        $targetTitle,
        $targetMyInfo,
        $targetCompleteButton3,
        $targetStep1,
        $targetStep3,
        dialog: this.dialog,
        data: this.data,
    })
}
