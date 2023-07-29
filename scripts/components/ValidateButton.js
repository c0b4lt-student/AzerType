/**
 * Verifie si on est a la fin du dictionaire et affiche gameOver si oui
 */
function is_gameOver() {
  if (dictionary[index] === undefined) {
    stopTimer();
    printScreen("Game is over");
    validateWordBtn.disabled = true;
    guessArea.disabled = true;
  } else {
    printScreen(dictionary[index]);
  }
}

/**
 * Verifie les mots et verifie si la partie est finie
 */
function handleValidateButton() {
  if (guessArea.value === dictionary[index]) {
    user.score++;
    index++;
    is_gameOver(dictionary, index);
  }
  guessArea.value = "";
}

/**
 * Active le bouton valider
 * Lors d'un clique, start the timer and check if player wins
 */
function activateValidateButton() {
  validateWordBtn.addEventListener("click", () => {
    if (!isTimerStart) {
      startTimer();
      isTimerStart = true;
    }
    handleValidateButton();
    if (index > 0)
      disableRadioList(radioList);
  });
}