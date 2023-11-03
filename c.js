// 과제5: 브라우저 변경에 따른 배경색 바꾸기

console.log(window.innerWidth);

function handleResize() {
  let width = window.innerWidth;
  if (width < 200) {
    document.body.style.backgroundColor = "cornflowerblue";
  } else if (width >= 200 && width < 400) {
    document.body.style.backgroundColor = "tomato";
  } else if (width >= 400 && width < 600) {
    document.body.style.backgroundColor = "mediumpurple";
  }
}

window.addEventListener("resize", handleResize);