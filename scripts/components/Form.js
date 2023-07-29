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

    let time = timerArea.innerHTML;

    printErrorMessage("");
    printEmail(email, name, time);
  } catch (error) {
    printErrorMessage(error.message);
  }
}

/**
 * Ajoute un evenement submit sur le bouton envoyer du formulaire
 * qui creer et prepars un mail de partage
 */
function activateForm() {
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleForm();
  });
}