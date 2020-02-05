function renderedStoreListHTML(inputValue, searchKeyword, countPage) {
    let result = inputValue.list.map((val, idx) => {
        return `
            <div id="item" class="item">
                <div class="item-no">${(countPage-1)*10+idx+1}</div>
                <div class="item-detail">
                    <div class="item-name">${val.name}</div>
                    <div class="item-addr">${val.addr}</div>
                </div>
            </div>
            `
    }).join('')
    return `
        <div class="total">총 ${inputValue.total}개의 가게를 찾았습니다.</div>
        <div class="list">${result}</div>
    `
}

function renderedHistoryHTML(inputValue){
    let result = inputValue.map((val)=> {
        return `
        <option>${val}</option>
        `
    }).join('')
    return result
}

export {renderedStoreListHTML, renderedHistoryHTML}