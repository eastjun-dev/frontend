function TodoInput($target, onAdd) {

    // 할일추가버튼 위치
    // const $todoAddBtn = document.getElementById('todo-add-button'); // 할일추가버튼 연결변수

    // 입력창에서 엔터키 입력시 할일추가
    $target.addEventListener('keyup', (e) => {
        const ENTER_KEY_CODE = 13;
        if (e.keyCode === ENTER_KEY_CODE) {
            onAdd($target.value)
            $target.value = ''; // 입력 후 입력란이 공란이 되도록 함
        }
    })
}