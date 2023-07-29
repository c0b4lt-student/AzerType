/*********************************************************************************
 *
 * Ce fichier contient toutes les fonctions nécessaires à l'affichage et à la
 * fermeture de la popup de partage.
 *
 *********************************************************************************/


/**
 * Cette fonction affiche la popup pour partager son score.
 */
function afficherPopup() {
  let popupBackground = document.querySelector(".popupBackground");

  popupBackground.classList.add("active");
}

/**
 * Cette fonction cache la popup pour partager son score.
 */
function cacherPopup() {
  let popupBackground = document.querySelector(".popupBackground");

  popupBackground.classList.remove("active");
}


/**
 * Cette fonction initialise les écouteurs d'événements qui concernent
 * l'affichage de la popup.
 */
function initAddEventListenerPopup() {
  let shareBtn = document.querySelector(".shareArea button");
  let popupBackground = document.querySelector(".popupBackground");
  shareBtn.addEventListener("click", () => {
    afficherPopup();
  });

  popupBackground.addEventListener("click", (event) => {
    if (event.target === popupBackground) {
      cacherPopup()
    }
  })
}