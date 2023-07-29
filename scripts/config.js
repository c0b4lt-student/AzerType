const wordDictionary = [
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
]
const sentenceDictionary = ["Bonjour, comment ça va ?",
  "Le soleil brille aujourd'hui.",
  "J'aime beaucoup les chiens.",
  "La cuisine française est délicieuse.",
  "Je prévois d'aller au cinéma ce soir.",
  "Les oiseaux chantent dans le jardin.",
  "Voyager est une expérience enrichissante.",
  "Il est important de prendre soin de la planète.",
  "Les livres ouvrent de nouvelles perspectives.",
  "La musique apaise l'âme.",
  "Je suis reconnaissant pour tout ce que j'ai.",
  "Les amis sont précieux dans la vie.",
  "La nature offre une beauté exceptionnelle.",
  "La vie est remplie d'opportunités.",
  "L'apprentissage est un voyage sans fin.",
  "Rien n'est impossible si vous y croyez.",
  "Le sport est bon pour la santé.",
  "Il est important de rêver grand.",
  "La gentillesse fait du monde un meilleur endroit.",
  "La patience est une vertu essentielle."]
const dictionaries = [wordDictionary, sentenceDictionary];

let user = {
  word: "",
  score: 0,
  mode: -1,
  isPlaying: true
};
let dictionary = dictionaries[0];
let index = 0;

let validateWordBtn = document.getElementById("validateWordBtn");
let radioList = document.querySelectorAll(".optionRadio input");
let guessArea = document.querySelector(".guessArea input");
let timerArea = document.querySelector(".timerArea span");