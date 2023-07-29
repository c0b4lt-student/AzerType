/**
 * Construit et affiche l'email
 * @param {email} email - l'email vers qui envoyer
 * @param {string} name - le nom de l'utilisateur
 * @param {string} time - Le temps total
 */
function printEmail(email, name, time) {
  let mailto = `mailto:${email}?subject=Sharing my score on Azertype&body=Hi, I'm ${name} and i write ${index} sentences in ${time} on Azertype !`
  location.href = mailto;
}