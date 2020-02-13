import {keyName} from "./constant.js"

export default function TodoInput($targetInput, {onAdd}) {
    
    $targetInput.addEventListener('keydown', (e) => {
        if (e.key === keyName.ENTER) {
            onAdd($targetInput.value)
            $targetInput.value = '';
        }
    })
}
