function Service(storage) {

    Service.prototype.addTodoItem = (callback, inputItem) => {
        const entity = {};
        entity.value = inputItem;
        entity.status = "active";
        storage.save(callback, entity);
    };

    Service.prototype.delete = (callback, id) => {
        const todoId = extractTodoId(id);
        storage.delete(callback, todoId);
    };

    Service.prototype.changeStatus = (callback, target) => {
        const todoId = extractTodoId(target.id);
        const status = target.className;

        const changeStatus = toggle(status);

        storage.changeStatus(callback, todoId, changeStatus);
    };

    function toggle(status) {
        if (status === 'active') {
            return 'completed';
        } else if (status === 'completed') {
            return 'active';
        }
    }

    Service.prototype.update = (callback, id, edited) => {
        const todoId = extractTodoId(id);
        storage.update(callback, todoId, edited);
    };

    function extractTodoId(id) {
        return id.replace('todo-', '');
    }

}

export default Service;