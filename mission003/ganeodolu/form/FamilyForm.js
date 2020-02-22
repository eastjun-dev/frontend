import { renderedFamilyTemplate } from '../js/template.js'
import { TITLENAME } from '../js/constant.js';

export default function FamilyForm(
    {
        $targetTitle,
        $targetAddFamilyFormData,
        $targetAddFamilyButton,
        $targetFamilyContainer,
        $targetCompleteButton,
        $targetStep2,
        $targetStep3,
        data
    }) {
    this.data = data;

    let renderedHTMLFamily = ``
    let familyName = $targetFamilyContainer[0];
    let familyRelation = $targetFamilyContainer[1];

    $targetAddFamilyButton.addEventListener('click', (e) => {
        $targetFamilyContainer = document.querySelectorAll('.flex-container div input')
        e.preventDefault()
        if (familyName.value && familyRelation.value) {
            renderedHTMLFamily = renderedFamilyTemplate(renderedHTMLFamily, $targetFamilyContainer)
            this.data['Family']['name'].push(familyName.value)
            this.data['Family']['relation'].push(familyRelation.value)
            familyName.value = ''
            familyRelation.value = ''
            familyName.focus()
        }
        $targetAddFamilyFormData.innerHTML = renderedHTMLFamily
        mdc.autoInit()
    })

    $targetCompleteButton.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('done')) {
            $targetStep2.classList.add('hidden')
            $targetTitle.textContent = TITLENAME.SETP3
            $targetStep3.classList.remove('hidden')
        }
    })
}
