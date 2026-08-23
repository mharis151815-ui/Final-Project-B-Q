/* =====================================================
   STUDYHUB - SIGNUP
   ===================================================== */

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get values

        const name =
            document.getElementById("signupName").value.trim();

        const email =
            document.getElementById("signupEmail").value
                .trim()
                .toLowerCase();

        const password =
            document.getElementById("signupPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const terms =
            document.getElementById("terms").checked;


        // Error message

        const errorMessage =
            document.getElementById("signupError");


        // Hide previous error

        if (errorMessage) {
            errorMessage.style.display = "none";
        }


        /* =================================================
           VALIDATION
           ================================================= */

        // Name

        if (name.length < 3) {

            showSignupError(
                "Please enter your full name."
            );

            return;
        }


        // Email

        if (!email.includes("@")) {

            showSignupError(
                "Please enter a valid email address."
            );

            return;
        }


        // Password

        if (password.length < 6) {

            showSignupError(
                "Password must be at least 6 characters."
            );

            return;
        }


        // Confirm Password

        if (password !== confirmPassword) {

            showSignupError(
                "Passwords do not match."
            );

            return;
        }


        // Terms

        if (!terms) {

            showSignupError(
                "Please agree to the Terms & Conditions."
            );

            return;
        }


        /* =================================================
           CHECK EXISTING USER
           ================================================= */

        const savedUser =
            localStorage.getItem("studyHubUser");


        if (savedUser) {

            const user =
                JSON.parse(savedUser);


            if (user.email === email) {

                showSignupError(
                    "An account with this email already exists."
                );

                return;
            }
        }


        /* =================================================
           CREATE USER
           ================================================= */

        const newUser = {

            name: name,
            email: email,
            password: password

        };


        /* =================================================
           SAVE USER
           ================================================= */

        localStorage.setItem(
            "studyHubUser",
            JSON.stringify(newUser)
        );


        /* =================================================
           LOGIN STATE
           ================================================= */

        localStorage.setItem(
            "studyHubLoggedIn",
            "true"
        );


        /* =================================================
           SUCCESS
           ================================================= */

        alert("Account created successfully! 🎉");


        /* =================================================
           GO TO DASHBOARD
           ================================================= */

        window.location.href =
            "dashboard.html";

    });

}


/* =====================================================
   SIGNUP ERROR FUNCTION
   ===================================================== */

function showSignupError(message) {

    const errorMessage =
        document.getElementById("signupError");


    if (errorMessage) {

        errorMessage.textContent =
            message;

        errorMessage.style.display =
            "block";

    }

}


/* =====================================================
   SIGNUP PASSWORD SHOW / HIDE
   ===================================================== */

const signupPasswordToggle =
    document.getElementById(
        "signupPasswordToggle"
    );


if (signupPasswordToggle) {

    signupPasswordToggle.addEventListener(
        "click",
        function () {

            const password =
                document.getElementById(
                    "signupPassword"
                );

            const eye =
                this.querySelector(
                    ".eye-icon"
                );


            if (password.type === "password") {

                password.type = "text";

                eye.classList.add(
                    "eye-off"
                );

            } else {

                password.type = "password";

                eye.classList.remove(
                    "eye-off"
                );

            }

        }
    );

}


/* =====================================================
   CONFIRM PASSWORD SHOW / HIDE
   ===================================================== */

const confirmPasswordToggle =
    document.getElementById(
        "confirmPasswordToggle"
    );


if (confirmPasswordToggle) {

    confirmPasswordToggle.addEventListener(
        "click",
        function () {

            const password =
                document.getElementById(
                    "confirmPassword"
                );

            const eye =
                this.querySelector(
                    ".eye-icon"
                );


            if (password.type === "password") {

                password.type = "text";

                eye.classList.add(
                    "eye-off"
                );

            } else {

                password.type = "password";

                eye.classList.remove(
                    "eye-off"
                );

            }

        }
    );

}


/* =====================================================
   STUDYHUB - LOGIN
   ===================================================== */

const loginForm =
    document.getElementById(
        "loginForm"
    );


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            /* =================================================
               GET LOGIN VALUES
               ================================================= */

            const email =
                document.getElementById(
                    "loginEmail"
                ).value
                    .trim()
                    .toLowerCase();


            const password =
                document.getElementById(
                    "loginPassword"
                ).value;


            /* =================================================
               ERROR MESSAGE
               ================================================= */

            const errorMessage =
                document.getElementById(
                    "loginError"
                );


            if (errorMessage) {

                errorMessage.style.display =
                    "none";

            }


            /* =================================================
               CHECK EMPTY FIELDS
               ================================================= */

            if (!email || !password) {

                showLoginError(
                    "Please enter email and password."
                );

                return;
            }


            /* =================================================
               GET SAVED USER
               ================================================= */

            const savedUser =
                localStorage.getItem(
                    "studyHubUser"
                );


            if (!savedUser) {

                showLoginError(
                    "No account found. Please signup first."
                );

                return;
            }


            /* =================================================
               CONVERT JSON TO OBJECT
               ================================================= */

            const user =
                JSON.parse(savedUser);


            /* =================================================
               CHECK EMAIL
               ================================================= */

            if (user.email !== email) {

                showLoginError(
                    "Email or password is incorrect."
                );

                return;
            }


            /* =================================================
               CHECK PASSWORD
               ================================================= */

            if (user.password !== password) {

                showLoginError(
                    "Email or password is incorrect."
                );

                return;
            }


            /* =================================================
               LOGIN SUCCESSFUL
               ================================================= */

            localStorage.setItem(
                "studyHubLoggedIn",
                "true"
            );


            /* =================================================
               GO TO DASHBOARD
               ================================================= */

            window.location.href =
                "dashboard.html";

        }
    );

}


/* =====================================================
   LOGIN ERROR FUNCTION
   ===================================================== */

function showLoginError(message) {

    const errorMessage =
        document.getElementById(
            "loginError"
        );


    if (errorMessage) {

        errorMessage.textContent =
            message;

        errorMessage.style.display =
            "block";

    } else {

        alert(message);

    }

}


/* =====================================================
   LOGIN PASSWORD SHOW / HIDE
   ===================================================== */

const loginPasswordToggle =
    document.getElementById(
        "loginPasswordToggle"
    );


if (loginPasswordToggle) {

    loginPasswordToggle.addEventListener(
        "click",
        function () {

            const password =
                document.getElementById(
                    "loginPassword"
                );

            const eye =
                this.querySelector(
                    ".eye-icon"
                );


            if (password.type === "password") {

                password.type = "text";

                eye.classList.add(
                    "eye-off"
                );

            } else {

                password.type = "password";

                eye.classList.remove(
                    "eye-off"
                );

            }

        }
    );

}