let [milliseconds, seconds, minutes] = [0, 0, 0];
let timer = null;
let isTimerStart = false;

/**
 * Displays the elapsed time in the timer area.
 */
function displayTimer() {
  milliseconds += 10;
  if (milliseconds === 1000) {
    milliseconds = 0;
    seconds++;
    if (seconds === 60) {
      seconds = 0;
      minutes++;
    }
  }

  let m = minutes < 10 ? "0" + minutes : minutes;
  let s = seconds < 10 ? "0" + seconds : seconds;
  let ms = milliseconds < 10 ? "00" + milliseconds : milliseconds < 100 ? "0" + milliseconds : milliseconds;
  timerArea.innerHTML = ` ${m} : ${s} : ${ms}`;
}

/**
 * Starts the timer and prevents it from restarting if already running.
 */
function startTimer() {
  if (!isTimerStart) {
    timer = setInterval(displayTimer, 10);
    isTimerStart = true;
  }
}

/**
 * Resets the timer and updates the timer display to "00 : 00 : 000" format.
 */
function resetTimer() {
  clearInterval(timer);
  [milliseconds,seconds,minutes] = [0,0,0];
  timerArea.innerHTML = `00 : 00 : 000`;
}

/**
 * Stops the timer by clearing the timer interval and setting the isTimerStart flag to false.
 */
function stopTimer() {
    clearInterval(timer);
    isTimerStart = false;
}
