// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const title = document.querySelector("h2");
console.log(title);
title.innerText = "This is a JS event challenge!";
title.style.color = colors[0];

const superEventHandler = {
  handleClick: () => {
    title.style.color = colors[0];
    title.innerText = "You have Clicked!!!!";
  },
  handleMouseEnter: () => {
    title.style.color = colors[1];
    title.innerText = "Do you want to click?";
  },
  handleMouseLeave: () => {
    title.style.color = colors[2];
    title.innerText = "Okay, you don't want to...";
  },
  handleResize: () => {
    document.body.style.backgroundColor = colors[3];
  },
  handleContextmenu: () => {
    title.style.color = colors[4];
    title.innerText = "What do you want to do?";
  }
};

title.addEventListener("click", superEventHandler.handleClick);
title.addEventListener("mouseenter", superEventHandler.handleMouseEnter);
title.addEventListener("mouseleave", superEventHandler.handleMouseLeave);

window.addEventListener("resize", superEventHandler.handleResize);
window.addEventListener("contextmenu", superEventHandler.handleContextmenu);
