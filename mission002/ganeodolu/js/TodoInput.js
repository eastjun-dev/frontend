export default function TodoInput($targetInput, {onAdd}) {
    
    $targetInput.addEventListener('keydown', async (e) => {
        if (e.key === "Enter") {
            await onAdd($targetInput.value)
            $targetInput.value = '';
        }
    })
}