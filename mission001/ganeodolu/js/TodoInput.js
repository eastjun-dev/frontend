function TodoInput($targetInput, $targetEdit, {onAdd}) {
    $targetInput.addEventListener('keydown', (e) => {
        if (e.code === "Enter") {
            onAdd($targetInput.value)
            $targetInput.value = '';
        }
    })
}