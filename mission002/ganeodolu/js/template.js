function renderedTemplate(val, idx) {
    return `
            <li ${val.isCompleted ? 'class="completed"' : ''} data-index=${idx}>
                <div class="view">
                    <input class="toggle" type="checkbox"  ${val.isCompleted ? 'checked' : ''}>
                    <label class="label">${val.content}</label>
                    <button class="destroy"></button>
                </div>
                <input class="edit" value="${val.content}">
            </li>`
}

function totalCountTemplate(totalCount){
    return `총 <strong>${totalCount}</strong>개`

}

export { renderedTemplate, totalCountTemplate }