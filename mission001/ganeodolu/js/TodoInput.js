function TodoInput($targetInput, $targetEdit, onAdd) {
    // 입력창에서 엔터키 입력시 할일추가
    $targetInput.addEventListener('keydown', (e) => {
        if (e.keyCode === ENTER_KEY_CODE) {
            onAdd($targetInput.value)
            $targetInput.value = ''; // 입력 후 입력란이 공란이 되도록 함
        }
    })
}