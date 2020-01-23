import UserForm from "./UserForm.js"

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

    const $targetCompleteButton1 = document.querySelector('.step1-complete-btn')
    const $targetCompleteButton2 = document.querySelector('.step2-complete-btn')
    const $targetCompleteButton3 = document.querySelector('.step3-complete-btn')

    const $targetTitle = document.getElementById('my-dialog-title')

    const $targetStep1 = document.getElementById('step1')
    const $targetStep2 = document.getElementById('step2')
    const $targetStep3 = document.getElementById('step3')

    const $targetAddFamilyFormData = document.querySelector('.user-family-forms-data')
    const $targetAddFamilyButton = document.getElementById('add-family-button')

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
    let agreementCheck = false

    $targetCheckBox.addEventListener('click', (e) => {
        agreementCheck = !agreementCheck
        console.log(agreementCheck)
    })


    $targetCompleteButton1.addEventListener('click', (e) => {
        e.preventDefault()
        for (let i = 0; i < 3; i++) { // 비번제외
            console.log($targetInput[i].name)
            console.log($targetInput[i].value)
            // data.push($targetInput[i].name + ':',$targetInput[i].value)
            data[$targetInput[i].name] = $targetInput[i].value

            if ($targetInput[i].value) {
                // console.log($targetInput[i].name)
                // data.push(`${$targetInput[i].name}:`)
                this.data[$targetInput[i].name] = $targetInput[i].value

            }
        }
        if (e.target.classList.contains('mdc-button__ripple') && agreementCheck) {
            $targetStep1.classList.add('hidden')
            $targetTitle.textContent = '가족 구성원 추가 2/3'

            $targetStep2.classList.remove('hidden')
            this.data['introduce'] = $targetIntroduce.value;
            console.log(this.data)
        }

    })
    let renderedHTMLFamily = ``
    // this.data = {}
    this.data['Family'] = { name: [], relation: [] }
    let $targetFamilyContainer = document.querySelectorAll('.flex-container div input')
    // const $targetFamilyContainer = document.querySelector('.flex-container')
    // console.log($targetFamilyContainer)
    $targetAddFamilyButton.addEventListener('click', (e) => {
        $targetFamilyContainer = document.querySelectorAll('.flex-container div input')
        const FamilyContainerLength = $targetFamilyContainer.length
        console.log($targetFamilyContainer)
        console.log(FamilyContainerLength)

        e.preventDefault()

        if ($targetFamilyContainer[0].value && $targetFamilyContainer[1].value) {
            renderedHTMLFamily +=
                `<div data-index class="flex-container user-family-form-fields">
            <div class="mdc-text-field mrg-right-10" data-mdc-auto-init="MDCTextField">
                <input type="text" class="mdc-text-field__input" type="text" name="family-name-${FamilyContainerLength / 2}" value=${$targetFamilyContainer[0].value}>
                <label for="family-name-" class="mdc-floating-label">이름</label>
                <div class="mdc-line-ripple"></div>
            </div>
            <div class="mdc-text-field" data-mdc-auto-init="MDCTextField">
                <input type="text" class="mdc-text-field__input" type="text" name="family-relations--${FamilyContainerLength / 2}" value=${$targetFamilyContainer[1].value}>
                <label for="family-relations-" class="mdc-floating-label">관계</label>
                <div class="mdc-line-ripple"></div>
            </div>
            </div>
            `
            this.data['Family']['name'].push($targetFamilyContainer[0].value)
            this.data['Family']['relation'].push($targetFamilyContainer[1].value)

            console.log(this.data)
            $targetFamilyContainer[0].value = ''
            $targetFamilyContainer[1].value = ''
            $targetFamilyContainer[0].focus()
        }
        $targetAddFamilyFormData.innerHTML = renderedHTMLFamily

        mdc.autoInit()

    })


    $targetCompleteButton2.addEventListener('click', (e) => {
        e.preventDefault()
        $targetStep2.classList.add('hidden')
        console.log($targetTitle)
        if ($targetFamilyContainer) {
            console.log($targetFamilyContainer)
        }

        $targetTitle.textContent = '입력완료 3/3'

        $targetStep3.classList.remove('hidden')
    })

    $targetCompleteButton3.addEventListener('click', (e) => {
        e.preventDefault()
        $targetStep3.classList.add('hidden')


    })

}
