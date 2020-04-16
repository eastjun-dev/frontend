const Template = {
    getNewItem: (entity) => {
        const li = document.createElement('li');
        li.id = entity.id;

        li.innerHTML = `
            <div class="view">
                    <input class="toggle" type="checkbox">
                    <label class="label">${entity.value}</label>
                    <button class="destroy"></button>
                </div>
            <input class="edit" value=${entity.value}>
        `;

        return li;
    }
};

export default Template;