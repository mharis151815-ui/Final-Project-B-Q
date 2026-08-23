/* =====================================================
   STUDYHUB - TASK MANAGER
   ===================================================== */


/* =====================================================
   GET ELEMENTS
   ===================================================== */

const addTaskBtn =
    document.getElementById("addTaskBtn");

const taskFormBox =
    document.getElementById("taskFormBox");

const taskForm =
    document.getElementById("taskForm");

const cancelTaskBtn =
    document.getElementById("cancelTaskBtn");

const taskTitle =
    document.getElementById("taskTitle");

const taskPriority =
    document.getElementById("taskPriority");

const taskDate =
    document.getElementById("taskDate");

const searchTask =
    document.getElementById("searchTask");

const tasksContainer =
    document.getElementById("tasksContainer");

const totalTasks =
    document.getElementById("totalTasks");

const pendingTasks =
    document.getElementById("pendingTasks");

const completedTasks =
    document.getElementById("completedTasks");

const taskCount =
    document.getElementById("taskCount");


/* =====================================================
   GET SAVED TASKS
   ===================================================== */

let tasks =
    JSON.parse(
        localStorage.getItem("studyHubTasks")
    ) || [];


/* =====================================================
   EDIT TASK
   ===================================================== */

let editId = null;


/* =====================================================
   CURRENT FILTER
   ===================================================== */

let currentFilter = "all";


/* =====================================================
   OPEN FORM
   ===================================================== */

addTaskBtn.addEventListener(
    "click",
    function () {

        taskFormBox.classList.add("show");

        taskTitle.focus();

    }
);


/* =====================================================
   CANCEL FORM
   ===================================================== */

cancelTaskBtn.addEventListener(
    "click",
    function () {

        taskForm.reset();

        editId = null;

        taskFormBox.classList.remove("show");

    }
);


/* =====================================================
   ADD / EDIT TASK
   ===================================================== */

taskForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const title =
            taskTitle.value.trim();

        const priority =
            taskPriority.value;

        const date =
            taskDate.value;


        /* ADD */

        if (editId === null) {

            const newTask = {

                id: Date.now(),

                title: title,

                priority: priority,

                date: date,

                completed: false

            };


            tasks.push(newTask);

        }


        /* EDIT */

        else {

            for (
                let i = 0;
                i < tasks.length;
                i++
            ) {

                if (
                    tasks[i].id === editId
                ) {

                    tasks[i].title =
                        title;

                    tasks[i].priority =
                        priority;

                    tasks[i].date =
                        date;

                }

            }

        }


        /* SAVE */

        localStorage.setItem(
            "studyHubTasks",
            JSON.stringify(tasks)
        );


        /* RESET */

        taskForm.reset();

        editId = null;

        taskFormBox.classList.remove("show");


        /* DISPLAY */

        showTasks();

    }
);


/* =====================================================
   SHOW TASKS
   ===================================================== */

function showTasks() {

    tasksContainer.innerHTML = "";


    const search =
        searchTask.value
            .toLowerCase();


    let visibleTasks = 0;


    for (
        let i = 0;
        i < tasks.length;
        i++
    ) {

        const task = tasks[i];


        /* SEARCH */

        if (
            !task.title
                .toLowerCase()
                .includes(search)
        ) {

            continue;

        }


        /* FILTER */

        if (
            currentFilter === "pending" &&
            task.completed === true
        ) {

            continue;

        }


        if (
            currentFilter === "completed" &&
            task.completed === false
        ) {

            continue;

        }


        visibleTasks++;


        /* CREATE CARD */

        const taskCard =
            document.createElement("div");


        taskCard.className =
            "task-card";


        if (task.completed) {

            taskCard.classList.add(
                "completed"
            );

        }


        /* PRIORITY CLASS */

        let priorityClass =
            "priority-low";


        if (
            task.priority === "Medium"
        ) {

            priorityClass =
                "priority-medium";

        }


        if (
            task.priority === "High"
        ) {

            priorityClass =
                "priority-high";

        }


        /* CARD HTML */

        taskCard.innerHTML = `

            <input
                type="checkbox"
                class="task-check"
                ${task.completed ? "checked" : ""}
                onchange="completeTask(${task.id})">


            <div class="task-info">

                <h3>
                    ${task.title}
                </h3>

                <div class="task-date">

                    📅
                    ${task.date || "No due date"}

                </div>

            </div>


            <span
                class="task-priority ${priorityClass}">

                ${task.priority}

            </span>


            <div class="task-actions">

                <button
                    class="edit-task"
                    onclick="editTask(${task.id})">

                    ✏️

                </button>


                <button
                    class="delete-task"
                    onclick="deleteTask(${task.id})">

                    🗑️

                </button>

            </div>

        `;


        tasksContainer.appendChild(
            taskCard
        );

    }


    /* EMPTY */

    if (visibleTasks === 0) {

        tasksContainer.innerHTML = `

            <div class="empty-tasks">

                <h3>
                    ✅ No tasks found
                </h3>

                <p>
                    Add a task to get started.
                </p>

            </div>

        `;

    }


    /* COUNT */

    taskCount.textContent =
        visibleTasks +
        (visibleTasks === 1
            ? " Task"
            : " Tasks");


    updateStats();

}


/* =====================================================
   COMPLETE TASK
   ===================================================== */

function completeTask(id) {

    for (
        let i = 0;
        i < tasks.length;
        i++
    ) {

        if (tasks[i].id === id) {

            tasks[i].completed =
                !tasks[i].completed;

        }

    }


    saveTasks();

    showTasks();

}


/* =====================================================
   EDIT TASK
   ===================================================== */

function editTask(id) {

    for (
        let i = 0;
        i < tasks.length;
        i++
    ) {

        if (tasks[i].id === id) {

            taskTitle.value =
                tasks[i].title;

            taskPriority.value =
                tasks[i].priority;

            taskDate.value =
                tasks[i].date;

            editId = id;

            taskFormBox.classList.add(
                "show"
            );

            taskTitle.focus();

        }

    }

}


/* =====================================================
   DELETE TASK
   ===================================================== */

function deleteTask(id) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this task?"
        );


    if (confirmDelete) {

        for (
            let i = 0;
            i < tasks.length;
            i++
        ) {

            if (tasks[i].id === id) {

                tasks.splice(i, 1);

                break;

            }

        }


        saveTasks();

        showTasks();

    }

}


/* =====================================================
   SAVE TASKS
   ===================================================== */

function saveTasks() {

    localStorage.setItem(
        "studyHubTasks",
        JSON.stringify(tasks)
    );

}


/* =====================================================
   UPDATE STATS
   ===================================================== */

function updateStats() {

    let completed = 0;


    for (
        let i = 0;
        i < tasks.length;
        i++
    ) {

        if (tasks[i].completed) {

            completed++;

        }

    }


    totalTasks.textContent =
        tasks.length;


    completedTasks.textContent =
        completed;


    pendingTasks.textContent =
        tasks.length - completed;

}


/* =====================================================
   SEARCH
   ===================================================== */

searchTask.addEventListener(
    "input",
    function () {

        showTasks();

    }
);


/* =====================================================
   FILTER BUTTONS
   ===================================================== */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


for (
    let i = 0;
    i < filterButtons.length;
    i++
) {

    filterButtons[i].addEventListener(
        "click",
        function () {

            /* Remove active */

            for (
                let j = 0;
                j < filterButtons.length;
                j++
            ) {

                filterButtons[j]
                    .classList
                    .remove("active");

            }


            /* Add active */

            this.classList.add("active");


            /* Change filter */

            currentFilter =
                this.dataset.filter;


            showTasks();

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
   START
   ===================================================== */

showTasks();