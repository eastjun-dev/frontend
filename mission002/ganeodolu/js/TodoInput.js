export default function TodoInput($targetInput, {onAdd}) {
    
    $targetInput.addEventListener('keydown', (e) => {
        if (e.key === "Enter") {
            onAdd($targetInput.value)
            $targetInput.value = '';
        }
    })
}