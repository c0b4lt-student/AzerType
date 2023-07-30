/**
 * Verifie si on est a la fin du dictionaire et affiche gameOver si oui
 */
function is_gameOver() {
  if (dictionary[index] === undefined) {
    stopTimer();
    printScreen("Game is over");
    guessArea.disabled = true;
    activatePlayAgainButton();
    if (!isGameOver) {
      activateSecretMode();
    }
  } else {
    printScreen(dictionary[index]);
  }
}

/**
 * Verifie les mots et verifie si la partie est finie
 */
function handleValidateButton() {
  if (!isTimerStart) {
    startTimer();
    isTimerStart = true;
  }
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
  validateWordBtn.innerText = "Validate";
  validateWordBtn.removeEventListener("click", handlePlayAgainButton)
  validateWordBtn.addEventListener("click", handleValidateButton);
}

function handlePlayAgainButton() {
  dictionary = shuffleAndFilterDictionary(dictionaries[user.mode]);
  guessArea.disabled = false;
  validateWordBtn.disabled = false;
  isGameOver = false;
  enableRadioList(radioList);
  activateValidateButton();
  printScreen(dictionary[0]);
  resetTimer();
}

function activatePlayAgainButton() {
  validateWordBtn.innerText = "Play again ?";
  validateWordBtn.removeEventListener("click", handleValidateButton);
  validateWordBtn.addEventListener("click", handlePlayAgainButton);
}
