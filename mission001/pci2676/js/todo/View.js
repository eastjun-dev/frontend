import Template from "./Template.js";

function View() {
    const todoList = document.querySelector("#todo-list");

    View.prototype.addNewItem = (entity, eventListener) => {
        const item = Template.getNewItem(entity);
        item.querySelector('.toggle').onclick = eventListener.toggleClick;
        item.querySelector('.destroy').onclick = eventListener.deleteClick;
        item.querySelector('.label').ondblclick = View.prototype.editMode;
        item.querySelector('.edit').addEventListener('keyup', (event) => eventListener.editContent(event));
        todoList.appendChild(item);
    };

    View.prototype.editMode = (event) => {
        const li = event.target.offsetParent;
        li.className = 'editing';
    };

    View.prototype.toggle = (entity) => {
        const id = '#todo-' + entity.id;
        const status = entity.status;
        const li = document.querySelector(id);
        li.className = status;
    };

    View.prototype.remove = (id) => {
        const target = document.querySelector('#todo-' + id.toString());
        target.parentElement.removeChild(target);
    };

    View.prototype.editExit = (event) => {
        const li = event.target.offsetParent;

        li.className = 'ready';
        event.target.value = li.querySelector('.label').textContent;
    };

    View.prototype.update = (entity) => {
        const id = '#todo-' + entity.id;
        const li = document.querySelector(id);
        li.querySelector('.label').textContent = entity.value;
        li.querySelector('.edit').value = entity.value;
        li.className = 'ready';
    }

}

export default View;