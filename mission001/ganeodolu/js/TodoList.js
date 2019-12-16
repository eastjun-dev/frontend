function TodoList($target, data, onTodoClick, onRemoveClick){
    this.$target = $target;
    this.data = data;
    // console.log(data)
    this.setState = function (nextData){
        this.data = nextData;
        this.render()
    }

    if (this === window) {
        throw new Error(error.NO_USED_NEW_KEYWORD)
    }
    else if (Array.isArray(this.data) == false) {
        throw new Error(error.NOARRAY_DATA)
    }

    this.$target.addEventListener('click', (e) => {
        const { className, dataset } = e.target;
        console.log(e.target)
        console.log(className)
        console.log(dataset)
        const { index } = dataset;
        // console.log(index)
        if (className.includes('todo-text')) {
            onTodoClick(index)
        } else if (className === 'remove') {
            onRemoveClick(index)
        }
    })

    this.render = function (){
        const INPUT_VIEW = '<input class="toggle" type="checkbox">';
        const BUTTON_VIEW = '<button class="destroy"></button>';
        // renderHTMLText 변수 안에 data객체안의 text의 value 값에 태그를 붙여서 저장
        const renderHTMLText = this.data.map((val, idx) => {
            if (!val.text) {            // data.text 값이 있는지 확인
                throw new Error(error.NOT_DATA)
            }
            // data.text 내용이 문자열이 아닌 경우를 데이터가 이상하다고 가정
            else if (typeof (val.text) != "string") {
                throw new Error(error.INVALID_DATA)
            }
            // // isCompleted 가 참이면 <strike>태그를 넣어서 저장(완료되었다는 의미), false면 <div>만 넣어서 저장
            // return val.isCompleted ? `<li><span id="line${idx}"><strike>${val.text}</strike></span></li>` : `<li><span id="line${idx}">${val.text}</span></li>`;
            return `<li><div class="view">${INPUT_VIEW}<label class="label">${val.text}</label>${BUTTON_VIEW}</div></li>`;
        }).join('');
        // console.log("renderHTMLText", renderHTMLText);    
        this.$target.innerHTML = `${renderHTMLText}`
    }



    this.render()

}