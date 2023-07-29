/**
 * La boucle principale
 */
function gameLoop() {
  initAddEventListenerPopup();
  printScreen(dictionary[index]);
  activateOptionRadioList();
  activateSwitchColorButton();
  allowEnterKey();
  activateValidateButton();
  activateForm();
}
