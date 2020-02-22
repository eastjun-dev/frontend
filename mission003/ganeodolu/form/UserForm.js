import { FORMNAME, TITLENAME, INPUTCOUNT } from '../js/constant.js'

export default function UserForm({ $targetTitle, $targetUserForm, $targetInput, $targetPhone, $targetEmail, $targetIntroduce, $targetAgreement, $targetCheckBox, $targetCompleteButton, $targetStep1, $targetStep2, data }) {
    this.data = data;
    let agreementCheck = false;

    function areFilledEmailAndPhoneForm(name, $target){
        if (name === FORMNAME.EMAIL || name === FORMNAME.PHONE) {
            if ($targetPhone.value || $targetEmail.value) {
                $target.classList.remove('hidden')
            } else {
                $target.classList.add('hidden')
            }
        }
    }

    function areFilledAllForm(){
        let count = 0;
        for (let inputIndex = 0; inputIndex < $targetInput.length; inputIndex++) {
            if ($targetInput[inputIndex].value) {
                count++
            }
        }
        if (count === INPUTCOUNT.ALL && agreementCheck) {
            $targetCompleteButton.classList.remove('hidden')
        } else {
            $targetCompleteButton.classList.add('hidden')
        }
    }

    $targetUserForm.addEventListener('change', (e) => {
        let eventName = e.target.name
        areFilledEmailAndPhoneForm(eventName, $targetAgreement)
        areFilledAllForm()
    })

    $targetCheckBox.addEventListener('click', (e) => {
        agreementCheck = !agreementCheck
        areFilledAllForm()
    })

    $targetCompleteButton.addEventListener('click', (e) => {
        e.preventDefault()
        for (let inputIndex = 0; inputIndex < INPUTCOUNT.ALL_EXCEPT_PASSWORD; inputIndex++) {
            data[$targetInput[inputIndex].name] = $targetInput[inputIndex].value
            if ($targetInput[inputIndex].value) {
                this.data[$targetInput[inputIndex].name] = $targetInput[inputIndex].value
            }
        }
        if (e.target.classList.contains('done') && agreementCheck) {
            $targetStep1.classList.add('hidden')
            $targetTitle.textContent = TITLENAME.STEP2
            $targetStep2.classList.remove('hidden')
            this.data['introduce'] = $targetIntroduce.value
        }
    })
}
