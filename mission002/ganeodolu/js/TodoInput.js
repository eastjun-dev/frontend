import { KEYNAME } from "./constant.js"

export default function TodoInput($targetInput, { onAdd }) {

    $targetInput.addEventListener('keydown', async (e) => {
        if (e.key === KEYNAME.ENTER && $targetInput.value) {
                await onAdd($targetInput.value)
            $targetInput.value = '';
        }
    })
}