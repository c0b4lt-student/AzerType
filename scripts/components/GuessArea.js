/**
 * Enables the "Enter" key as a means of validation.
 * If the player succeeds in a validation once, it locks the options menu.
 */
function allowEnterKey() {
  guessArea.addEventListener("keydown", (e) => {
    if (document.activeElement === guessArea) {
      startTimer();
    }
    if (e.key === "Enter" && dictionary[index] !== undefined) {
      handleValidateButton();
      if (index > 0)
        disableRadioList(radioList);
    }
  });
}

/**
 * Listens for the "focusout" event on the guessArea element and calls the stopTimer function when the event occurs.
 */
function handleFocusOut() {
  guessArea.addEventListener("focusout", () => {
    stopTimer();
  });
}

/**
 * Activates the guessArea element by attaching event listeners for Enter key and focusout events.
 */
function activateGuessArea() {
  allowEnterKey();
  handleFocusOut();
}
