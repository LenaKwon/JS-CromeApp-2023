const loginForm =document.querySelector("#login-form");
const loginInput =document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASS= 'hidden';
    // string만 포함된 변수는 대문자로 표기하는 convention
const USERNAME_KEY= 'username';

function onLoginSubmit(event){
    // submit된 정보가 새로고침(submit의 default 액션)으로 사라지지 않도록 설정. 
    event.preventDefault(); 
    // console.log(event)
    // 콘솔에서 제출된 정보들을 살펴볼 수 있다. 제출자,제출시간,타입,defaultPrevented...
    // console.log(loginInput.value);
    // 비로소 콘솔에 밸류가 남아있게 됨 
    
    //이름 입력시 입력창을 사라지게 한다.
    loginForm.classList.add(HIDDEN_CLASS);

    // greeting에 사용자이름 활용하기 위해 입력 밸류를 변수에 저장해둔다.
    const username = loginInput.value;

    // html에 h1 태그를 만들고 id=greeting 부여하고, 
    // 사용자이름이 입력되기 전까지 안보이게 하기 위해 hidden 클래스로 지정한다.
    // 저장된 username 값을 h1 안의 텍스트로 넣는다.
    // greeting.innerText = "Hello " + username +"!!!";
    // 위의 코드와 똑같이 동작하는 코드
    // greeting.innerText = `Hello ${username}!!!`;

    // greeting 인삿말이 보이게 하기 위해 h1의 hidden클래스를 제거한다.
    // greeting.classList.remove(HIDDEN_CLASS);

    paintgreetings(username); //onLoginSubmit함수 안에서 쓰일때 input value에서 옴
}
// loginForm.addEventListener('submit',onLoginSubmit);
// login 시에 사용하는 input은 form 안에 속할때만 속성들이 동작한다.
// input은 엔터나 버튼 누를때 submit 됨
// submit 을 할때마다 페이지 새로고침 preventDefault 리액트강의에서 본거 같음.

// 여기서 이 두줄의 코드가 두번 반복되니 따로 함수로 만들어 줄수도 있음.
function paintgreetings(username){
    greeting.innerText=`Hello ${username}!!!`;
    greeting.classList.remove(HIDDEN_CLASS);
}

// 우리는 username을 계속 기억하고 싶다. 유투브에 볼륨을 조절하면 브라우저가 기억하듯이
    // 우리도 API 에 있는 localStorage라는 것을 쓸 것이다.
    // 개발자도구 Application에 보면 localStorage가 있다.
    // 첫번째 인자로 key, 두번째 인자로 value 넣으면 된다.
    // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
    // localStorage.setItem("username",USERNAME_KEY);

    // 이제 localStorage의 username 정보 유무를 조건으로 
    // username이 없다면 form이 보이고, username이 저장되어있다면 greeting을 하는 조건문을 써보자.

    const savedUsername = localStorage.getItem(USERNAME_KEY);
    //username 이 반복되니 USERNAME_KEY 변수에 넣어 get,set 바꿔줌

    // 조건문 시작전에 localStorage에 값이 없을때 form을 보여주고 싶으니까
    // form 기본값을 hidden으로 먼저 바꿔주겠음
    if(savedUsername === null){
        //show the form
        loginForm.classList.remove(HIDDEN_CLASS);
        // 위의 코드 옮겨옴. onLoginSubmit 함수를 호출 전에 
        // 먼저 localStorage 의 username 유무를 먼저 확인하는 조건이 먼저 선행되어야 하고,
        // 없을때 form이 나타나고,submit 이벤트가 발생했을때 onLoginSubmit 함수 호출함
        loginForm.addEventListener('submit',onLoginSubmit);
    }else{
        // greeting
        // greeting.innerText=`Hello ${savedUsername}!!!`;
        // greeting.classList.remove(HIDDEN_CLASS);
        // 위 두줄의 코드 반복되니 함수 paintgreetings()로 만들어서 함수 호출.
        // else 문에서 함수호출시 argument는 localStorage에서 옴
        // onLoginSubmit 함수안의 argument는 input value라 다름을 유의!
        paintgreetings(savedUsername);    
    }

