export default function renderedTemplate (val, idx) {
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