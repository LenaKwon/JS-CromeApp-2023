// 3.6-3.8 강의 내용: 클릭에 따라 색변경하기 
// className vs classList 비교하여 기능구현의 흐름을 이해하고,
// 메소드를 활용해 심플코드 작성하기.

const h1 = document.querySelector("div.hello:first-child h1");

//function handleClick(){
    //h1.className = "active"; // css 에서 설정해둔 style을 적용하고 싶은 태그에 정해둔 클래스이름 지정
    //html을 기본으로 click 이란 이벤트가 발생하면, className을 만든다.
    //js 과 css 는 다이렉트로 소통을 하지 않는다. 
    //js 가 html을 수정하면 html을 보고 있던 css가 액션한다.
    // h1.className은 getter 이자 setter 이기 때문에 update 할 수 있다.
    //h1 은 원래 active란 class 가 없으니, 없으면 추가해주고, 생겼을때는 다시 없애줘서 디폴트상태를 만듬
    // 그래서 클래스 active를 가진 상태에선 css조건에 따라 색이 변경된는 것이다.
    // toggle의 기능을 갖춘 코드라고 볼 수 있다.

    const clickedClass = "clicked";

    //css에 지정한 class 이름을 그대로 쓰기보다는 변수에 저장해서 쓰면 나중에 변경했을때 수정도 쉬움.
    // if(h1.className === "clickedClass"){
    //     h1.className=""
    // }else{
    //     h1.className="clickedClass"
    // }
    //h1 이 이미 class이름이 있다면 위의 조건문으로 기존의 클래스네임이 대체되어버리는 버그가 생길 수 있다.
    //그때 필요한 것이 classList이다 classList는 여러가지 메소드가 있다.
    // contain,add, remove, toggle
    //이제 위의 코드를 classList 로 바꿔줄 수 있다.
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // }else{
    //     h1.classList.add(clickedClass);
    // }
    //이 코드는 사실 toggle의 기능을 구현한 코드라고 볼 수 있다.
    //아래처럼 한줄의 코드로 구현됨. clicked도 한번만 쓰면되니 변수도 없애버림
    h1.classList.toggle("clicked");
    
//}
h1.addEventListener("click",handleClick);


