function TodoList($target, data, onToggleClick, onTodoEdit, onRemoveClick, onTodoChange) {
    this.$target = $target;
    this.data = data;

    this.setState = function (nextData) {
        this.data = nextData;
        this.render()
    }

    if (this === window) {
        throw new Error(error.NO_USED_NEW_KEYWORD)
    }
    else if (Array.isArray(this.data) == false) {
        throw new Error(error.NOARRAY_DATA)
    }
    // 토글버튼과 삭제버튼 기능구현
    this.$target.addEventListener('click', (e) => {
        const { className } = e.target;
        const { index } = e.target.parentNode.parentNode.dataset
        if (className === 'toggle') {
            onToggleClick(index)
        } else if (className === 'destroy') {
            onRemoveClick(index)
        }
    })
    // 할일 더블클릭시 에디트 모드로 변경
    this.$target.addEventListener('dblclick', (e) => {
        const { className } = e.target;
        const { index } = e.target.parentNode.parentNode.dataset
        if (className === 'label') {
            onTodoEdit(index)
        }
    })

    // 에디트 모드에서 엔터키 또는 ESC 키 클릭시 기능 구현
    this.$target.addEventListener('keydown', (e) => {
        const { className } = e.target;
        const { index } = e.target.previousSibling.firstChild.dataset
        if (className === 'edit') {
            if (e.keyCode === ENTER_KEY_CODE) {
                onTodoChange(index, e.target.value)
            } else if (e.keyCode === ESC_KEY_CODE) {
                onTodoEdit(index)
            }
        }
    })

    this.render = function () {
        // renderHTMLText 변수 안에 data객체안의 text의 value 값에 태그를 붙여서 저장
        const renderHTMLText = this.data.map((val, idx) => {
            // const TOGGLE_INPUT = `<input class="toggle" type="checkbox" data-index=${idx} ${val.isCompleted ? 'checked' : ""}>`;
            const TOGGLE_INPUT = `<input class="toggle" type="checkbox"  ${val.isCompleted ? 'checked' : ""}>`;
            const DESTROY_BUTTON = '<button class="destroy"></button>';
            const EDIT_INPUT = `<input class="edit" value="${val.text}">`
            if (!val.text) {            // data.text 값이 있는지 확인
                throw new Error(error.NOT_DATA)
            }
            // data.text 내용이 문자열이 아닌 경우를 데이터가 이상하다고 가정
            else if (typeof (val.text) != "string") {
                throw new Error(error.INVALID_DATA)
            }
            // // isCompleted 가 참이면 <strike>태그를 넣어서 저장(완료되었다는 의미), false면 <div>만 넣어서 저장
            return `<li ${val.isCompleted ? 'class="completed"' : (val.isCompleted === false && val.isEditing === false) ? "" : 'class="editing"'} data-index=${idx}><div class="view">${TOGGLE_INPUT}<label class="label">${val.text}</label>${DESTROY_BUTTON}</div>${EDIT_INPUT}</li>`;
        }).join('');
        this.$target.innerHTML = `${renderHTMLText}`
    }
    this.render()
}