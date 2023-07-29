/**
 *  desactive un menu radio
 * @param {object} radioList - tout les elements radio que l on veux desactiver
 */
function disableRadioList(radioList) {
  for (let i = 0; i < radioList.length; i++) {
    radioList[i].disabled = true;
  }
}

/**
 * Ajoute l'evenement "click" sur les options
 * Change le dictionaire en fonction de l'option activé
 */
function activateOptionRadioList() {
  for (let i = 0; i < radioList.length; i++) {
    radioList[i].addEventListener("click", (e) => {
      dictionary = dictionaries[Number(e.target.value)];
      printScreen(dictionary[index]);
      if (e.target.value === "2") {
        guessArea.disabled = false;
        validateWordBtn.disabled = false;
        resetTimer();
      }
    });
  }
}

function activateSecretMode() {
  isGameOver = true;
  loveRadio.classList.remove("d-none");
  loveLabel.classList.remove("d-none");
  index = 0;
  disableRadioList(radioList);
  radioList[2].disabled = false;
}