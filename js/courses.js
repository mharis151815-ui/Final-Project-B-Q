/* =====================================================
   STUDYHUB - COURSES
   ===================================================== */


/* =====================================================
   COURSE BUTTONS
   ===================================================== */

const courseButtons =
    document.querySelectorAll(
        ".continue-btn"
    );


courseButtons.forEach(function (button) {

    button.addEventListener(
        "click",
        function () {

            const course =
                this.dataset.course;


            /*
             * Course ko URL mein bhej rahe hain.
             *
             * Section 5 mein course-details.html
             * is value ko use karega.
             */

            window.location.href = "course-details.html?course=" + course;

        }
    );

});



/* =====================================================
   LOGOUT
   ===================================================== */

const logoutBtn =
    document.getElementById(
        "logoutBtn"
    );


if (logoutBtn) {

    logoutBtn.addEventListener(
        "click",
        function () {

            localStorage.removeItem(
                "studyHubLoggedIn"
            );


            window.location.href =
                "login.html";

        }
    );

}