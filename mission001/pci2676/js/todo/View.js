import Template from "./Template.js";

function View() {
    const todoList = document.querySelector("#todo-list");

    View.prototype.addNewItem = (entity) => {
        const item = Template.getNewItem(entity);
        todoList.appendChild(item);
    };

    View.prototype.toggle = (target) => {
        const status = target.className;
        if (!status) {
            target.className = 'completed';
        } else if (status === 'completed') {
            target.className = '';
        }
    }

    View.prototype.remove = (target) => {
        target.parentElement.removeChild(target);
    }
}

export default View;