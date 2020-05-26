const Template = {
    getNewItem(entity) {
        return `
            <li id="todo-${entity.id}" class="${entity.status}">
                <div class="view">
                        <input class="toggle" type="checkbox">
                        <label class="label">${entity.value}</label>
                        <button class="destroy"></button>
                    </div>
               <input class="edit" value=${entity.value}>
            </li>
        `;
    }
};

export default Template;