let questions = [
    {
        question: "Which keyword is used to create a constant in JavaScript?",
        options: ["var", "let", "const", "static"],
        answer: "const"
    },

    {
        question: "Which tag is used to create a paragraph in HTML?",
        options: ["<p>", "<h1>", "<div>", "<br>"],
        answer: "<p>"
    },

    {
        question: "Which property is used to change text color in CSS?",
        options: ["background", "font-size", "color", "text"],
        answer: "color"
    },

    {
        question: "Which method is used to print something in the console?",
        options: ["print()", "console.log()", "write()", "show()"],
        answer: "console.log()"
    },

    {
        question: "Which symbol is used for an ID selector in CSS?",
        options: [".", "#", "*", "&"],
        answer: "#"
    }
];

let currentQuestion = 0;
let score = 0;

let questionNumber = document.getElementById("question-number");
let question = document.getElementById("question");

let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

let nextButton = document.getElementById("next");
let previousButton = document.getElementById("previous");


function showQuestion() {

    let current = questions[currentQuestion];

    questionNumber.innerText =
        "Question " + (currentQuestion + 1) + " / " + questions.length;

    question.innerText = current.question;

    option1.innerText = current.options[0];
    option2.innerText = current.options[1];
    option3.innerText = current.options[2];
    option4.innerText = current.options[3];

    let radioButtons = document.querySelectorAll(
        'input[name="answer"]'
    );

    radioButtons.forEach(function (radio) {
        radio.checked = false;
    });
}


nextButton.addEventListener("click", function () {

    let selected = document.querySelector(
        'input[name="answer"]:checked'
    );

    if (!selected) {
        alert("Please select an answer");
        return;
    }

    let selectedOption = selected.nextElementSibling.innerText;

    if (selectedOption === questions[currentQuestion].answer) {
        score++;
    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        document.querySelector(".quiz-section").innerHTML =
            "<h2>Quiz Completed!</h2>" +
            "<h3>Your Score: " + score + " / " +
            questions.length + "</h3>" +
            "<button onclick='location.reload()'>Try Again</button>";
    }
});


previousButton.addEventListener("click", function () {

    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion();
    }

});


showQuestion();