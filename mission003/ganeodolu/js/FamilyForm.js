export default function FamilyForm({$targetTitle, $targetAddFamilyFormData, $targetAddFamilyButton, $targetFamilyContainer, $targetCompleteButton2, $targetStep2, $targetStep3, data}){
    this.data = data;

    let renderedHTMLFamily = ``

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
}