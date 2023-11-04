// 3.6-3.8 강의 내용 summary: 클릭에 따라 색변경하기 
// className vs classList 비교하여 기능구현의 흐름을 이해하고,
// 메소드를 활용해 심플코드 작성하기.

const h1 = document.querySelector("div.hello:first-child h1");

function handleClick(){
    // h1.className = "clicked"; 
    // 먼저 css에서 클래스이름(.clicked)을 정한 후에 적용하고 싶은 style을 넣는다.
    // 이 '.clicked' css를 적용하고 싶은 html 태그를 JS 에서 선택하여 className을 부여할 수 있음.
    // 이는 html 에서 먼저 id,class 이름을 다 지정하고 그 id,class를 찾아 스타일을 주고, 액션을 주는 것과는 정반대의 흐름
    // 결국 나중에 수정하기 편한 코드를 만들기 위함.
    // JS 에서 필요한 태그에 접근해 스타일을 씌우거나 동작을 주면 일일히 id나 class명을 찾아 수정해야하는 수고를 덜 수 있기 때문.
    // 코딩의 기본 자세는 게으름!
    
     
    // h1.addEventListener("click",handleClick);
    // 현재 handleClick라는 함수 안에서 코드를 쓰고 있으므로
    // addEventListener가 click 이란 이벤트를 받았을때에, 
    // h1 태그에 className이 선언된다.

    // js 와 css 는 다이렉트로 소통을 하지 않는다. 
    // js 가 html을 수정하면 html을 보고 있던 css가 액션한다.
    // h1.className은 getter 이자 setter 이기 때문에 update 할 수 있다.
    // h1 태그에 clicked 란 class가 없으면 추가해주고, 
    // 추가한 후엔 다시 없애서 디폴트 상태를 만들어 동작의 무한 반복이 가능하게 함. 
    // clicked 클래스가 추가된 상태에선 clicked css조건에 따라 색이 변경되고, 제거된 상태에선 디폴트로 돌아감.
    // 이는 toggle의 기능을 풀어둔 코드라고 볼 수 있다.

    //const clickedClass = "clicked";

    // css에 지정한 class 이름을 그대로 쓰기보다는 변수에 저장해서 쓰면 나중에 변경했을때 수정도 쉬움.
    
    // if(h1.className === "clickedClass"){
    //     h1.className=""
    // }else{
    //     h1.className="clickedClass"
    // }

    // # 버그 위험의 상황
    // h1 태그에 이미 다른 클래스이름이 있다면 className을 사용하는 위의 코드는 
    // 기존의 클래스네임을 지워버리고 대체되어버리는 버그가 생길 수 있다.
    // 그렇다면 어떻게 기존의 클래스이름도 유지하면서 다른 클래스이름을 추가/제거할 수 있을까?
    // 이때 필요한 것이 classList 이다.  
    // classList 는 유사배열로서 해당태그의 모든 클래스 네임을 가지고 있다.
    // classList는 DOMTokenList라는 객체를 가지고 있고, 
    // 그 객체는 사용가능한 여러가지 메소드를 가지고 있다. (contain(), add(), remove(), toggle()...)
    
    // 이제 위의 코드를 classList 를 이용해 버그가 생기지 않는 코드로 바꿔보자
    
    // if(h1.classList.contains(clickedClass)){
    //     h1.classList.remove(clickedClass);
    // }else{
    //     h1.classList.add(clickedClass);
    // }

    // 이 코드는 사실 toggle의 기능을 구현한 코드라고 볼 수 있다.
    // 따라서 아래처럼 한줄의 코드로 같은 기능이 구현됨. 
    // clicked도 한번만 쓰면되니 변수도 없애서 썼다.
    
    h1.classList.toggle("clicked");
    
}
h1.addEventListener("click",handleClick);


