/**
 * The main game loop.
 * This function sets up the game by initializing various event listeners
 * and activating different components of the game.
 * It is responsible for starting the game and handling user interactions.
 */
function gameLoop() {
  // Initialize event listeners for the popup and handle form submissions
  initAddEventListenerPopup();

  // Display the first word from the dictionary on the screen
  printScreen(dictionary[index]);

  // Activate the event listeners for the option radio buttons
  activateOptionRadioList();

  // Activate the switch color button to toggle dark mode
  activateSwitchColorButton();

  // Activate event listeners for the guess area, allowing the user to input their answer
  activateGuessArea();

  // Activate the validate button to start the timer and check the user's answer
  activateValidateButton();

  // Activate the form submission, which handles sharing the score via email
  activateForm();
}