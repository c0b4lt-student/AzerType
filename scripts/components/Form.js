/**
 * Validates the user's name to ensure it has a minimum length of 2 characters.
 * If the name is too short, an error is thrown with the message "Name is too short".
 *
 * @param {string} name - The name of the user to be validated.
 *
 * @throws {Error} If the name is too short (less than 2 characters).
 */
function validateName(name) {
  if (name.length < 2) {
    throw new Error("Name is too short");
  }
}

/**
 * Validates an email using a regular expression pattern.
 * If the email does not match the pattern, an error is thrown with the message "L'email n'est pas valide."
 *
 * @param {string} email - The email to be validated.
 *
 * @throws {Error} If the email does not match the regular expression pattern.
 */
function validateEmail(email) {
  let emailRegExp = new RegExp("[a-z0-9._-]+@[a-z0-9._-]+\\.[a-z0-9._-]+");
  if (!emailRegExp.test(email)) {
    throw new Error("L'email n'est pas valide.");
  }
}

/**
 * Updates the error message displayed in a popup with the provided message.
 * If the "errorMessage" element does not exist, it creates a new <span> element with the id "errorMessage"
 * inside the element with class "popup" and appends the new element to it.
 *
 * @param {string} message - The error message to be displayed.
 */
function printErrorMessage(message) {
  let errorMessageSpan = document.getElementById("errorMessage");

  if (!errorMessageSpan) {
    let popup = document.querySelector(".popup");
    errorMessageSpan = document.createElement("span");
    errorMessageSpan.id = "errorMessage";

    popup.append(/** @type {Node} */ errorMessageSpan);
  }

  errorMessageSpan.innerText = message;
}

/**
 * Handles the form submission. It validates the input fields (name and email) and displays any potential errors.
 * If the form data is valid, it calls the "printEmail" function to construct and display an email with the user's name,
 * email, and time information. If any validation error occurs, it calls the "printErrorMessage" function to display the
 * error message in a popup.
 *
 * @param {Event} event - The event object representing the "submit" event on the form.
 * @throws {Error} If there is an error during the form submission process, such as invalid name or email format.
 */
function handleForm(event) {
  try {
    let name = event.target.elements["name"].value;
    validateName(name);

    let email = event.target.elements["email"].value;
    validateEmail(email);

    let time = timerArea.innerHTML;

    printErrorMessage("");
    printEmail(email, name, time);
  } catch (error) {
    printErrorMessage(error.message);
  }
}

/**
 * Activates the form by adding a "submit" event listener to it. When the form is submitted, the default form submission
 * action is prevented, and the "handleForm" function is called to process the form data and display any potential errors.
 */
function activateForm() {
  let form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    handleForm(event);
  });
}