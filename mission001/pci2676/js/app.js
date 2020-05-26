import Controller from "./todo/Controller.js";
import Service from "./todo/Service.js";
import View from "./todo/View.js";
import Storage from "./todo/Storage.js";

function App() {

    function initialize(app) {
        const $inputTextBox = document.querySelector("#new-todo-title");
        const $filters = document.querySelector(".filters");
        const $todoList = document.querySelector("#todo-list");
        const $todoCount = document.querySelector(".count");

        const view = new View($todoList, $todoCount);
        const storage = new Storage();
        const service = new Service(storage);
        const controller = new Controller(service, view);

        controller.init($inputTextBox, $todoList, $filters);
    }

    initialize(this);
}

new App();