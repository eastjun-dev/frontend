const error = {
    NO_USED_NEW_KEYWORD: "함수 선언시 new를 사용해주세요.",
    NOARRAY_DATA: "data타입이 Array가 아닙니다.",
    NOT_DATA: "data가 null 또는 undefined 입니다.",
    INVALID_DATA: "data타입이 문자열이 아닙니다.",
};
const ENTER_KEY_CODE = 13;
const ESC_KEY_CODE = 27;

const data = [
    {
        text: 'JS 공부하기',
        isCompleted : false,
        isEditing : false,
    },
    {
        text: 'JS 복습하기',
        isCompleted: true,
        isEditing : false,
    },
]

new App(data);