let [seconds, minutes, hours] = [0, 0, 0];

const displayTime = document.getElementById("displayTime");
const startPauseBtn = document.getElementById("startPauseBtn");
const statusText = document.getElementById("statusText");

let timer = null;
let isRunning = false;

function updateDisplay() {
  let h = hours < 10 ? "0" + hours : hours;
  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;

  displayTime.innerHTML = `${h}:${m}:${s}`;
}

function stopwatch() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;

    if (minutes === 60) {
      minutes = 0;
      hours++;
    }
  }

  updateDisplay();
}

function toggleWatch() {
  if (!isRunning) {
    timer = setInterval(stopwatch, 1000);
    isRunning = true;
    startPauseBtn.src = "images/pause.png";
    statusText.innerHTML = "Stopwatch is running";
  } else {
    clearInterval(timer);
    timer = null;
    isRunning = false;
    startPauseBtn.src = "images/start.png";
    statusText.innerHTML = "Stopwatch is paused";
  }
}

function watchStop() {
  clearInterval(timer);
  timer = null;
  isRunning = false;
  startPauseBtn.src = "images/start.png";
  statusText.innerHTML = "Stopwatch stopped";
}

function watchReset() {
  clearInterval(timer);
  timer = null;
  isRunning = false;

  seconds = 0;
  minutes = 0;
  hours = 0;

  updateDisplay();
  startPauseBtn.src = "images/start.png";
  statusText.innerHTML = "Ready to start";
}

updateDisplay();