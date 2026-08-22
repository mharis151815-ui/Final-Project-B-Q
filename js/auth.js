/* =====================================================
   STUDYHUB - SIGNUP
   ===================================================== */

const signupForm = document.getElementById("signupForm");

if (signupForm) {

    signupForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // Get values from inputs

        const name =
            document.getElementById("signupName").value.trim();

        const email =
            document.getElementById("signupEmail").value.trim().toLowerCase();

        const password =
            document.getElementById("signupPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;

        const terms =
            document.getElementById("terms").checked;


        // Error message element

        const errorMessage =
            document.getElementById("signupError");


        // Hide previous error

        errorMessage.style.display = "none";


        /* =================================================
           VALIDATION
           ================================================= */


        // Name validation

        if (name.length < 3) {

            showSignupError(
                "Please enter your full name."
            );

            return;
        }


        // Email validation

        if (!email.includes("@")) {

            showSignupError(
                "Please enter a valid email address."
            );

            return;
        }


        // Password validation

        if (password.length < 6) {

            showSignupError(
                "Password must be at least 6 characters."
            );

            return;
        }


        // Confirm password

        if (password !== confirmPassword) {

            showSignupError(
                "Passwords do not match."
            );

            return;
        }


        // Terms validation

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
           SAVE USER IN LOCAL STORAGE
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

        window.location.href = "dashboard.html";

    });

}


/* =====================================================
   ERROR FUNCTION
   ===================================================== */

function showSignupError(message) {

    const errorMessage =
        document.getElementById("signupError");

    errorMessage.textContent = message;

    errorMessage.style.display = "block";
}


/* =====================================================
   SIGNUP PASSWORD SHOW / HIDE
   ===================================================== */

const signupPasswordToggle =
    document.getElementById("signupPasswordToggle");


if (signupPasswordToggle) {

    signupPasswordToggle.addEventListener(
        "click",
        function () {

            const password =
                document.getElementById("signupPassword");

            const eye =
                this.querySelector(".eye-icon");


            if (password.type === "password") {

                password.type = "text";

                eye.classList.add("eye-off");

            } else {

                password.type = "password";

                eye.classList.remove("eye-off");

            }

        }
    );

}


/* =====================================================
   CONFIRM PASSWORD SHOW / HIDE
   ===================================================== */

const confirmPasswordToggle =
    document.getElementById("confirmPasswordToggle");


if (confirmPasswordToggle) {

    confirmPasswordToggle.addEventListener(
        "click",
        function () {

            const password =
                document.getElementById("confirmPassword");

            const eye =
                this.querySelector(".eye-icon");


            if (password.type === "password") {

                password.type = "text";

                eye.classList.add("eye-off");

            } else {

                password.type = "password";

                eye.classList.remove("eye-off");

            }

        }
    );

}

/* Login Password */

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


            if (
                password.type ===
                "password"
            ) {

                password.type =
                    "text";

                eye.classList.add(
                    "eye-off"
                );

            } else {

                password.type =
                    "password";

                eye.classList.remove(
                    "eye-off"
                );

            }

        }
    );

}