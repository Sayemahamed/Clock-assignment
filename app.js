let clock = new Date();

let docHour = document.getElementsByClassName("hour")[0];
let docMinute = document.getElementsByClassName("minute")[0];
let docSecond = document.getElementsByClassName("second")[0];
let hour = clock.getHours();
console.log(hour);
let minute = clock.getMinutes();
let second = clock.getSeconds();
let displayHour = "";
let displayMinute = "";
let displaySecond = "";
function updateDisplay() {
  if (second < 10) displaySecond = "0" + second;
  else displaySecond = second;
  if (minute < 10) displayMinute = "0" + minute;
  else displayMinute = minute;
  if (hour < 10) displayHour = "0" + hour;
  else displayHour = hour;
  docHour.innerHTML = displayHour;
  docMinute.innerHTML = displayMinute;
  docSecond.innerHTML = displaySecond;
}
function updateTime() {
  second++;
  if (second >= 60) {
    second = 0;
    minute++;
  }
  if (minute >= 60) {
    minute = 0;
    hour++;
  }
  if (hour > 12) {
    hour -= 12;
  }
  updateDisplay();
}
updateTime();
window.setInterval(updateTime, 1000);
