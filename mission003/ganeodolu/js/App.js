import UserForm from "./UserForm.js"

export default function App(data) {
    this.dialog = new mdc.dialog.MDCDialog(document.querySelector('.mdc-dialog'))
    this.dialog.open()
    mdc.autoInit()
    this.data = data

    const $targetUserForm = document.querySelector('.user-primary-info-container')
    const $targetAgreement = document.querySelector('.mdc-form-field')
    const $targetPhone = document.getElementById('phone')
    const $targetEmail = document.getElementById('email')
    const $targetIntroduce = document.getElementById('introduce')
    const $targetInput = document.querySelectorAll('.mdc-text-field input')
    const $targetCompleteButton1 = document.querySelector('.step1-complete-btn')
    console.log($targetCompleteButton1)
    const $targetStep1 = document.getElementById('step1')
    const $targetStep2 = document.getElementById('step2')
    const $targetStep3 = document.getElementById('step3')
    console.log($targetStep1)
    console.log($targetStep2)
    console.log($targetStep3)
    const userForm = new UserForm({
        $target: $targetUserForm,
        data: this.data,
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
        for (let i = 0; i < $targetInput.length; i++) {
            if ($targetInput[i].value) {
                count++
            }
        }
        if (count === 4 && $targetCompleteButton1.classList.contains('hidden')) {
            $targetCompleteButton1.classList.remove('hidden')
        } else if (count !== 4 && !$targetCompleteButton1.classList.contains('hidden')) {
            $targetCompleteButton1.classList.add('hidden')
        }
    })

    const $targetCheckBox = document.querySelector('.mdc-checkbox')
    // console.log($targetCheckBox)
    let agreementCheck

    $targetCheckBox.addEventListener('click', (e) => {
        agreementCheck = !agreementCheck
    })


    $targetCompleteButton1.addEventListener('click', (e) => {
        for (let i = 0; i < 3; i++) { // 비번제외
            console.log($targetInput[i].name)
            console.log($targetInput[i].value)
            // data.push($targetInput[i].name + ':',$targetInput[i].value)
            // data[$targetInput[i].name] = $targetInput[i].value

            if ($targetInput[i].value) {
                // console.log($targetInput[i].name)
                // data.push(`${$targetInput[i].name}:`)
                this.data[$targetInput[i].name] = $targetInput[i].value

            }
        }
        $targetStep1.classList.add('hidden')
        $targetStep2.classList.remove('hidden')
        // this.data['introduce'] = $targetIntroduce.value;
        // console.log(this.data)


        console.log($targetStep1)
        console.log($targetStep2)
        console.log($targetStep3)





    })


    // data.push({
    //     name: $targetInput[0].value,
    //     phone: $targetInput[1].value,
    //     email: $targetInput[2].value,
    //     password: $targetInput[3].value,
    //     introduce: $targetInput[4].value,
    //     agreement: agreementCheck,


    //     }

    // )






}
