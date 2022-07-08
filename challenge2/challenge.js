const body = document.querySelector("body");

function handleWindowSize() {
  const windowWidth = window.innerWidth;
  if (windowWidth <= 900) {
    body.className = "small";
  } else if (windowWidth > 900 && windowWidth <= 1400) {
    body.className = "medium";
  } else {
    body.className = "large";
  }
}

window.addEventListener("resize", handleWindowSize);
