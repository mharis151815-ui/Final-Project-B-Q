/* =====================================================
   3. STUDENT DASHBOARD
   ===================================================== */

/* =========================
   GET USER FROM LOCAL STORAGE
========================= */

const dashboardUserName =
    document.getElementById("dashboardUserName");

const savedUser =
    localStorage.getItem("studyHubUser");


/* =========================
   SHOW USER NAME
========================= */

if (savedUser) {

    const user =
        JSON.parse(savedUser);

    dashboardUserName.textContent =
        user.name;

} else {

    dashboardUserName.textContent =
        "Student";

}


/* =========================
   SHOW CURRENT DATE
========================= */

const dashboardDate =
    document.getElementById("dashboardDate");

if (dashboardDate) {

    const today =
        new Date();

    dashboardDate.textContent =
        today.toLocaleDateString(
            "en-US",
            {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
            }
        );

}


/* =========================
   VIEW TASKS BUTTON
========================= */

const viewTasksButton =
    document.getElementById("viewTasksButton");

if (viewTasksButton) {

    viewTasksButton.addEventListener(
        "click",
        function () {

            alert(
                "Tasks section will open here! ✅"
            );

        }
    );

}


/* =========================
   VIEW NOTES BUTTON
========================= */

const viewNotesButton =
    document.getElementById("viewNotesButton");

if (viewNotesButton) {

    viewNotesButton.addEventListener(
        "click",
        function () {

            alert(
                "Notes section will open here! 📝"
            );

        }
    );

}