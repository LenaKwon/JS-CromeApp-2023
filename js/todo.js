const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoForm input");
const todoList = document.querySelector("#todoList");
console.log(todoForm)

function handleTodoSubmit(event){
    event.preventDefault();
    const todoinput= todoInput.value;
    todoInput.value="";
    listUp(todoinput);   
}
function listUp(todoinput){
    const li = document.createElement('li');
    const span = document.createElement('span');
    li.appendChild(span);
    span.innerText=todoinput;
    todoList.appendChild(li);
    
}

todoForm.addEventListener("submit",handleTodoSubmit)