let user = {
  word: "",
  score: 0
}
let dictionary = [
  "apple",
  "banana",
  "car",
  "dog",
  "elephant",
  "fish",
  "guitar",
  "house",
  "ice cream",
  "jungle",
  "kiwi",
  "lemon",
  "monkey",
  "night",
  "orange",
  "pear",
  "queen",
  "rainbow",
  "sun",
  "tree",
];
let promptWord = () => user.word = prompt(`Tapez ${dictionary}`);
const guessingMessage = () => console.log(user.score);

  while (user.word !== dictionary[0] && dictionary.length > 0) {
    promptWord();
    if (user.word === dictionary[0]) {
      user.score++;
      guessingMessage();
      dictionary.shift();
    }

}