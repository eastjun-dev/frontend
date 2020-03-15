const section = document.querySelector(".todoapp"),
form = section.querySelector(".new-todo-1"),
input = form.querySelector("input"),
ul = section.querySelector(".todo-list"),
countDiv = section.querySelector('.count-container'),
span = countDiv.querySelector(".todo-count");;

const finishForm = section.querySelector('.toDoFinish')
const TODOS_LS = "todos";
const all = document.querySelector(".all")
const active = document.querySelector(".active")
const completed = document.querySelector(".completed")
let toDo = [];
const checkClick = {
    All: true,
    Active: false,
    Completed: false
}

function clearScreen(){
    const li = ul.querySelectorAll("li")
    li.forEach(function(li){
        ul.removeChild(li);
    })
}
function clickAll(){
    clearScreen();
    toDo = []
    loadToDo();
    all.classList.add("selected")
    completed.classList.remove("selected")
    active.classList.remove("selected")
    checkClick.All = true
    checkClick.Active = false
    checkClick.Completed = false
}


function clickActive(){
    clearScreen();
    const currentToDo = JSON.parse(localStorage.getItem(TODOS_LS));
    const filtToDo = currentToDo.filter(function(toDo){
        return !toDo.finish
    })
    toDo = []
    filtToDo.forEach(function(toDos){
        paintToDo(toDos.text, toDos.id, toDos.finish)
    })
    toDo = currentToDo;
    saveToDo();
    all.classList.remove("selected")
    completed.classList.remove("selected")
    active.classList.add("selected")
    checkClick.All = false
    checkClick.Active = true
    checkClick.Completed = false
}


function clickCom(){
    clearScreen();
    const currentToDo = JSON.parse(localStorage.getItem(TODOS_LS));
    const filtToDo = currentToDo.filter(function(toDo){
        return toDo.finish
    })
    toDo = []
    filtToDo.forEach(function(toDos){
        paintToDo(toDos.text, toDos.id, toDos.finish)
    })
    toDo = currentToDo;
    saveToDo();
    all.classList.remove("selected")
    completed.classList.add("selected")
    active.classList.remove("selected")
    checkClick.All = false
    checkClick.Active = false
    checkClick.Completed = true
}

function paintToDo(todos, id, finish){
    const li = document.createElement("li");
    const div = document.createElement('div');
    const input = document.createElement('input');
    const input_2 = document.createElement('input');
    const label = document.createElement('label');
    const btn = document.createElement('button');
    btn.addEventListener("click", deleeteToDo);
    div.classList.add("view");
    label.classList.add("label");
    btn.classList.add("destroy");
    input.classList.add("toggle");
    input.type = "checkbox"
    input.value = "finish"
    if(finish){
        input.checked = "checked"
        li.classList.add("completed")
    } else {
        input.checked = ""
    }
    label.innerText = todos;
    input_2.classList.add("edit");
    input_2.value = "새로운 타이틀";
    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(btn);
    li.appendChild(div);
    li.appendChild(input_2);
    li.id = id;
    ul.appendChild(li);
    const toDoObj = {
        text: todos,
        id: id,
        finish: finish
    };
    toDo.push(toDoObj);
    saveToDo();
}

function paincount(){
    const toDos = localStorage.getItem("todos");
    const parseToDos = JSON.parse(toDos);
    if(parseToDos !== null){
        span.innerHTML = `총 <strong>${parseToDos.length}</strong> 개`
    }
}


function deleeteToDo(event){
    const btn = event.target;
    const div = btn.parentNode;
    const li = div.parentNode;
    ul.removeChild(li);
    const filterToDo = toDo.filter(function(todo){
        return todo.id !== parseInt(li.id);
        
    });
    toDo = filterToDo;
    saveToDo();
    paincount();
}

function saveToDo(){
    localStorage.setItem(TODOS_LS, JSON.stringify(toDo));
}

function addToDo(todos){
    const li = document.createElement("li");
    const div = document.createElement('div');
    const input = document.createElement('input');
    const input_2 = document.createElement('input');
    const label = document.createElement('label');
    const btn = document.createElement('button');
    let newId = 0
    if(toDo.length === 0){
        newId = toDo.length + 1
    } else {
        const loadedToDo = JSON.parse(localStorage.getItem(TODOS_LS));
        const currentToDo = loadedToDo[loadedToDo.length-1]
        newId = currentToDo.id + 1
    }
    btn.addEventListener("click", deleeteToDo);
    div.classList.add("view");
    label.classList.add("label");
    btn.classList.add("destroy");
    input.classList.add("toggle");
    input.type = "checkbox"
    input.value = "finish"
    input.checked = ""
    input_2.classList.add("edit");
    input_2.value = "새로운 타이틀";
    label.innerText = todos;
    div.appendChild(input);
    div.appendChild(label);
    div.appendChild(btn);
    li.appendChild(div);
    li.appendChild(input_2);
    li.id = newId;
    ul.appendChild(li);
    const toDoObj = {
        text: todos,
        id: newId,
        finish: false
    };
    toDo.push(toDoObj);
    saveToDo();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = input.value;
    input.value = "";
    addToDo(currentValue);
    paincount();
    if(checkClick.All) {
        clickAll();
    } else if (checkClick.Active){
        clickActive();
    } else if (checkClick.Completed){
        clickCom();
    }
}

function loadToDo(){
    const loadedToDo = JSON.parse(localStorage.getItem(TODOS_LS));
    if(loadedToDo !== null){
        loadedToDo.forEach(function(toDo){
            paintToDo(toDo.text, toDo.id, toDo.finish)
        })
    } else {
    }
    paincount();
}

function handleChek(event){
    event.preventDefault();
    const finish = event.target;
    const div = finish.parentNode;
    const li = div.parentNode;
    toDo.forEach(function(todo){
        if(todo.id === parseInt(li.id)){
            if(event.target.checked){
                li.classList.add("completed")
                todo.finish = true
            } else {
                li.classList.remove("completed")
                todo.finish = false
            }
        }
    })
    saveToDo();
    if(checkClick.All) {

    } else if (checkClick.Active){
        clickActive();
    } else if (checkClick.Completed){
        clickCom();
    }
}

function init(){
    loadToDo();
    form.addEventListener("submit", handleSubmit);
    finishForm.addEventListener("change", handleChek);
    all.addEventListener("click", clickAll);
    active.addEventListener("click", clickActive);
    completed.addEventListener("click", clickCom);
}

init();