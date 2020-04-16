function Service(storage) {

    Service.prototype.addTodoItem = (callback, inputItem) => {
        const entity = {};
        entity.value = inputItem;
        storage.save(callback, entity);
    };

}

export default Service;