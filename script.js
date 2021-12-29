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
    msc = 0;
  }
  if (sc > 59) {
    mn++;
    sc = 0;
  }
  if (mn > 59) {
    hr++;
    mn = 0;
  }
  console.log(msc);
  mSecond.innerHTML = msc;
  second.innerHTML = sc;
  minute.innerHTML = mn;
  hour.innerHTML = hr;
}

const startTimer = () => {
  setInterval(timer(), 100);
};

const stopTimer = () => {
  clearInterval();
};
start.addEventListener("click", startTimer);
stop.addEventListener("click", stopTimer);
