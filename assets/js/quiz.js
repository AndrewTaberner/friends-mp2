// Manual tooltip initialization
document.addEventListener("DOMContentLoaded", function () {
  var tooltipTriggerList = [].slice.call(
    document.querySelectorAll('[data-bs-toggle="tooltip"]')
  );
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl, {
      trigger: "hover focus"
    });
  });
});

let currentQuestionIndex = 0;
let score = 0;
let shuffledQuestions = [];
let incorrectAnswers = [];

const questionElement = document.getElementById("question");
const optionsList = document.getElementById("options");
const nextButton = document.getElementById("next-btn");

const correctSound = new Audio("assets/audio/joey.mp3");
const wrongSound = new Audio("assets/audio/janice.mp3");

// Mute checkbox functionality
const muteCheckbox = document.getElementById("mute-audio-checkbox");

// Ensure audio respects initial checkbox state on load
correctSound.muted = muteCheckbox.checked;
wrongSound.muted = muteCheckbox.checked;

muteCheckbox.addEventListener("change", () => {
  const isMuted = muteCheckbox.checked;
  correctSound.muted = isMuted;
  wrongSound.muted = isMuted;
});

/**
 * Randomly shuffles questions and selects the first 10 for the quiz.
 */
function shuffleQuestions() {
  shuffledQuestions = [...questions]
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);
}

function showQuestion() {
  resetState();

  const currentQuestion = shuffledQuestions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.question;

  currentQuestion.options.forEach(optionText => {
    const li = document.createElement("li");
    li.textContent = optionText;
    li.classList.add("list-group-item", "list-group-item-action", "cursor-pointer");

    li.addEventListener("click", () => handleOptionClick(li, currentQuestion));
    optionsList.appendChild(li);
  });

  nextButton.textContent =
    currentQuestionIndex === shuffledQuestions.length - 1
      ? "Finish Quiz"
      : "Next Question";
}

function handleOptionClick(selectedOption, currentQuestion) {
  if (Array.from(optionsList.children).some(opt => opt.classList.contains("selected"))) return;

  selectedOption.classList.add("selected");
  const isCorrect = selectedOption.textContent === currentQuestion.answer;

  if (isCorrect) {
    correctSound.play();
    selectedOption.innerHTML += ' <i class="fas fa-check text-success"></i>';
    selectedOption.classList.add("correct-answer");
    score++;
  } else {
    wrongSound.play();
    selectedOption.innerHTML += ' <i class="fas fa-times text-danger"></i>';
    selectedOption.classList.add("wrong-answer");

    incorrectAnswers.push({
      question: currentQuestion.question,
      selected: selectedOption.textContent,
      correct: currentQuestion.answer
    });

    Array.from(optionsList.children).forEach(opt => {
      if (opt.textContent === currentQuestion.answer) {
        opt.innerHTML += ' <i class="fas fa-check text-success"></i>';
        opt.classList.add("correct-answer");
      }
    });
  }

  Array.from(optionsList.children).forEach(opt => opt.classList.add("disabled"));
  nextButton.disabled = false;
}

function resetState() {
  questionElement.textContent = "";
  optionsList.innerHTML = "";
  nextButton.disabled = true;
}

function showScore() {
  resetState();
  questionElement.textContent = `🎉 You scored ${score} out of ${shuffledQuestions.length}!`;

  if (incorrectAnswers.length > 0) {
    const reviewList = document.createElement("ul");
    reviewList.classList.add("list-group", "mt-4", "text-start");

    incorrectAnswers.forEach(item => {
      const li = document.createElement("li");
      li.classList.add("list-group-item");
      li.innerHTML = `
        <strong>Q:</strong> ${item.question}<br/>
        <span class="text-danger"><strong>Your Answer:</strong> ${item.selected}</span><br/>
        <span class="text-success"><strong>Correct Answer:</strong> ${item.correct}</span>
      `;
      reviewList.appendChild(li);
    });

    optionsList.appendChild(reviewList);
  }

  nextButton.textContent = "Restart Quiz";
  nextButton.style.display = "inline-block";
  nextButton.disabled = false;

  nextButton.removeEventListener("click", handleNext);
  nextButton.addEventListener("click", restartQuiz);
}

function handleNext() {
  currentQuestionIndex++;
  if (currentQuestionIndex < shuffledQuestions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

function restartQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  incorrectAnswers = [];
  shuffleQuestions();
  showQuestion();

  nextButton.removeEventListener("click", restartQuiz);
  nextButton.addEventListener("click", handleNext);
}

// Start quiz
shuffleQuestions();
showQuestion();
nextButton.addEventListener("click", handleNext);

const quitButton = document.getElementById("quit-btn");
quitButton.addEventListener("click", () => {
  if (confirm("Are you sure you want to quit the quiz and return to the homepage?")) {
    window.location.href = "index.html";
  }
});
