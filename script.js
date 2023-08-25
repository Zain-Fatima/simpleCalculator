// Random Number Generate
let randomNumber = Math.floor(Math.random() * 100);

document.addEventListener("DOMContentLoaded", () => {
    const submitBtn = document.getElementById("submitBtn");
    const playAgainBtn = document.getElementById("playAgainBtn");
    const userInput = document.getElementById("userInput");
    const display = document.getElementById("display");

    submitBtn.addEventListener("click", startGame);
    playAgainBtn.addEventListener("click", reset);

    function startGame() {
        let userNumber = parseInt(userInput.value);

        if (isNaN(userNumber) || userNumber < 1 || userNumber > 100) {
            display.textContent = "Enter a valid number (1-100)";
            display.style.backgroundColor = "#ff6363";
        } else if (randomNumber === userNumber) {
            display.textContent = "Congratulations! You guessed the right number";
            display.style.backgroundColor = "#68e080";
        } else if (randomNumber < userNumber) {
            display.textContent = `Number is less than ${userNumber}`;
            display.style.backgroundColor = "#ff6363";
        } else if (randomNumber > userNumber) {
            display.textContent = `Number is greater than ${userNumber}`;
            display.style.backgroundColor = "#ff6363";
        }
    }

    function reset() {
        randomNumber = Math.floor(Math.random() * 100);
        userInput.value = "";
        display.textContent = "Result";
        display.style.backgroundColor = "#333";
    }
});
