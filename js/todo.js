const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoForm input");
const todoList = document.querySelector("#todoList");

const toDos =[];

function handleTodoSubmit(event){
    event.preventDefault();
    //입력값 변수에 저장
    const newTodo= todoInput.value;
    //입력창에 밸류는 지워줌
    todoInput.value="";
    // 인풋밸류를 저장한 변수를 인자로 리스트업 해주는 함수를 호출
    toDos.push(newTodo);
    listUp(newTodo);
    saveTodo();   
}
function saveTodo (){
    //localStorage엔 array 를 저장할 수 없다.
    //localStorage.setItem('toDos',toDos);
    //JS 오브젝트나 array를 string으로 바꿔주는 기능 사용
    //JSON.stringify(toDos)
    localStorage.setItem('toDos',JSON.stringify(toDos));
    // JSON.stringify로 넘겨준 자료는 JSON.parse로 받아올 수 있지만
    // 그냥 넘겨준 자료(localStorage.setItem('todo',todo)는 JSON.parse로 받아오지 못해요 오류가 납니다.
    // JSON.stringify 를 쓰는 포인트는 '["hi","hello"]' 리스트 째로 string화 시켜주기 때문에
    // 나중에 localStorage에서 저장된 정보를 load할때 for문을 돌릴 수 있기 때문.
}
function listUp(newTodo){
    // ul 태그안에 li 태그 생성하고 또 그 안에 span을 생성하여 입력값을 넣을 것임.
    // span을 생성하는 이유는 나중에 입력값을 삭제하는 버튼을 만들것이기 때문.
    
    //html에 'li'태그 생성
    const li = document.createElement('li');
    //html 에 'span'태그 생성
    const span = document.createElement('span');
    //delete button 생성
    const button = document.createElement('button');

    li.appendChild(span);
    button.innerText ='x'
    li.appendChild(button);
    span.innerText=newTodo;
    todoList.appendChild(li);

    button.addEventListener('click',deletehandler);

    //localStorage.setItem('todolist',newTodo);
}
function deletehandler(event){
    // 이 event에서 target된 button의 parent 는 li 이다.
    // 그 li 를 선택하여 지워주면 됨.
    // console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    li.remove();      
}
// function reList(newTodo){
//     listUp(newTodo);
//     todoForm.addEventListener("submit",handleTodoSubmit);
// }


// const savedList=localStorage.getItem('todolist');
// if(savedList === 'Null') {
//     todoForm.addEventListener("submit",handleTodoSubmit);
// }else{
//     reList(savedList);
// }
todoForm.addEventListener("submit",handleTodoSubmit);
