const todoTemplate = function (text, status) {
    return `<li class=${status}>
        <div class="view">
            <input class="toggle" type="checkbox">
            <label class="label">${text}</label>
            <button class="destroy"></button>
        </div>
        <input class="edit" value="새로운 타이틀">
    </li>`
};

export default todoTemplate;