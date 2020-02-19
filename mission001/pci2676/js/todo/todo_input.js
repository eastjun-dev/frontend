import utils from "../utils/utils.js"
import todoTemplate from "./todo_template.js";

function todoInput() {
    const todoInput = document.getElementById("new-todo-title");
    const todoList = document.getElementById("todo-list");

    todoInput.addEventListener('keyup', event => addNewTodo(event));

    const addNewTodo = function add(event) {
        if (utils.isNotEnter(event)) {
            return false;
        }
        const text = todoInput.value;
        todoInput.value = "";
        if (utils.isStringEmpty(text)) {
            return false;
        }
        const todoItem = todoTemplate(text, "todo");
        todoList.innerHTML += todoItem;
    }
}

export default todoInput;