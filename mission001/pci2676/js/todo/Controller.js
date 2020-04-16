function Controller(service, view) {
    const inputTextBox = document.querySelector("#new-todo-title");
    const todoList = document.querySelector("#todo-list");

    inputTextBox.addEventListener('keyup', event => Controller.prototype.inputListener(event));
    todoList.addEventListener('click', (event) => Controller.prototype.clickListener(event));

    Controller.prototype.inputListener = (event) => {
        const inputItem = inputTextBox.value;
        if (isEnter(event) && isNotEmpty(inputItem)) {
            inputTextBox.value = "";
            service.addTodoItem(view.addNewItem, inputItem);
        }
    };

    function isEnter(event) {
        return event.key === 'Enter';
    }

    function isNotEmpty(item) {
        return item && item.trim().length !== 0;
    }

    Controller.prototype.clickListener = (event) => {
        if (isToggle(event)) {
            view.toggle(event.target.parentElement.parentElement);
        }
        if (isDelete(event)) {
            view.remove(event.target.parentElement.parentElement);
        }
    };

    function isToggle(event) {
        return event.target.className === 'toggle';
    }

    function isDelete(event) {
        return event.target.className === 'destroy';
    }
}

export default Controller;