import {EVENT_KEY} from "../utils/Contants.js"
import {EVENT_VALIDATOR, STRING_VALIDATOR} from "../utils/Validators.js";

function Controller(service, view) {

    Controller.prototype.inputListener = (event, $inputTextBox) => {
        const inputItem = $inputTextBox.value;
        if (EVENT_VALIDATOR.isEnter(event) && STRING_VALIDATOR.isNotEmpty(inputItem)) {
            $inputTextBox.value = "";
            service.addTodoItem(view.addNewItem, inputItem);
        }
    };

    Controller.prototype.toggleClick = (event) => {
        event.preventDefault()

        if (event.target.classList.contains('toggle')) {
            const $li = event.target.closest('li');
            service.changeStatus(view.toggle, $li);
        }
    };

    Controller.prototype.deleteClick = (event) => {
        event.preventDefault()

        if (event.target.classList.contains('destroy')) {
            const $li = event.target.closest('li');
            service.delete(view.remove, $li.id);
        }
    };

    Controller.prototype.editContent = (event) => {
        event.preventDefault()

        const $li = event.target.closest('li');

        if (EVENT_VALIDATOR.isEsc(event)) {
            view.editExit(event);
            return;
        }
        if (EVENT_VALIDATOR.isEnter(event)) {
            const edited = event.target.value;
            service.update(view.update, $li.id, edited);
        }
    };

    Controller.prototype.filterClick = (event) => {
        event.preventDefault()

        const $target = event.target.closest('a');
        if ($target) {
            view.select($target);
            view.updateCount();
        }
    };

    Controller.prototype.initEventListener = ($inputTextBox, $todoList, $filters) => {
        $inputTextBox.addEventListener(EVENT_KEY.KEY_UP, event => Controller.prototype.inputListener(event, $inputTextBox));

        $todoList.addEventListener(EVENT_KEY.CLICK, (event) => Controller.prototype.toggleClick(event));
        $todoList.addEventListener(EVENT_KEY.CLICK, (event) => Controller.prototype.deleteClick(event));
        $todoList.addEventListener(EVENT_KEY.CLICK, (event) => Controller.prototype.filterClick(event));
        $todoList.addEventListener(EVENT_KEY.DOUBLE_CLICK, (event) => view.editMode(event));
        $todoList.addEventListener(EVENT_KEY.KEY_UP, (event) => Controller.prototype.editContent(event));

        $filters.addEventListener(EVENT_KEY.CLICK, (event) => Controller.prototype.filterClick(event));
    };

    Controller.prototype.init = ($inputTextBox, $todoList, $filters) => {
        Controller.prototype.initEventListener($inputTextBox, $todoList, $filters);
    }
}

export default Controller;