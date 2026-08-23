/* =====================================================
   STUDYHUB - HOME PAGE JAVASCRIPT
   ===================================================== */


/* =========================
   PAGE LOADED
========================= */

console.log("StudyHub Home Page Loaded");



/* =========================
   SMOOTH SCROLL
========================= */

const featureLinks =
    document.querySelectorAll(
        'a[href^="#"]'
    );


featureLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            const targetId =
                this.getAttribute("href");

            const target =
                document.querySelector(targetId);


            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

});



/* =====================================================
   4. LEARNING / COURSES
   ===================================================== */


/* Code will be added later */


/* =====================================================
   5. COURSE ROADMAP
   ===================================================== */


/* Code will be added later */


/* =====================================================
   6. NOTES MANAGER
   ===================================================== */


/* Code will be added later */


/* =====================================================
   7. TODO / TASK MANAGER
   ===================================================== */


/* Code will be added later */


/* =====================================================
   8. QUIZ SYSTEM - HARIS
   ===================================================== */

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
let questionText = document.getElementById("question");

let option1 = document.getElementById("option1");
let option2 = document.getElementById("option2");
let option3 = document.getElementById("option3");
let option4 = document.getElementById("option4");

let nextButton = document.getElementById("next");
let previousButton = document.getElementById("previous");

function showQuestion() {

    let question = questions[currentQuestion];

    questionNumber.innerText =
        "Question " + (currentQuestion + 1) + " / " + questions.length;

    questionText.innerText = question.question;

    option1.innerText = question.options[0];
    option2.innerText = question.options[1];
    option3.innerText = question.options[2];
    option4.innerText = question.options[3];

    let radioButtons = document.querySelectorAll(
        'input[name="answer"]'
    );

    for (let i = 0; i < radioButtons.length; i++) {
        radioButtons[i].value = question.options[i];
        radioButtons[i].checked = false;
    }
}

nextButton.addEventListener("click", function () {

    let selectedAnswer = document.querySelector(
        'input[name="answer"]:checked'
    );

    if (!selectedAnswer) {
        alert("Please select an answer");
        return;
    }

    if (selectedAnswer.value === questions[currentQuestion].answer) {
        score++;
    }

    if (currentQuestion < questions.length - 1) {

        currentQuestion++;

        showQuestion();

    } else {

        document.querySelector(".quiz-section").innerHTML =
            "<h2>Quiz Completed!</h2>" +
            "<h3>Your Score: " +
            score +
            " / " +
            questions.length +
            "</h3>" +
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

/* =====================================================
   9. POMODORO TIMER - HARIS
   ===================================================== */

let minutes = 25;
let seconds = 0;
let timer;

let minutesDisplay = document.getElementById("minutes");
let secondsDisplay = document.getElementById("seconds");
let mode = document.getElementById("mode");

let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");
let resetButton = document.getElementById("reset");

let focusButton = document.getElementById("focus");
let shortBreakButton = document.getElementById("short-break");
let longBreakButton = document.getElementById("long-break");


function showTime() {
    minutesDisplay.innerText = minutes;
    secondsDisplay.innerText = seconds < 10 ? "0" + seconds : seconds;
}


function startTimer() {

    if (timer) {
        return;
    }

    timer = setInterval(function () {

        if (seconds === 0) {

            if (minutes === 0) {
                clearInterval(timer);
                timer = null;
                alert("Time is over!");
                return;
            }

            minutes--;
            seconds = 59;

        } else {
            seconds--;
        }

        showTime();

    }, 1000);
}


function pauseTimer() {
    clearInterval(timer);
    timer = null;
}


function resetTimer() {
    pauseTimer();

    minutes = 25;
    seconds = 0;
    mode.innerText = "Focus Session";

    showTime();
}


function setFocus() {
    pauseTimer();

    minutes = 25;
    seconds = 0;
    mode.innerText = "Focus Session";

    showTime();
}


function setShortBreak() {
    pauseTimer();

    minutes = 5;
    seconds = 0;
    mode.innerText = "Short Break";

    showTime();
}


function setLongBreak() {
    pauseTimer();

    minutes = 15;
    seconds = 0;
    mode.innerText = "Long Break";

    showTime();
}


startButton.addEventListener("click", startTimer);

pauseButton.addEventListener("click", pauseTimer);

resetButton.addEventListener("click", resetTimer);

focusButton.addEventListener("click", setFocus);

shortBreakButton.addEventListener("click", setShortBreak);

longBreakButton.addEventListener("click", setLongBreak);


showTime();

/* =====================================================
   10. EXPENSE TRACKER
   ===================================================== */


/* Code will be added later */


/* =====================================================
   11. STUDY PROGRESS - HARIS
   ===================================================== */

let htmlProgress = 100;
let cssProgress = 80;
let javascriptProgress = 60;
let gitProgress = 40;

document.getElementById("html-progress").style.width = htmlProgress + "%";
document.getElementById("css-progress").style.width = cssProgress + "%";
document.getElementById("javascript-progress").style.width = javascriptProgress + "%";
document.getElementById("git-progress").style.width = gitProgress + "%";

document.getElementById("html-percent").innerText = htmlProgress + "%";
document.getElementById("css-percent").innerText = cssProgress + "%";
document.getElementById("javascript-percent").innerText = javascriptProgress + "%";
document.getElementById("git-percent").innerText = gitProgress + "%";

/* =====================================================
   12. AI / SMART TOOLS
   ===================================================== */


/* Code will be added later */


/* =====================================================
   13. SEARCH - HARIS
   ===================================================== */

let searchInput = document.getElementById("search-input");
let searchButton = document.getElementById("search-button");
let searchItems = document.querySelectorAll(".search-item");

function searchItemsList() {

    let searchText = searchInput.value.toLowerCase();

    searchItems.forEach(function(item) {

        let text = item.innerText.toLowerCase();

        if (text.includes(searchText)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });
}

searchButton.addEventListener("click", searchItemsList);

/* =====================================================
   14. FAVORITES / BOOKMARKS - HARIS
   ===================================================== */

let removeButtons = document.querySelectorAll(".remove-favorite");

removeButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        button.parentElement.remove();

    });

});

/* =====================================================
   15. DARK / LIGHT MODE - HARIS
   ===================================================== */

   /* HARIS WILL ADD CODE HERE */

/* =====================================================
   16. NOTIFICATIONS / TOASTS - HARIS
   ===================================================== */


/* HARIS WILL ADD CODE HERE */


/* =====================================================
   17. PROFILE PAGE
   ===================================================== */


/* Code will be added later */


/* =====================================================
   18. SETTINGS - HARIS
   ===================================================== */

let profileButton = document.getElementById("profile-button");
let clearData = document.getElementById("clear-data");
let logoutButton = document.getElementById("logout");


profileButton.addEventListener("click", function() {

    let name = prompt("Enter your name:");

    if (name) {
        alert("Profile updated successfully!");
    }

});


clearData.addEventListener("click", function() {

    let confirmDelete = confirm(
        "Are you sure you want to clear your saved data?"
    );

    if (confirmDelete) {

        localStorage.clear();

        alert("All saved data has been cleared!");

    }

});


logoutButton.addEventListener("click", function() {

    let confirmLogout = confirm(
        "Are you sure you want to logout?"
    );

    if (confirmLogout) {

        alert("You have been logged out!");

    }

});

/* =====================================================
   19. LOCALSTORAGE
   ===================================================== */


/* LocalStorage will be used with:
   Login
   Notes
   Tasks
   Expenses
   Profile
*/


/* =====================================================
   20. JAVASCRIPT CONCEPTS
   ===================================================== */


/* Variables
   Functions
   Arrays
   Objects
   DOM
   Events
   LocalStorage
*/


/* =====================================================
   21. RESPONSIVE DESIGN
   ===================================================== */


/* Responsive CSS is written in style.css */