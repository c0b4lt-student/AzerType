/**
 * Affiche les resultats
 * @param {number} score - le nombre de mots deviné
 * @param {number} dictionaryLength - le nombre de mot total
 */
function printResults(score, dictionaryLength) {
  let scoreAreaSpan = document.querySelector(".scoreArea span");
  let printTemplate = `${score} / ${dictionaryLength}`
  scoreAreaSpan.innerText = printTemplate;
}

/**
 * Affiche le mot a taper
 * @param {string} word - Le mot entré par l'utilisteur
 */
function printWordToType(word) {
  let guessedWordAreaDiv = document.querySelector(".wordToTypeArea");
  guessedWordAreaDiv.innerText = word;
}

/**
 * Construit et affiche l'email
 * @param {email} email - l'email vers qui envoyer
 * @param {string} name - le nom de l'utilisateur
 * @param {number} score - L'email du destinataire
 */
function printEmail(email, name, score) {
  let mailto = `mailto:${email}?subject=Sharing my score on Azertype&body=Hi, I'm ${name} and i just did ${score} on Azertype !`
  location.href(mailto);
}

/**
 * Valide le champ name, 2 characters minimums
 * @param {string} name - Le nom de l'utilisateur
 * @throws {Error}
 */
function validateName(name) {
  if (name.length < 2) {
    throw new Error("Name is too short");
  }
}

/**
 * Valide l'email a l'aide d'une regex
 * @param {string} email - l'email a valider
 */
function validateEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (!emailRegExp.test(email)) {
    throw new Error("L'email n'est pas valide.");
  }
}

/**
 * Affiche le message d'erreur dans une popup
 * @param {string} message
 */
function printErrorMessage(message) {
  let errorMessageSpan = document.getElementById("errorMessage");

  if (!errorMessageSpan) {
    let popup = document.querySelector(".popup");
    errorMessageSpan = document.createElement("span");
    errorMessageSpan.id = "errorMessage";

    popup.append(errorMessageSpan);
  }

  errorMessageSpan.innerText = message;
}

/**
 * Verifie et construit l'email a partir du formulaire de contact
 */
function handleForm() {
  try {
    let nameTag = document.getElementById("name");
    let name = nameTag.value;
    validateName(name);

    let emailTag = document.getElementById("email");
    let email = emailTag.value;
    validateEmail(email);

    let scoreTag = document.querySelector(".scoreArea span");
    let score = scoreTag.value;

    printErrorMessage("");
    printEmail(name, email, score);
  } catch (error) {
    printErrorMessage(error.message)
  }
}

/**
 * La boucle principale
 */
function gameLoop() {
  initAddEventListenerPopup();

  let dictionary = dictionaries[0];
  let length = dictionary.length;
  let index = 0;

  printWordToType(dictionary[index]);

  validateWordBtn.addEventListener("click", () => {
    if (userWord.value === dictionary[index]) {
      user.score++;
      index++;
    }
    printResults(user.score, length);
    userWord.value = "";
    if (dictionary[index] === undefined) {
      printWordToType("Game is over");
      validateWordBtn.disabled = true;
      for(let iRadio = 0; iRadio < radioList.length; iRadio++) {
        radioList[iRadio].disabled = true;
      }
    } else {
      printWordToType(dictionary[index]);
    }

  });

  for (let i = 0; i < radioList.length; i++) {
    radioList[i].addEventListener("change", (e) => {
      dictionary = dictionaries[Number(e.target.value)];
    })
  }
}
