/* =====================================================
   1. LANDING / HOME PAGE
   ===================================================== */


/* =====================================================
   1. LANDING / HOME PAGE
   ===================================================== */


/* Navbar Get Started Button */

const getStartedButton =
    document.getElementById("getStartedButton");

getStartedButton.addEventListener("click", function () {

    document.getElementById("auth").scrollIntoView({
        behavior: "smooth"
    });

});


/* Hero Get Started Button */

const heroGetStartedButton =
    document.getElementById("heroGetStartedButton");

heroGetStartedButton.addEventListener("click", function () {

    document.getElementById("auth").scrollIntoView({
        behavior: "smooth"
    });

});


/* Explore Features Button */

const exploreButton =
    document.getElementById("exploreButton");

exploreButton.addEventListener("click", function () {

    document.getElementById("features").scrollIntoView({
        behavior: "smooth"
    });

});


/* Navbar Login Button */

const loginButton =
    document.getElementById("loginButton");

loginButton.addEventListener("click", function () {

    document.getElementById("auth").scrollIntoView({
        behavior: "smooth"
    });

    showLoginForm();

});


/* About Button */

const aboutButton =
    document.getElementById("aboutButton");

aboutButton.addEventListener("click", function () {

    alert("Welcome to StudyHub! 🎓");

});



/* =====================================================
   2. LOGIN & SIGNUP
   ===================================================== */


/* =====================================================
   2. LOGIN & SIGNUP
   ===================================================== */


/* Get Form Boxes */

const signupBox =
    document.getElementById("signupBox");

const loginBox =
    document.getElementById("loginBox");


/* Switch Buttons */

const showLogin =
    document.getElementById("showLogin");

const showSignup =
    document.getElementById("showSignup");


/* Forms */

const signupForm =
    document.getElementById("signupForm");

const loginForm =
    document.getElementById("loginForm");


/* Show Login Form Function */

function showLoginForm() {

    signupBox.classList.add("hidden");

    loginBox.classList.remove("hidden");

}


/* Show Signup Form Function */

function showSignupForm() {

    loginBox.classList.add("hidden");

    signupBox.classList.remove("hidden");

}


/* Login Button */

showLogin.addEventListener("click", function () {

    showLoginForm();

});


/* Signup Button */

showSignup.addEventListener("click", function () {

    showSignupForm();

});


/* =====================================================
   SIGNUP
   ===================================================== */

signupForm.addEventListener("submit", function (event) {

    event.preventDefault();


    /* Get Input Values */

    const name =
        document.getElementById("signupName").value.trim();

    const email =
        document.getElementById("signupEmail").value.trim();

    const password =
        document.getElementById("signupPassword").value;

    const confirmPassword =
        document.getElementById("confirmPassword").value;


    /* Get Error Elements */

    const nameError =
        document.getElementById("signupNameError");

    const emailError =
        document.getElementById("signupEmailError");

    const passwordError =
        document.getElementById("signupPasswordError");

    const confirmPasswordError =
        document.getElementById("confirmPasswordError");


    /* Clear Old Errors */

    nameError.textContent = "";

    emailError.textContent = "";

    passwordError.textContent = "";

    confirmPasswordError.textContent = "";


    /* Validation Variable */

    let isValid = true;


    /* Name Validation */

    if (name === "") {

        nameError.textContent =
            "Name is required";

        isValid = false;

    }


    /* Email Validation */

    if (email === "") {

        emailError.textContent =
            "Email is required";

        isValid = false;

    }


    /* Password Validation */

    if (password === "") {

        passwordError.textContent =
            "Password is required";

        isValid = false;

    }

    else if (password.length < 6) {

        passwordError.textContent =
            "Password must be at least 6 characters";

        isValid = false;

    }


    /* Confirm Password Validation */

    if (confirmPassword === "") {

        confirmPasswordError.textContent =
            "Please confirm your password";

        isValid = false;

    }

    else if (password !== confirmPassword) {

        confirmPasswordError.textContent =
            "Passwords do not match";

        isValid = false;

    }


    /* If Form Is Valid */

    if (isValid) {


        /* Create User Object */

        const user = {

            name: name,

            email: email,

            password: password

        };


        /* Save User In LocalStorage */

        localStorage.setItem(
            "studyHubUser",
            JSON.stringify(user)
        );


        alert(
            "Account created successfully! 🎉"
        );


        /* Clear Signup Form */

        signupForm.reset();


        /* Show Login Form */

        showLoginForm();

    }

});



/* =====================================================
   LOGIN
   ===================================================== */

loginForm.addEventListener("submit", function (event) {

    event.preventDefault();


    /* Get Login Values */

    const email =
        document.getElementById("loginEmail").value.trim();

    const password =
        document.getElementById("loginPassword").value;


    /* Get Error Elements */

    const emailError =
        document.getElementById("loginEmailError");

    const passwordError =
        document.getElementById("loginPasswordError");


    /* Clear Old Errors */

    emailError.textContent = "";

    passwordError.textContent = "";


    /* Validation */

    let isValid = true;


    if (email === "") {

        emailError.textContent =
            "Email is required";

        isValid = false;

    }


    if (password === "") {

        passwordError.textContent =
            "Password is required";

        isValid = false;

    }


    /* Stop If Empty */

    if (!isValid) {

        return;

    }


    /* Get Saved User */

    const savedUser =
        JSON.parse(
            localStorage.getItem("studyHubUser")
        );


    /* Check User Exists */

    if (savedUser === null) {

        alert(
            "Account not found. Please create an account first."
        );

        return;

    }


    /* Check Email */

    if (email !== savedUser.email) {

        emailError.textContent =
            "Email is incorrect";

        return;

    }


    /* Check Password */

    if (password !== savedUser.password) {

        passwordError.textContent =
            "Password is incorrect";

        return;

    }


    /* Login Success */

    alert(
        "Login successful! Welcome " +
        savedUser.name +
        " 🎓"
    );


    /* Save Login State */

    localStorage.setItem(
        "isLoggedIn",
        "true"
    );


    /* Reset Login Form */

    loginForm.reset();


    /*
       Dashboard integration Section 3 mein hogi.
       Wahan login ke baad dashboard show karenge.
    */

});


/* =====================================================
   3. STUDENT DASHBOARD
   ===================================================== */


/* Code will be added later */


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


/* HARIS WILL ADD CODE HERE */


/* =====================================================
   10. EXPENSE TRACKER
   ===================================================== */


/* Code will be added later */


/* =====================================================
   11. STUDY PROGRESS - HARIS
   ===================================================== */


/* HARIS WILL ADD CODE HERE */


/* =====================================================
   12. AI / SMART TOOLS
   ===================================================== */


/* Code will be added later */


/* =====================================================
   13. SEARCH - HARIS
   ===================================================== */


/* HARIS WILL ADD CODE HERE */


/* =====================================================
   14. FAVORITES / BOOKMARKS - HARIS
   ===================================================== */


/* HARIS WILL ADD CODE HERE */


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


/* HARIS WILL ADD CODE HERE */


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