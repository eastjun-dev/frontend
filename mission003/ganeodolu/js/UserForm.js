export default function UserForm({$targetTitle, $targetUserForm, $targetInput, $targetPhone, $targetEmail, $targetIntroduce, $targetAgreement, $targetCheckBox, $targetCompleteButton1, $targetStep1, $targetStep2, data}){
    this.data = data;

    let agreementCheck = false;

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
        for (let i = 0; i < $targetInput.length; i++) {
            if ($targetInput[i].value) {
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
        for (let i = 0; i < 3; i++) { // 인덱스가 3인 비밀번호제외
            data[$targetInput[i].name] = $targetInput[i].value
            if ($targetInput[i].value) {
                this.data[$targetInput[i].name] = $targetInput[i].value
            }
        }
        if (e.target.classList.contains('mdc-button__ripple') && agreementCheck) {
            $targetStep1.classList.add('hidden')
            $targetTitle.textContent = '가족 구성원 추가 2/3'
            $targetStep2.classList.remove('hidden')
            this.data['introduce'] = $targetIntroduce.value;
        }
    })

}