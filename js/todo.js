const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoForm input");
const todoList = document.querySelector("#todoList");

let toDos =[];
const toDosKey = 'toDos';

function handleTodoSubmit(event){
    event.preventDefault();
    //입력값 변수에 저장
    const newTodo= todoInput.value;
    //입력창에 밸류는 지워줌
    todoInput.value="";
    //랜덤 id와 함께 객체형식으로 입력값을 저장.
    const newTodoobj ={
        id: Date.now(), //Date객체 사용한 밀리세컨을 아이디로 이용.
        text: newTodo
    }
    toDos.push(newTodoobj);
    // 인풋밸류를 저장한 변수를 인자로 리스트업 해주는 함수를 호출
    paintTodo(newTodoobj);
    saveTodos();   
}

function saveTodos(){
    // localStorage엔 array 를 저장할 수 없다.
    // localStorage.setItem(toDosKey,toDos);
    // JS 오브젝트나 array를 string으로 바꿔주는 기능 사용
    // JSON.stringify(toDos)
    // localStorage.setItem(toDosKey,toDos); //[a,b,c]
    localStorage.setItem(toDosKey,JSON.stringify(toDos)); //['a','b','c']
    // JSON.stringify로 넘겨준 자료는 JSON.parse로 받아올 수 있지만
    // 그냥 넘겨준 자료(localStorage.setItem('todo',todo)는 JSON.parse로 받아오지 못하고 에러난다.
    // JSON.stringify 를 쓰는 포인트는 '["hi","hello"]' 리스트 째로 string화 시켜주기 때문에
    // 나중에 localStorage에서 저장된 정보를 load할때 for문을 돌릴 수 있기 때문.

    // JSON.stringify()형태로 저장된 string을 JS 객체 형식으로 가져올 수 있다.
    // 바로 JSON.parse()를 이용하면 '[1,2,3]'를 [1,2,3]으로 바꾸어줌.
}

function paintTodo(newTodo){
    // ul 태그안에 li 태그 생성하고 또 그 안에 span을 생성하여 입력값을 넣을 것임.
    // span을 생성하는 이유는 나중에 입력값을 삭제하는 버튼을 만들것이기 때문.
    
    // html에 'li'태그 생성
    const li = document.createElement('li');
    // li 에 id 값 넣기 className과 classList 사용하는 것과 비슷.
    // 넘겨받은 newTodo는 id,text 있는 객체.
    li.id = newTodo.id; 
    // html 에 'span'태그 생성
    const span = document.createElement('span');
    // delete button 생성
    const button = document.createElement('button');
    // list태그 안에 span태그 넣어줌
    li.appendChild(span);
    
    button.innerText =`❎`
    // button 별 css 적용 다르게 하려고 class name 추가함.
    button.classList.add('liButton');
    li.appendChild(button);
    // 입력값으로 받은 newTodo 를 넣어줌
    span.innerText=newTodo.text;
    todoList.appendChild(li);
    // 리스트업 된 입력값들을 지우는 버튼에 이벤트리스너추가 후 함수호출
    button.addEventListener('click',deletehandler);
}

function deletehandler(event){
    // 이 event에서 target된 button의 parent 는 li 이다.
    // 그 li 를 선택하여 지워주면 됨.
    // console.log(event.target.parentElement.innerText);
    const li = event.target.parentElement;
    // delete 될 때마다 id 출력
    // console.log(typeof li.id); //string
    li.remove();
    
    // localStorage 저장된 값은 어떻게 지울까?
    // localStorage.getItem.removeItem(key);
    // 위 코드에서 사용한 removeItem은 key 값을 찾아 해당 값을 지워준다. 
    // 모두 같은 key 값을 가지고 있는 toDos 같은 경우에는 
    // 이 방법으로 원하는 list 값을 하나씩 지우는 것은 불가능하다.
    // 따라서 각 입력값에 부여된 id를 이용해 
    // toDos 중에 삭제선택된 값을 제외한 후에 localStorage에 재저장하는 방법을 쓴다.
    // filter() 함수를 이용할 것. filter 함수는 true 값만 new array 로 반환한다.
    // toDos를 삭제된 값을 제외한 값으로 업데이트
    // 여기서 주의점! 데이터 타입 맞춰줘야 함.
    // li.id 는 string toDos.id 는 number type 임. 
    toDos = toDos.filter(item => item.id !== parseInt(li.id));
    // 마지막으로 저장함수 다시 호출해야 함!
    saveTodos();
}

// localStorage에 저장되어있는 값이 있으면 todo list에 나타내기 위한 과정.
const savedTodos = localStorage.getItem(toDosKey);
if(savedTodos){
    // console.log(savedTodos);
    const parsedTodos = JSON.parse(savedTodos);
    // console.log(parsedTodos);
    //restore old value to the toDos array
    toDos = parsedTodos;
    // forEach으로 array 밸류 각각에 대해 함수실행
    parsedTodos.forEach(paintTodo);
    // 이제 저장된 list를 새로고침 후에도 load 해서 browser에 보여줄 수 있다.
    // 문제는 여기서 list 를 추가할때 발생하는데, 기존 저장되어 있는 값이 다 지워지고 새 값들로 대체된다.
    // 그 이유는 입력값을 저장하기 위한 배열의 디폴트가 늘 비어있는 상태이기 때문.
    // const toDos =[]; 
    // handleTodoSubmit 함수가 시행될때마다 빈 배열에 새 값을 push 하고 localStorage에 저장한다.
    // let toDos =[]; 상수를 변수인 let으로 바꿔준 뒤 
    // handleTodoSubmit 함수실행 되기전에 parsedTodos 값을 빈 배열에 넣어주자.
    // toDos = parsedTodos;
}
// 이젠 delete함수에서 localStorage에서도 지우는 기능을 추가해야함.
// 이 때 value 값으로 찾아서 지우는 것은 값이 같을 때 문제가 생긴다. 
// 따라서 각각의 입력값에 고유 id를 주면 나중에 찾아낼 때 쉬워진다.
// 이를 구현하기 위해서는 애초 array에 입력값을 push할때
// 각각의 입력값을 id와 함께 객체형식으로 저장한다.
// let toDos =[{id:1, value:'a'},{id:2, value:'b'},...];
// random id는 Date 객체의 성질을 이용해 만들면 유용하다.
// Date.now() 는 밀리세컨(1000분의 1초)을 주는 함수다.
// 객체 형식으로 저장한 뒤 paintTodo()함수호출시 이 객체를 인자로 넘겨준 뒤 
// paintTodo() 함수 안에서 넘겨받은 객체의 id 를 html list의 id 값으로 부여하자.
// li.id = newTodo.id;

todoForm.addEventListener("submit",handleTodoSubmit);
