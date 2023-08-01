/**
 * Displays a string on the screen.
 * @param {string} word - The word to be displayed on the screen.
 */
function printScreen(word) {
  let wordToType = document.querySelector(".wordToTypeArea");
  wordToType.innerText = word;
}
