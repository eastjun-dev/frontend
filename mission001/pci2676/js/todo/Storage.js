function Storage() {
    let id = 0;

    Storage.prototype.save = (callback, entity) => {
        id++;
        entity.id = id.toString();
        window.localStorage.setItem(entity.id, entity);
        callback(entity);
    };

}

export default Storage;