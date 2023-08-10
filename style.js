const guessInput = document.getElementById("guessInput");
const submitBtn = document.getElementById("submitBtn");
const message = document.getElementById("message");

const randomNumber = Math.floor(Math.random() * 100);

submitBtn.addEventListener("click", () => {
  const userGuess = parseInt(guessInput.value);

  if (userGuess === randomNumber) {
    message.textContent = "Congratulations!";
    message.style.fontSize = "20px";
    guessInput.disabled = true;
    submitBtn.disabled = true;
  } else if (userGuess < randomNumber) {
    message.textContent = "Biroz kattaroq son kiriting";
    message.style.fontSize = "20px";
  } else if (userGuess > randomNumber) {
    message.textContent = "Biroz kichikroq son kiriting";
    message.style.fontSize = "20px";
  } else {
    message.textContent = "Son kiriting!";
    message.style.fontSize = "20px";
  }
});
