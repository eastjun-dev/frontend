import Template from "./Template.js";

function View() {
    const todoList = document.querySelector("#todo-list");
    const todoCount = document.querySelector(".count");
    const filters = document.querySelector(".filters");

    View.prototype.addNewItem = (entity, eventListener) => {
        const item = Template.getNewItem(entity);
        item.querySelector('.toggle').onclick = eventListener.toggleClick;
        item.querySelector('.destroy').onclick = eventListener.deleteClick;
        item.querySelector('.label').ondblclick = View.prototype.editMode;
        item.querySelector('.edit').addEventListener('keyup', (event) => eventListener.editContent(event));
        todoList.appendChild(item);
        View.prototype.updateCount();
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
        View.prototype.updateCount();
    };

    View.prototype.remove = (id) => {
        const target = document.querySelector('#todo-' + id.toString());
        target.parentElement.removeChild(target);
        View.prototype.updateCount();
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
    };

    View.prototype.updateCount = () => {
        let target = document.querySelector('.selected').classList.item(0);

        if (target === 'all') {
            todoCount.innerHTML = todoList.getElementsByClassName('view').length.toString();
        } else {
            todoCount.innerHTML = todoList.getElementsByClassName(target).length.toString();
        }
        showSelected();
    };

    View.prototype.select = (target) => {
        removeAllSelected();
        filters.querySelector('.' + target).classList.add('selected');
        showSelected();
    };

    function removeAllSelected() {
        document.querySelector('.selected').classList.remove('selected');
    }

    function showSelected() {
        const target = document.querySelector('.selected').classList.item(0);
        if (target === 'all') {
            for (let li of todoList.getElementsByTagName('li')) {
                li.style.display = '';
            }
        } else {
            for (let li of todoList.getElementsByTagName('li')) {
                if (li.className === target) {
                    li.style.display = '';
                } else {
                    li.style.display = 'none';
                }
            }
        }
    }
}

export default View;