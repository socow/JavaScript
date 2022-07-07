const h1 = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
  h1.style.color = "blue";
}

function handleMouseenter() {
  h1.innerText = "mouse is here!";
}

function handleMousLeave() {
  h1.style.color = "red";
  h1.innerText = "mouse is gone! ";
}

function handleWindowResize() {
  document.body.style.backgroundColor = "tomato";
}
h1.addEventListener("click", handleTitleClick);
h1.addEventListener("mouseenter", handleMouseenter);
h1.addEventListener("mouseleave", handleMousLeave);

window.addEventListener("resize", handleWindowResize);
