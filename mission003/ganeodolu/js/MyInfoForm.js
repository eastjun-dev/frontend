import {renderedMyInfoTemplate} from './template.js'
import { TITLENAME } from './constant.js';

export default function MyInfoForm({$targetTitle, $targetMyInfo, $targetCompleteButton3, $targetStep1, $targetStep3, dialog, data}){
    this.data = data;
    this.dialog = dialog;

    $targetCompleteButton3.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('mdc-button__ripple')) {
            $targetStep3.classList.add('hidden')

            $targetMyInfo.innerHTML = renderedMyInfoTemplate(this.data)

            const $targetMyInfoEdit = document.querySelector('#my-info-edit-button')
            $targetMyInfoEdit.addEventListener('click', (e) => {
                this.dialog.open()
                mdc.autoInit()
                $targetStep1.classList.remove('hidden')
                $targetTitle.textContent = TITLENAME.STEP1
            })
        }
    })
}