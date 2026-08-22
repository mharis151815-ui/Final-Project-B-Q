/* =====================================================
   STUDYHUB DASHBOARD
   ===================================================== */


/* =====================================================
   GET USER FROM LOCAL STORAGE
   ===================================================== */

const savedUser =
    localStorage.getItem("studyHubUser");


/* =====================================================
   CHECK LOGIN
   ===================================================== */

const isLoggedIn =
    localStorage.getItem("studyHubLoggedIn");


if (!savedUser || isLoggedIn !== "true") {

    window.location.href = "login.html";

}


/* =====================================================
   GET USER DATA
   ===================================================== */

let user = null;


if (savedUser) {

    user = JSON.parse(savedUser);

}


/* =====================================================
   SHOW USER NAME
   ===================================================== */

if (user) {


    const welcomeMessage =
        document.getElementById(
            "welcomeMessage"
        );


    const topUserName =
        document.getElementById(
            "topUserName"
        );


    const userAvatar =
        document.getElementById(
            "userAvatar"
        );


    /* Welcome Message */

    if (welcomeMessage) {

        welcomeMessage.textContent =
            "Good Morning, " +
            user.name +
            " 👋";

    }


    /* Top User Name */

    if (topUserName) {

        topUserName.textContent =
            user.name;

    }


    /* User Avatar */

    if (userAvatar) {

        userAvatar.textContent =
            user.name
                .charAt(0)
                .toUpperCase();

    }

}


/* =====================================================
   CURRENT DATE
   ===================================================== */

const currentDate =
    document.getElementById(
        "currentDate"
    );


if (currentDate) {

    const today =
        new Date();


    const options = {

        weekday: "short",

        month: "short",

        day: "numeric"

    };


    currentDate.textContent =
        today.toLocaleDateString(
            "en-US",
            options
        );

}


/* =====================================================
   TASKS FROM LOCAL STORAGE
   ===================================================== */

const dashboardTasks =
    document.getElementById(
        "dashboardTasks"
    );


function loadDashboardTasks() {


    if (!dashboardTasks) {
        return;
    }


    const savedTasks =
        localStorage.getItem(
            "studyHubTasks"
        );


    let tasks = [];


    if (savedTasks) {

        tasks =
            JSON.parse(savedTasks);

    }


    /* No Tasks */

    if (tasks.length === 0) {

        dashboardTasks.innerHTML = `

            <div class="task-empty">

                📋 No tasks yet.

                <br>

                Add your first task!

            </div>

        `;

        updateTaskCount(
            0,
            0
        );

        return;
    }


    /* Show Maximum 4 Tasks */

    const latestTasks =
        tasks.slice(0, 4);


    dashboardTasks.innerHTML = "";


    latestTasks.forEach(
        function (task, index) {


            const taskItem =
                document.createElement(
                    "div"
                );


            taskItem.className =
                "task-item";


            if (task.completed) {

                taskItem.classList.add(
                    "completed"
                );

            }


            taskItem.innerHTML = `

                <input
                    type="checkbox"
                    class="task-checkbox"
                    ${task.completed ? "checked" : ""}
                    data-index="${index}"
                >

                <span>
                    ${task.title}
                </span>

            `;


            dashboardTasks.appendChild(
                taskItem
            );

        }
    );


    /* Task Count */

    const completedTasks =
        tasks.filter(
            function (task) {

                return task.completed;

            }
        ).length;


    updateTaskCount(
        completedTasks,
        tasks.length
    );

}


/* =====================================================
   UPDATE TASK COUNT
   ===================================================== */

function updateTaskCount(
    completed,
    total
) {

    const taskCount =
        document.getElementById(
            "taskCount"
        );


    if (taskCount) {

        taskCount.textContent =
            completed +
            "/" +
            total;

    }

}


/* =====================================================
   TASK CHECKBOX
   ===================================================== */

if (dashboardTasks) {

    dashboardTasks.addEventListener(
        "change",
        function (event) {


            if (
                event.target.classList.contains(
                    "task-checkbox"
                )
            ) {


                const index =
                    event.target.dataset.index;


                const savedTasks =
                    localStorage.getItem(
                        "studyHubTasks"
                    );


                if (!savedTasks) {
                    return;
                }


                const tasks =
                    JSON.parse(
                        savedTasks
                    );


                /* Update Task */

                tasks[index].completed =
                    event.target.checked;


                /* Save */

                localStorage.setItem(
                    "studyHubTasks",
                    JSON.stringify(tasks)
                );


                /* Reload */

                loadDashboardTasks();

            }

        }
    );

}


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


/* =====================================================
   MOBILE MENU
   ===================================================== */

const menuBtn =
    document.getElementById(
        "menuBtn"
    );


const sidebar =
    document.querySelector(
        ".sidebar"
    );


if (menuBtn && sidebar) {

    menuBtn.addEventListener(
        "click",
        function () {

            sidebar.classList.toggle(
                "show"
            );

        }
    );

}


/* =====================================================
   LOAD DASHBOARD
   ===================================================== */

loadDashboardTasks();