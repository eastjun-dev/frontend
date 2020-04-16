function Controller(service, view) {
    const inputTextBox = document.querySelector("#new-todo-title");

    inputTextBox.addEventListener('keyup', event => Controller.prototype.inputListener(event));

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
}

export default Controller;