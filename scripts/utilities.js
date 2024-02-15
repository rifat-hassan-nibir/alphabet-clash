function hideElementById(id) {
  const element = document.getElementById(id);
  element.classList.add("hidden");
}

function showElementById(id) {
  const element = document.getElementById(id);
  element.classList.remove("hidden");
}
function addBackgroundColorById(id) {
  const keyboardAlphabet = document.getElementById(id);
  keyboardAlphabet.classList.add("bg-orange-400");
}
function removeBackgroundColorById(id) {
  const keyboardAlphabet = document.getElementById(id);
  keyboardAlphabet.classList.remove("bg-orange-400");
}

function getTextElementValuById(id) {
  const element = document.getElementById(id);
  const elementValue = parseInt(element.innerText);
  return elementValue;
}

function setTextElementValueById(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}

function getRandomAlphabet() {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  const alphabetsArray = alphabets.split("");
  const randomNumber = Math.floor(Math.random() * alphabetsArray.length);
  const randomAlaphabet = alphabetsArray[randomNumber];
  return randomAlaphabet;
}
