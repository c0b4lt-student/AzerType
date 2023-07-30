/**
 *  desactive un menu radio
 * @param {object} radioList - tout les elements radio que l on veux desactiver
 */
function disableRadioList(radioList) {
  for (let i = 0; i < radioList.length; i++) {
    radioList[i].disabled = true;
  }
}

function enableRadioList(radioList) {
  for (let i = 0; i < radioList.length; i++) {
    radioList[i].disabled = false;
  }
}

/**
 * Ajoute l'evenement "click" sur les options
 * Change le dictionaire en fonction de l'option activé
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

function activateSecretMode() {
  isGameOver = true;
  loveRadio.classList.remove("d-none");
  loveLabel.classList.remove("d-none");
  index = 0;
  disableRadioList(radioList);
  radioList[2].disabled = false;
}