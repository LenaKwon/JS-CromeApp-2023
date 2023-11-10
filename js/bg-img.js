// image 가져올 때 vscode에서 paste image 란 익스텐션을 설치함 
// 인터넷에서 원하는 이미지를 이미지 복사
// css나 html파일 에 붙여넣기 맥(cmd+option+v) 하면 사진경로와 함께 복사본이 생성됨.
// img 폴더로 옮겨서 정리

const images = ['1.png','2.png','3.png','4.png','5.png'];
const chosenImage = images[Math.floor(Math.random()*images.length)];

// 우리가 만들고 싶은 동작은 새로고침할 때마다 배경이미지가 계속 변경되는 것이다.
// js에서 html파일에 태그 <img src ='img/1.png' />를 생성하기
// 이 태그는 js 파일에서 밑에 두줄의 코드로 표현
const bgimage = document.createElement('img');
bgimage.src = `img/${chosenImage}`;

//append 는 맨 뒤에, prepend는 선택된 element 맨 앞에 코드 붙여줌.
document.body.appendChild(bgimage);

// 파일경로 주의점!
// `img/${chosenImage}` 에 슬래쉬 하나 더 붙여서 에러났었음.
//   / # 가장 최상의 Directory (root)
//  ./ # 현재 Directory
// ../ # 상위 Directory

