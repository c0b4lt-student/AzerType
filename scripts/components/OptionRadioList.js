/**
 * Disables a list of radio buttons.
 * @param {NodeListOf<HTMLInputElement>} radioList - The list of radio buttons to be disabled.
 */
function disableRadioList(radioList) {
  for (let i = 0; i < radioList.length; i++) {
    radioList[i].disabled = true;
  }
}

/**
 * Enables a list of radio buttons.
 * @param {NodeListOf<HTMLInputElement>} radioList - The list of radio buttons to be enabled.
 */
function enableRadioList(radioList) {
  for (let i = 0; i < radioList.length; i++) {
    radioList[i].disabled = false;
  }
}

/**
 * Adds a "click" event listener to the options in a radio button list.
 * Changes the dictionary based on the selected option.
 */
function activateOptionRadioList() {
  for (let i = 0; i < radioList.length; i++) {
    radioList[i].addEventListener("click", (e) => {
      user.mode = e.target.value;
      dictionary = shuffleAndFilterDictionary(dictionaries[Number(e.target.value)]);
      printScreen(dictionary[index]);
    });
  }
}

/**
 * Activates the secret mode in the application/game.
 * - Sets the game state to "game over".
 * - Makes the loveRadio and loveLabel elements visible.
 * - Resets the index to 0 (starting position of the dictionary).
 * - Disables all radio options except the third one.
 */
function activateSecretMode() {
  isGameOver = true;
  loveRadio.classList.remove("d-none");
  loveLabel.classList.remove("d-none");
  index = 0;
  disableRadioList(radioList);
  radioList[2].disabled = false;
}