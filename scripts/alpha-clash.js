function continuePlaying() {
  const alphabet = getRandomAlphabet();
  console.log(alphabet);
  const displayKey = document.getElementById("displayKey");
  displayKey.innerText = alphabet;
  addBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home");
  showElementById("playground");
  continuePlaying();
}

// Capture keyboard keypress
document.addEventListener("keyup", function (event) {
  console.log(event.key);
  const playerPressed = event.key;
  const displayKey = document.getElementById("displayKey").innerText;
  if (playerPressed === displayKey) {
    // Update the score
    const currentScoreElement = document.getElementById("score");
    const currentScore = parseInt(currentScoreElement.innerText);
    const newScore = currentScore + 1;
    currentScoreElement.innerText = newScore;

    removeBackgroundColorById(playerPressed);
    continuePlaying();
  } else {
    // Update the life
    const currentLifeElement = document.getElementById("life");
    const currentLife = parseInt(currentLifeElement.innerText);
    const newLife = currentLife - 1;
    currentLifeElement.innerText = newLife;
  }
});
