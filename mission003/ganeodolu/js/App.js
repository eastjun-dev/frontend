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

    const $targetMyInfo = document.querySelector('#my-info-view-card')
    const userForm = new UserForm({
        $target: $targetUserForm,
        data: this.data,
    })

    const $targetCheckBox = document.querySelector('.mdc-checkbox')
    let agreementCheck = false


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
        for (let i = 0; i < 3; i++) { // 비번제외
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
    let renderedHTMLFamily = ``
    this.data['Family'] = { name: [], relation: [] }
    let $targetFamilyContainer = document.querySelectorAll('.flex-container div input')
    $targetAddFamilyButton.addEventListener('click', (e) => {
        $targetFamilyContainer = document.querySelectorAll('.flex-container div input')
        const FamilyContainerLength = $targetFamilyContainer.length
        e.preventDefault()
        if ($targetFamilyContainer[0].value && $targetFamilyContainer[1].value) {
            renderedHTMLFamily +=
            `
            <div data-index class="flex-container user-family-form-fields">
                <div class="mdc-text-field" data-mdc-auto-init="MDCTextField">
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
            $targetFamilyContainer[0].value = ''
            $targetFamilyContainer[1].value = ''
            $targetFamilyContainer[0].focus()
        }
        $targetAddFamilyFormData.innerHTML = renderedHTMLFamily
        mdc.autoInit()
    })


    $targetCompleteButton2.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('mdc-button__ripple')) {
            $targetStep2.classList.add('hidden')
            $targetTitle.textContent = '입력완료 3/3'
            $targetStep3.classList.remove('hidden')
        }
    })

    $targetCompleteButton3.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('mdc-button__ripple')) {
            $targetStep3.classList.add('hidden')
            let familyRelations = this.data.Family.name.map((val, idx) => {
                return `<div>${val} (${this.data.Family.relation[idx]})</div>`
            }).join('')
            $targetMyInfo.innerHTML =
            `
            <div class="my-info-view-container">
                  <div class="mdc-card my-info-card">
                    <button id="my-info-edit-button" class="mdc-icon-button material-icons text-gray">edit</button>
                    <div>
                      <h2 class="demo-card__title mdc-typography mdc-typography--headline5 text-center text-bold">나의 정보</h2>
                      <div class="mdc-typography mdc-typography--body2">
                        <div class="margin-16">
                          <div class="mdc-typography mdc-typography--subtitle1 text-bold">이름</div>
                          <div>${this.data.name}</div>
                        </div>
                        <div class="margin-16">
                          <div class="mdc-typography mdc-typography--subtitle1 text-bold">이메일</div>
                          <div>${this.data.email}</div>
                        </div>
                        <div class="margin-16">
                          <div class="mdc-typography mdc-typography--subtitle1 text-bold">전화번호</div>
                          <div>${this.data.phone}</div>
                        </div>
                        <div class="margin-16">
                          <div class="mdc-typography mdc-typography--subtitle1 text-bold">소개</div>
                          <div>${this.data.introduce}</div>
                        </div>
                         <div class="margin-16">
                          <div class="mdc-typography mdc-typography--subtitle1 text-bold">가족</div>
                          ${familyRelations}
                          </div>
                      </div>
                    </div>
                  </div>
                </div>
            `
            const $targetMyInfoEdit = document.querySelector('#my-info-edit-button')
            $targetMyInfoEdit.addEventListener('click', (e) => {
                this.dialog.open()
                mdc.autoInit()
                $targetStep1.classList.remove('hidden')
            })
        }
    })
}
