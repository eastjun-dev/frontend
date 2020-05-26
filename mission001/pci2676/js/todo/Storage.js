function Storage() {
    let id = 0;

    Storage.prototype.save = (callback, entity) => {
        id++;
        entity.id = id.toString();
        save(entity);
        callback(entity);
    };

    Storage.prototype.delete = (callback, id) => {
        window.localStorage.removeItem(id);
        callback(id);
    };

    Storage.prototype.changeStatus = (callback, id, changeStatus) => {
        const entity = findById(id);
        entity.status = changeStatus;
        save(entity);
        callback(entity);
    };

    Storage.prototype.update = (callback, id, edited) => {
        const entity = findById(id);
        entity.value = edited;
        save(entity);
        callback(entity);
    }

    function save(entity) {
        window.localStorage.setItem(entity.id, JSON.stringify(entity));
    }

    function findById(id) {
        return JSON.parse(window.localStorage.getItem(id));
    }

}

export default Storage;