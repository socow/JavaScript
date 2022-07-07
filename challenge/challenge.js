const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
const title = document.querySelector("h2");

const superEventHandler = {
  //마우스가 title위로 올라가면 텍스트가 변경
  onMouse: function () {
    document.querySelector("h2").style.color = colors[0];
    title.innerText = "The mouse is here!";
  },

  //마우스가 title을 벗어나면 텍스트가 변경
  outMouse: function () {
    document.querySelector("h2").style.color = colors[1];
    title.innerText = "The mouse is gone!";
  },

  //마우스를 우클릭하면 title 변경
  rightClick: function () {
    document.querySelector("h2").style.color = colors[3];
    title.innerText = "That was a right click!";
  },

  //브라우저 창의 사이즈가 변하면 title 변경
  resize: function () {
    document.querySelector("h2").style.color = colors[2];
    title.innerText = "You just resized!";
  },
};

title.addEventListener("mouseover", superEventHandler.onMouse);
title.addEventListener("mouseleave", superEventHandler.outMouse);
title.addEventListener("contextmenu", superEventHandler.rightClick);
window.addEventListener("resize", superEventHandler.resize);
