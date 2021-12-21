const black = document.getElementById("black");
const white = document.getElementById("white");
const body = document.body;
white.style.backgroundColor = "rgb(194, 181, 181)";

black.addEventListener("click", changeBgColor);
white.addEventListener("click", changeBgColor);

function changeBgColor(e) {
  if (e.target.classList.contains("white")) {
    body.style.backgroundColor = "white";
    white.style.transform = "translateX(-3rem)";
    white.style.transition = "all ease-in 0.4s";
    white.style.backgroundColor = "black";
    body.style.color = "black";
    setTimeout(() => {
      white.style.zIndex = "-1";
      black.style.backgroundColor = "black";
    }, 500);
  } else {
    body.style.backgroundColor = "black";
    body.style.color = "white";
    black.style.backgroundColor = "rgb(194, 181, 181)";
    white.style.backgroundColor = "white";
    white.style.transform = "translateX(0)";
    white.style.transition = "all ease-in 0.4s";
    white.style.zIndex = "1";
  }
}
