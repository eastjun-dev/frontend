import Template from "./Template.js";

function View($todoList, $todoCount) {

    View.prototype.addNewItem = (entity) => {
        const item = Template.getNewItem(entity);
        $todoList.insertAdjacentHTML('afterbegin', item);
        View.prototype.updateCount();
    };

    View.prototype.editMode = (event) => {
        event.preventDefault();

        const $label = event.target.closest('label');
        if ($label) {
            const $li = event.target.closest('li');
            $li.className = 'editing';
        }
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
        event.preventDefault();

        const li = event.target.offsetParent;

        li.className = 'ready';
        event.target.value = li.querySelector('.label').textContent;
    };

    View.prototype.update = (entity) => {
        const id = '#todo-' + entity.id;
        const $li = document.querySelector(id);
        $li.querySelector('.label').textContent = entity.value;
        $li.querySelector('.edit').value = entity.value;
        $li.className = 'ready';
    };

    View.prototype.updateCount = () => {
        const target = document.querySelector('.selected').classList.item(0);

        if (target === 'all') {
            $todoCount.innerHTML = $todoList.getElementsByClassName('view').length.toString();
        } else {
            $todoCount.innerHTML = $todoList.getElementsByClassName(target).length.toString();
        }
        showSelected();
    };

    View.prototype.select = (target) => {
        removeAllSelected();
        target.classList.add('selected');
        showSelected();
    };

    function removeAllSelected() {
        document.querySelector('.selected').classList.remove('selected');
    }

    function showSelected() {
        for (let $li of $todoList.getElementsByTagName('li')) {
            $li.classList.remove('d-none');
        }

        const filter = document.querySelector('.selected').dataset.filter;
        if (filter === 'all') {
            return;
        }
        for (let $li of $todoList.getElementsByTagName('li')) {
            if ($li.className !== filter) {
                $li.classList.add('d-none')
            }
        }
    }
}

export default View;