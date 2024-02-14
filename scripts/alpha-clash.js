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
