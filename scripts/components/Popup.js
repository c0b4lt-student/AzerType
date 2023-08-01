/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires à l'affichage et à la
 * fermeture de la popup de partage.
 *
 *********************************************************************************/


/**
 * Displays the popup for sharing the score.
 * It adds the "active" class to the popupBackground element, which triggers the CSS to show the popup.
 */
function printPopup() {
  let popupBackground = document.querySelector(".popupBackground");

  popupBackground.classList.add("active");
}

/**
 * Hides the popup for sharing the score.
 * It removes the "active" class from the popupBackground element, which triggers the CSS to hide the popup.
 */
function cacherPopup() {
  let popupBackground = document.querySelector(".popupBackground");

  popupBackground.classList.remove("active");
}


/**
 * Initializes the event listeners for the popup.
 * It sets up the click event listener on the share button to display the popup when clicked.
 * It also sets up a click event listener on the popup background, so if the background is clicked, the popup will be hidden.
 */
function initAddEventListenerPopup() {
  let shareBtn = document.querySelector(".shareArea button");
  let popupBackground = document.querySelector(".popupBackground");
  shareBtn.addEventListener("click", () => {
    printPopup();
  });

  popupBackground.addEventListener("click", (event) => {
    if (event.target === popupBackground) {
      cacherPopup()
    }
  });
}