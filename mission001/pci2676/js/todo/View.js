import Template from "./Template.js";

function View() {
    const todoList = document.querySelector("#todo-list");

    View.prototype.addNewItem = (entity) => {
        const item = Template.getNewItem(entity);
        todoList.appendChild(item);
    };
}

export default View;