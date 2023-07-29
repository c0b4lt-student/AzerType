let [milliseconds, seconds, minutes] = [0, 0, 0];
let timer = null;
let isTimerStart = false;

/**
 * Affiche le temps de la watch dans la zone du timer
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
 * Démarre le timer et l'empêche de redémarrer
 */
function startTimer() {
  if (!isTimerStart) {
    timer = setInterval(displayTimer, 10);
    guessArea.addEventListener("focus", (e) => {
      if (timer != null) {
        clearInterval(timer);
      }
    });
    isTimerStart = true;
  }
}

/**
 * Arrete le timer
 */
function stopTimer() {
    clearInterval(timer);
}
