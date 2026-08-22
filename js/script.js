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


/* HARIS WILL ADD CODE HERE */


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