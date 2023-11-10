// 현재시각과 크리스마스 디데이카운터를 만들기

//today's clock
const clock = document.querySelector("#clock");

function getClock(){
    const date = new Date;
    
    const hour = String(date.getHours()).padStart(2,"0");
    const minute = String(date.getMinutes()).padStart(2,"0");
    const second = String(date.getSeconds()).padStart(2,"0");
    
    clock.innerText= `/${hour}:${minute}:${second}\\`
}
getClock();
setInterval(getClock, 1000);



//christmas dday counter
const xclock = document.querySelector("#xclock");

function ddayClock(){
    
    const xmas = new Date (2023, 11, 25, 0, 0, 0); //월은 0부터 시작. "2023,12,25,0,0,0" 따옴표 넣으면 12로 해도 됨.
    const today = new Date ();

    // 크리스마스와 오늘과의 날짜 차이 : 밀리세컨단위
    const diff = xmas-today;
    
    const diffDay = String(Math.floor(diff / (24*60*60*1000))).padStart(2,"0");
    const diffHour = String(Math.floor((diff / (60*60*1000)) % 24)).padStart(2,"0");
    const diffMin = String(Math.floor((diff / (60*1000)) % 60)).padStart(2,"0");
    const diffSec = String(Math.floor(diff / 1000 % 60)).padStart(2,"0");
    
    xclock.innerText= `/${diffDay}d ${diffHour}h ${diffMin}m ${diffSec}s\\`
}
ddayClock();
setInterval(ddayClock, 1000);


