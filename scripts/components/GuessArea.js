/**
 * Autorise la touche "Entrer" comme moyen de validation
 * Si lors d'une validation le joueur a reussi une fois, bloque le menu des options
 * @param {Array.<string>} dictionary
 * @param {number} index
 * @param {number} length
 */
function allowEnterKey() {
  guessArea.addEventListener("keydown", (e) => {
    startTimer();
    if (e.key === "Enter" && dictionary[index] !== undefined) {
      handleValidateButton();
      if (index > 0)
        disableRadioList(radioList);
    }
  });
}