// todo input + button
// todo-list add, localStorage add
// todo-list delete, localStorage delete
// reload saved todo-list from localStorage

const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");

const TODOS_KEY = 'toDos';
const toDos = [];

function saveTodo(){
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deletehandler(event){
    const li = document.target.parentElement; // html에 부여된 id 값이 string으로 됨
    li.remove();   

    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    saveTodo();
}

function paintTodo(newTodoobj){
    const li = document.createElement("li");
    const span = document.createElement("span");
    li.id = newTodoobj.id;
    li.appendChild(span);

    const button = document.createElement("button");
    button.innerText = "✖️";
    li.appendChild(button);

    span.innerText = newTodoobj.text;
    todoList.appendChild(li);
    
    button.addEventListener('click',deletehandler); 
}

function submithandler(event){
    event.preventDefault();
    const todoInput = document.querySelector("todoForm input");
    const newTodo = todoInput.value; 
    todoInput = "";

    const newTodoobj ={
        key: Date.now(), // number type
        text: newTodo
    }
    toDos.push(newTodoobj);
    
    paintTodo(newTodoobj);
    saveTodo();
}

todoForm.addEventListener("submit",submithandler);

const savedTodos = localStorage.getItem(TODOS_KEY);
if(savedTodos){
    const parsedTodos = JASON.parse(savedTodos);
    toDos = parsedTodos;
    parsedTodos.forEach(paintTodo);
}