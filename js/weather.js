const API_KEY = "db4ced912049623912b506c19f48ef26";

function onGeoOk(position){
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log('You live in',lat,lon);
    //https://openweathermap.org/api
    // api > current weather data > api doc > api call
    // {lat} {log} position 에서 얻은 위도 경도값 복붙 
    // {API key} 사이트에 닉네임누르면 my API keys 클릭해서 복붙
    const url =`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    //console.log(url);
    // fetch(url);
    // 개발자도구에서 network 확인해보면 fetch를 사용해 url을 불러오는걸 알수 있음.
    // network > name 에 떠있는 정보를 클릭하면 상세정보가 뜨는데 
    // 그 중 preview 안에 있는 내용에서 우리는 필요한 정보를 가져올 것이다.
    // 온도는 화씨로 나옴. 이를 섭씨로 바꾸고 싶음
    // API 웹페이지로 돌아가면 parameter 중에 units of measurement 에 metric 이 있다.
    // network name 내용을 오른클릭해서 open in new tab 누르면 정보들이 뜨는데
    // 주소창 url 맨 끝에 &units=metric 을 추가하면 기온이 섭씨로 바뀐다.

    // fetch 는 시간이 좀 걸린 후 일어나는 promise 이다.
    // 서버가 응답하는데 5분이 걸린다고 하면 우리는 응답을 기다려야함 
    // 이때 필요한 게 then()이라는 함수.
    // 응답에서 JASON 파일(정보가 담긴 문자열정보 in preview )을 추출한 뒤
    // fetch(url).then(response=>response.JASON())
    // 필요한 data를 얻을 것. 여기서 jason 은 소문자
    // fetch(url)
    //  .then((response) => response.jason())
    //  .then((data)=>{
    //     console.log(data.name, data.weather[0].main);
    // });
    // 이 코드가 계속 에러남 
    // Uncaught (in promise) TypeError: response.json is not a function

    // 아래코드 동작함
    // 다른 점이라면 json 파일객체를 먼저 다 가져온 후 데이터 추출함
    fetch(url)
    .then(response => { return response.json();})
    .then(responseData => {console.log(responseData); return responseData;})
    .then((data)=>{
        // console.log(data.name, data.weather[0].main);
        const city = document.querySelector("#weather h3:first-child");
        const weather= document.querySelector("#weather h3:last-child");
        city.innerText = data.name ;
        weather.innerText = `Today's weather is ${data.weather[0].main}`;
    });


}
function onGeoError(){
    alert("Sorry, Can't find you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);