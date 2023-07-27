let user = {
  word: "",
  score: 0,
  mode: -1,
  isPlaying: true
};

let game = {
  dictionaries: [
    [
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
  ],
    [
    "Bonjour, comment ça va ?",
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
    "La patience est une vertu essentielle.",
  ]
  ],
  promptWord: (user, dictionary) => user.word = prompt(`Tapez ${dictionary}`),

}

let promptMenu = () => user.mode = prompt("1.Phrases\n0.Mots");
let promptWord = (dictionary) => user.word = prompt(`Tapez ${dictionary}`)

function azerType(dictionary) {
  while (user.word !== dictionary[0] && dictionary.length > 0) {
    promptWord(dictionary);
    if (user.word === dictionary[0] || user.word === "c") {
      user.score++;
      dictionary.shift();
    }
  }
}

while (user.isPlaying) {
  promptMenu();
  azerType(game.dictionaries[user.mode]);
  let playingAgain = prompt(`Voulez vous rejouer ?\n1.Oui\n2.Non`);
  user.isPlaying = (playingAgain === "1");
}