import { renderedMyInfoTemplate } from '../js/template.js'
import { TITLENAME } from '../js/constant.js';

export default function MyInfoForm({ $targetTitle, $targetMyInfo, $targetCompleteButton, $targetStep1, $targetStep3, dialog, data }) {
    this.data = data;
    this.dialog = dialog;

    $targetCompleteButton.addEventListener('click', (e) => {
        e.preventDefault()
        if (e.target.classList.contains('done')) {
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
