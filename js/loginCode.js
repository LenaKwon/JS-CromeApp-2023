
const loginForm = document.querySelector("#login-form");
const inputForm = document.querySelector("#login-form input"); // input만 적으면 인식못함
const greeting = document.querySelector("#greeting");

console.log(loginForm)

const USERNAME_KEY = 'username'; //변수 아닌 key : string
function loginSubmit (event){
    event.preventDefault();
    loginForm.classList.add('hidden');
    const username = inputForm.value;
    console.log(username);
    localStorage.setItem(USERNAME_KEY,username);
    paintgreetings(username);
}

function paintgreetings(username){
    greeting.classList.remove('hidden');
    greeting.innerText= `Hello ${username} !`;
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    //show form
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit",loginSubmit);
}else{
    //greeting
    paintgreetings(savedUsername);
}