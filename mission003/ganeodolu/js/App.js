import UserForm from "./UserForm.js"

export default function App() {
    this.dialog = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'))
    this.dialog.open()
    mdc.autoInit()

    let data = [];
    const $targetUserForm = document.querySelector('.user-primary-info-container')
    const $targetAgreement = document.querySelector('.mdc-form-field')
    const $targetPhone = document.getElementById('phone')
    const $targetEmail = document.getElementById('email')
    const $targetInput = document.querySelectorAll('.mdc-text-field input')
    const $targetCompleteButton1 = document.querySelector('.step1-complete-btn')
    const userForm = new UserForm({
        $target: $targetUserForm,
        data: data,
    })


    $targetUserForm.addEventListener('change', (e) => {
        let eventName = e.target.name
        if (eventName === 'email' || eventName === 'phone') {
            if ($targetPhone.value || $targetEmail.value && $targetAgreement.classList.contains('hidden')) {
                $targetAgreement.classList.remove('hidden')
            } else {
                $targetAgreement.classList.add('hidden')
            }
        }
        let count = 0
        for(let i = 0; i < $targetInput.length; i++){
            if($targetInput[i].value){
                count++
            }
        }
        if(count === 4 && $targetCompleteButton1.classList.contains('hidden')){
            $targetCompleteButton1.classList.remove('hidden')
        } else if (!$targetCompleteButton1.classList.contains('hidden')) {
            $targetCompleteButton1.classList.add('hidden')
        }
    })
}