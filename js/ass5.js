// 과제5: 브라우저 변경에 따른 배경색 바꾸기

// # my code
// 내 코드는 js 파일에서 css 코드 분리도 못했고, 
//classList의 add,remove쓰지 않음

// function handleResize() {
//   let width = window.innerWidth;
//   if (width < 200) {
//     document.body.style.backgroundColor = "cornflowerblue";
//   } else if (width >= 200 && width < 400) {
//     document.body.style.backgroundColor = "tomato";
//   } else if (width >= 400 && width < 600) {
//     document.body.style.backgroundColor = "mediumpurple";
//   }
// }

// window.addEventListener("resize", handleResize);



// solution
const body = document.body;

const BIG_SCREEN = "bigScreen";
const MEDIUM_SCREEN = "mediumScreen";
const SMALL_SCREEN = "smallScreen";

function handleResize() {
  const width = window.innerWidth;
  if (width > 1000) {
    body.classList.add(BIG_SCREEN);
    body.classList.remove(MEDIUM_SCREEN);
  } else if (width <= 1140 && width >= 700) {
    body.classList.add(MEDIUM_SCREEN);
    body.classList.remove(BIG_SCREEN, SMALL_SCREEN);
  } else {
    body.classList.remove(MEDIUM_SCREEN);
    body.classList.add(SMALL_SCREEN);
  }
}

window.addEventListener("resize", handleResize);