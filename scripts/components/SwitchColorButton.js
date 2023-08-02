/**
 * Activates the switch color button to toggle between light mode and dark mode.
 */
function activateSwitchColorButton() {
  let switchColorButtonContainer = document.createElement("MySwitchButton");
  let switchColorButton = `
    <p>LightMode</p>
    <label class="switch">
        <input type="checkbox" id="switchColorButton" value="0">
        <span class="slider round"></span>
    </label>
    <p>DarkMode</p>
`;

  switchColorButtonContainer.innerHTML = switchColorButton;
  document.querySelector(".optionArea").append(switchColorButtonContainer);
  switchColorButtonContainer.classList.add("switchColorButtonContainer");
  switchColorButton = document.getElementById("switchColorButton");

  switchColorButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });
}
