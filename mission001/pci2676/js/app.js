import Controller from "./todo/Controller.js";
import Service from "./todo/Service.js";
import View from "./todo/View.js";
import Storage from "./todo/Storage.js";

function App() {
    initialize(this);
}

function initialize(app) {
    console.log(app);
    const view = new View();
    const storage = new Storage();
    const service = new Service(storage);
    app.Controller = new Controller(service, view);
}

new App();