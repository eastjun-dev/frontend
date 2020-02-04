function renderedStoreListHTML(inputValue, countPage) {
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
    return result
}

export {renderedStoreListHTML}