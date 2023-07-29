/**
 * La boucle principale
 */
function gameLoop() {
  initAddEventListenerPopup();
  printScreen(dictionary[index]);
  activateOptionRadioList();
  allowEnterKey();
  activateValidateButton();
  activateForm();
}
