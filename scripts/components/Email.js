/**
 * Constructs and opens an email link with predefined content.
 * @param {string} email - The recipient's email address.
 * @param {string} name - The user's name.
 * @param {string} time - The total time taken.
 */
function printEmail(email, name, time) {
  let mailto = `mailto:${email}?subject=Sharing my score on Azertype&body=Hi, I'm ${name} and i write ${index} sentences in ${time} on Azertype !`
  location.href = mailto;
}