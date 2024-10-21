function checkAnswer() {
    // Function body
}
function checkAnswer() {
    const correctAnswer = "4";
    const selectedOption = document.querySelector('input[name="quiz"]:checked');
    const userAnswer = selectedOption ? selectedOption.value : null;
    const feedbackElement = document.getElementById("feedback");

    feedbackElement.textContent = 
        userAnswer === correctAnswer ? "Correct! Well done." : "That's incorrect. Try again!";
}

document.getElementById("submit-answer").addEventListener("click", checkAnswer);
