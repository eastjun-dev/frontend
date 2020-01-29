import {FORMNAME, TITLENAME} from './constant.js'

export default function UserForm({$targetTitle, $targetUserForm, $targetInput, $targetPhone, $targetEmail, $targetIntroduce, $targetAgreement, $targetCheckBox, $targetCompleteButton1, $targetStep1, $targetStep2, data}){
    this.data = data;

    let agreementCheck = false;

    $targetUserForm.addEventListener('change', (e) => {
        let eventName = e.target.name
        if (eventName === FORMNAME.EMAIL || eventName === FORMNAME.PHONE) {
            if ($targetPhone.value || $targetEmail.value && $targetAgreement.classList.contains('hidden')) {
                $targetAgreement.classList.remove('hidden')
            } else {
                $targetAgreement.classList.add('hidden')
            }
        }
        let count = 0;
        for (let inputIndex = 0; inputIndex < $targetInput.length; inputIndex++) {
            if ($targetInput[inputIndex].value) {
                count++
            }
        }
        if (count === 4 && $targetCompleteButton1.classList.contains('hidden') && agreementCheck) {
            $targetCompleteButton1.classList.remove('hidden')
        } else if (count !== 4 && !$targetCompleteButton1.classList.contains('hidden') && !agreementCheck) {
            $targetCompleteButton1.classList.add('hidden')
        }
    })

    $targetCheckBox.addEventListener('click', (e) => {
        agreementCheck = !agreementCheck
        if(!$targetCompleteButton1.classList.contains('hidden')){
            $targetCompleteButton1.classList.add('hidden')
        }
    })

    $targetCompleteButton1.addEventListener('click', (e) => {
        e.preventDefault()
        for (let inputIndex = 0; inputIndex < 3; inputIndex++) { // 인덱스가 3인 비밀번호제외
            data[$targetInput[inputIndex].name] = $targetInput[inputIndex].value
            if ($targetInput[inputIndex].value) {
                this.data[$targetInput[inputIndex].name] = $targetInput[inputIndex].value
            }
        }
        if (e.target.classList.contains('mdc-button__ripple') && agreementCheck) {
            $targetStep1.classList.add('hidden')
            $targetTitle.textContent = TITLENAME.STEP2
            $targetStep2.classList.remove('hidden')
            this.data['introduce'] = $targetIntroduce.value;
        }
    })

}