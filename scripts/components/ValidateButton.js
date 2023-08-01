/**
 * Checks if we have reached the end of the dictionary and takes appropriate actions if that's the case.
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
 * Checks the user's input against the current word in the dictionary, updates the score if the input matches the word,
 * and checks if the game is over.
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
 * Sets up the "Validate" button to start the timer and check if the player wins.
 * When the button is clicked, it starts the timer and checks if the user's input is correct.
 */
function activateValidateButton() {
  validateWordBtn.innerText = "Validate";
  validateWordBtn.removeEventListener("click", handlePlayAgainButton)
  validateWordBtn.addEventListener("click", handleValidateButton);
}

/**
 * Handles the behavior of the "Play Again" button.
 * It shuffles and filters the dictionary based on the user's selected mode,
 * enables input and validation for the guessing area, and resets the game state
 * to start a new round. The function also resets the timer and updates the screen
 * with the first word from the shuffled dictionary.
 */
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

/**
 * Activates the "Play Again" button functionality.
 * It updates the button text to "Play again?", removes the previous click event listener
 * for validation, and adds a new event listener to handle starting a new round.
 */
function activatePlayAgainButton() {
  validateWordBtn.innerText = "Play again ?";
  validateWordBtn.removeEventListener("click", handleValidateButton);
  validateWordBtn.addEventListener("click", handlePlayAgainButton);
}
