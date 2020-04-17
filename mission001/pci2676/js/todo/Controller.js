function Controller(service, view) {
    const inputTextBox = document.querySelector("#new-todo-title");

    inputTextBox.addEventListener('keyup', event => Controller.prototype.inputListener(event));

    Controller.prototype.inputListener = (event) => {
        const inputItem = inputTextBox.value;
        if (isEnter(event) && isNotEmpty(inputItem)) {
            inputTextBox.value = "";

            const eventListener = {};
            eventListener.deleteClick = Controller.prototype.deleteClick;
            eventListener.toggleClick = Controller.prototype.toggleClick;
            eventListener.editContent = Controller.prototype.editContent;

            service.addTodoItem(view.addNewItem, inputItem, eventListener);
        }
    };

    function isEnter(event) {
        return event.key === 'Enter';
    }

    function isNotEmpty(item) {
        return item && item.trim().length !== 0;
    }

    Controller.prototype.toggleClick = (event) => {
        const target = event.target.offsetParent;
        service.changeStatus(view.toggle, target);
    };

    Controller.prototype.deleteClick = (event) => {
        const target = event.target.offsetParent;
        service.delete(view.remove, target.id);
    };

    Controller.prototype.editContent = (event) => {
        const li = event.target.offsetParent;

        if (isEsc(event)) {
            view.editExit(event);
            return;
        }
        if (isEnter(event)) {
            const edited = event.target.value;
            service.update(view.update, li.id, edited);
        }
    };

    function isEsc(event) {
        return event.key === 'Escape';
    }
}

export default Controller;