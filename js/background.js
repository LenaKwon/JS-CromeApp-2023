// image 가져올 때 vscode에서 paste image 란 익스텐션을 설치함 
// 인터넷에서 원하는 이미지를 이미지 복사
// css나 html 에 붙여넣기 cmd+option+v 하면 사진 경로와 함께 복사본이 생성됨.
// img 폴더로 옮겨서 정리

const images = ['1.png','2.png','3.png','4.png'];
const chosenImage = images[Math.floor(Math.random()*images.length)];

// 우리가 만들고 싶은 동작은 배경이미지가 계속 변경되는 것이기 때문에
// js에서 html 태그 <img src ='img/1.png' /> 생성하기
// <img src ='img/1.png' /> 이 태그를 js에서 밑에 두줄로 표현
const bgimage = document.createElement('img');
bgimage.src = `img/${chosenImage}`;

//append 는 맨 뒤에, prepend는 맨 앞에 코드 붙여줌.
document.body.appendChild(bgimage);

// 파일경로 주의점!
//`img/${chosenImage}` 에 슬래쉬 하나 더 붙여서 에러났었음.
//   / # 가장 최상의 Directory (root)
//  ./ # 현재 Directory
// ../ # 상위 Directory


// 아래 코드로 할 수도 있지만, style은 css 하는게 좋다고 생각함.
// document.body.style.backgroundImage = `url(img/${chosenImage})`;
//document.body.style.backgroundPosition = "top";
// document.body.style.backgroundRepeat = "no-repeat";
// document.body.style.backgroundSize = "cover";
// document.body.style.backgroundAttachment = "fixed";