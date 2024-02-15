function continuePlaying() {
  const alphabet = getRandomAlphabet();
  const displayKey = document.getElementById("displayKey");
  displayKey.innerText = alphabet;
  addBackgroundColorById(alphabet);
}

function play() {
  hideElementById("home");
  hideElementById("final-score");
  showElementById("playground");
  continuePlaying();
  setTextElementValueById("score", 0);
  setTextElementValueById("life", 5);
}

function gameOver() {
  showElementById("home");
  hideElementById("final-score");
  hideElementById("playground");
  const alphabet = getElementValueById("displayKey");
  removeBackgroundColorById(alphabet);
}

// Capture keyboard keypress
document.addEventListener("keyup", function (event) {
  const playerPressed = event.key;
  const displayKey = document.getElementById("displayKey").innerText;
  if (playerPressed === "Escape") {
    gameOver();
  }
  if (playerPressed === displayKey) {
    // Update the score
    const currentScore = getTextElementValuById("score");
    const newScore = currentScore + 1;
    setTextElementValueById("score", newScore);

    removeBackgroundColorById(playerPressed);
    continuePlaying();
  } else {
    // Update the life
    const currentLife = getTextElementValuById("life");
    const newLife = currentLife - 1;
    setTextElementValueById("life", newLife);

    // End game
    if (currentLife === 1) {
      hideElementById("playground");
      showElementById("final-score");

      // Show highscore
      const score = getTextElementValuById("score");
      setTextElementValueById("final-score-value", score);
      const alphabet = getElementValueById("displayKey");
      removeBackgroundColorById(alphabet);
    }
  }
});
