import {renderedFamilyTemplate} from '../js/template.js'
import { TITLENAME } from '../js/constant.js';

export default function FamilyForm({$targetTitle, $targetAddFamilyFormData, $targetAddFamilyButton, $targetFamilyContainer, $targetCompleteButton2, $targetStep2, $targetStep3, data}){
    this.data = data;

    let renderedHTMLFamily = ``

    $targetAddFamilyButton.addEventListener('click', (e) => {
        $targetFamilyContainer = document.querySelectorAll('.flex-container div input')
        e.preventDefault()
        if ($targetFamilyContainer[0].value && $targetFamilyContainer[1].value) {
            renderedHTMLFamily = renderedFamilyTemplate(renderedHTMLFamily, $targetFamilyContainer)
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
            $targetTitle.textContent = TITLENAME.SETP3
            $targetStep3.classList.remove('hidden')
        }
    })
}