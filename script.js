// Selecting the key sections
const mSecond = document.querySelector(".msec");
const second = document.querySelector(".sec");
const minute = document.querySelector(".min");
const hour = document.querySelector(".hr");
const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");

let msc = 00;
let sc = 00;
let mn = 00;
let hr = 00;

function timer() {
  msc++;
  if (msc > 9) {
    sc++;
    mSecond.innerHTML = msc;
    second.innerHTML = "0" + sc;
    msc = 0;
  }
  if (sc > 9) {
    second.innerHTML = sc;
  }
  if (sc > 60) {
    mn++;
    sc = 0;
    second.innerHTML = sc;
    minute.innerHTML = "0" + mn;
  }
  if (mn > 59) {
    hr++;
    mn = 0;
    hour.innerHTML = "0" + hr;
  }
  if (hr > 9) {
    hour.innerHTML = hr;
  }
  mSecond.innerHTML = "0" + msc;
}

let interval;
const startTimer = () => {
  interval = setInterval(timer, 100);
};

const stopTimer = () => {
  clearInterval(interval);
};

const resetTimer = () => {
  mSecond.innerHTML = "0" + 0;
  second.innerHTML = "0" + 0;
  minute.innerHTML = "0" + 0;
  hour.innerHTML = "0" + 0;
  ms = 0;
  sc = 0;
  mn = 0;
  hr = 0;
  stopTimer();
};

start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
reset.addEventListener("click", resetTimer);
