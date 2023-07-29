/**
 * Affiche une chaine de caractere sur l'ecran
 * @param {string} word - Le mot entré par l'utilisteur
 */
function printScreen(word) {
  let wordToType = document.querySelector(".wordToTypeArea");
  wordToType.innerText = word;
}
