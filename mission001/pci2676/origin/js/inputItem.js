const todoInput = document.getElementById("new-todo-title");

todoInput.onkeyup = function (event) {
    if (isNotEnter(event)) {
        return false;
    }

    const item = todoInput.value;
    if (isEmpty(item)) {
        return false;
    }

    addNewTodoItem(item);
};

function isNotEnter(event) {
    return event.key !== "Enter";
}

function isEmpty(item) {
    return !item || item.trim() === "";
}

function addNewTodoItem(item) {
    //새로운 아이템 append
    const list = document.createElement("li");
    const div = makeDiv(item);
    list.appendChild(div);

    const todoItemList = document.getElementById("todo-list");
    todoItemList.appendChild(list);
}

function makeDiv(item) {
    const div = document.createElement("div");
    const input = makeToggleCheckBoxInput();
    const label = makeLabel(item);
    const button = makeDestroyButton();
    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(button);
    return div;
}

function makeToggleCheckBoxInput() {
    const input = document.createElement("input");
    input.className = "toggle";
    input.type = "checkbox";
    return input;
}

function makeLabel(item) {
    const label = document.createElement("label");
    label.innerText = item;
    return label;
}

function makeDestroyButton() {
    const button = document.createElement("button");
    button.className = "destroy";
    return button;
}
