/* =========================================================
   STUDYHUB JAVASCRIPT
========================================================= */


/* =========================================================
   1. GENERAL SECTION NAVIGATION
   MAIZ
========================================================= */

function showSection(sectionId) {

    const sections = document.querySelectorAll("main > section");

    sections.forEach(section => {
        section.classList.add("hidden");
    });

    const selectedSection = document.getElementById(sectionId);

    if (selectedSection) {
        selectedSection.classList.remove("hidden");
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    }
}


function scrollToFeatures() {

    const features = document.getElementById("features");

    if (features) {
        features.scrollIntoView({
            behavior: "smooth"
        });
    }
}


/* =========================================================
   2. LOGIN & SIGNUP
   MAIZ
========================================================= */

let users = JSON.parse(
    localStorage.getItem("studyhub_users")
) || [];


document
    .getElementById("signupForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const name =
            document.getElementById("signupName").value.trim();

        const email =
            document.getElementById("signupEmail").value.trim();

        const password =
            document.getElementById("signupPassword").value;

        const confirmPassword =
            document.getElementById("confirmPassword").value;


        if (password !== confirmPassword) {

            alert("Passwords do not match.");

            return;
        }


        const existingUser = users.find(
            user => user.email === email
        );


        if (existingUser) {

            alert("Email already registered.");

            return;
        }


        const newUser = {

            id: Date.now(),

            name,

            email,

            password

        };


        users.push(newUser);


        localStorage.setItem(
            "studyhub_users",
            JSON.stringify(users)
        );


        localStorage.setItem(
            "studyhub_currentUser",
            JSON.stringify(newUser)
        );


        alert("Account created successfully!");

        updateUserUI();

        showSection("dashboard");

    });


document
    .getElementById("loginForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();


        const email =
            document.getElementById("loginEmail").value.trim();

        const password =
            document.getElementById("loginPassword").value;


        const user = users.find(
            user =>
                user.email === email &&
                user.password === password
        );


        if (!user) {

            alert("Invalid email or password.");

            return;
        }


        localStorage.setItem(
            "studyhub_currentUser",
            JSON.stringify(user)
        );


        updateUserUI();

        showSection("dashboard");

    });


function logout() {

    localStorage.removeItem("studyhub_currentUser");

    showSection("home");

}


/* =========================================================
   3. USER UI
   MAIZ
========================================================= */

function updateUserUI() {

    const currentUser = JSON.parse(
        localStorage.getItem("studyhub_currentUser")
    );


    if (!currentUser) {

        document
            .getElementById("dashboardName")
            .textContent = "Student";

        return;
    }


    document
        .getElementById("dashboardName")
        .textContent = currentUser.name;

    document
        .getElementById("profileName")
        .textContent = currentUser.name;

}


/* =========================================================
   4. COURSE ROADMAP
   MAIZ
========================================================= */

function openRoadmap(courseName) {

    document
        .getElementById("roadmapTitle")
        .textContent =
        `${courseName} Roadmap`;

    showSection("roadmap");

}


/* =========================================================
   5. NOTES MANAGER
   MAIZ
========================================================= */

let notes = JSON.parse(
    localStorage.getItem("studyhub_notes")
) || [];


const noteForm =
    document.getElementById("noteForm");


noteForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const title =
            document.getElementById("noteTitle")
                .value
                .trim();

        const category =
            document.getElementById("noteCategory")
                .value;

        const content =
            document.getElementById("noteContent")
                .value
                .trim();

        const editingId =
            document.getElementById("editingNoteId")
                .value;


        if (!title || !content) {

            alert("Please fill all fields.");

            return;
        }


        if (editingId) {

            notes = notes.map(note => {

                if (note.id == editingId) {

                    return {
                        ...note,
                        title,
                        category,
                        content
                    };

                }

                return note;

            });

        } else {

            notes.push({

                id: Date.now(),

                title,

                category,

                content,

                date: new Date()
                    .toLocaleDateString()

            });

        }


        saveNotes();

        noteForm.reset();

        document
            .getElementById("editingNoteId")
            .value = "";

        renderNotes();

    }
);


function saveNotes() {

    localStorage.setItem(
        "studyhub_notes",
        JSON.stringify(notes)
    );

}


function renderNotes() {

    const notesList =
        document.getElementById("notesList");


    const search =
        document.getElementById("noteSearch")
            .value
            .toLowerCase();


    const filteredNotes =
        notes.filter(note =>

            note.title
                .toLowerCase()
                .includes(search)

            ||

            note.content
                .toLowerCase()
                .includes(search)

        );


    if (filteredNotes.length === 0) {

        notesList.innerHTML = `
            <p class="empty-text">
                No notes found.
            </p>
        `;

        return;
    }


    notesList.innerHTML =
        filteredNotes.map(note => `

            <div class="note-card">

                <h3>${escapeHTML(note.title)}</h3>

                <span class="note-category">
                    ${escapeHTML(note.category)}
                </span>

                <p>
                    ${escapeHTML(note.content)}
                </p>

                <small>
                    ${note.date}
                </small>

                <div class="note-actions">

                    <button
                        onclick="editNote(${note.id})"
                    >
                        Edit
                    </button>

                    <button
                        onclick="deleteNote(${note.id})"
                    >
                        Delete
                    </button>

                </div>

            </div>

        `).join("");

}


document
    .getElementById("noteSearch")
    .addEventListener(
        "input",
        renderNotes
    );


function editNote(id) {

    const note =
        notes.find(note => note.id === id);


    if (!note) return;


    document
        .getElementById("noteTitle")
        .value = note.title;

    document
        .getElementById("noteCategory")
        .value = note.category;

    document
        .getElementById("noteContent")
        .value = note.content;

    document
        .getElementById("editingNoteId")
        .value = note.id;

    showSection("notes");

}


function deleteNote(id) {

    notes =
        notes.filter(note => note.id !== id);

    saveNotes();

    renderNotes();

}


/* =========================================================
   6. TODO / TASK MANAGER
   MAIZ
========================================================= */

let tasks = JSON.parse(
    localStorage.getItem("studyhub_tasks")
) || [];


document
    .getElementById("taskForm")
    .addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const title =
                document
                    .getElementById("taskTitle")
                    .value
                    .trim();


            const priority =
                document
                    .getElementById("taskPriority")
                    .value;


            const dueDate =
                document
                    .getElementById("taskDueDate")
                    .value;


            if (!title) return;


            tasks.push({

                id: Date.now(),

                title,

                priority,

                dueDate,

                completed: false

            });


            saveTasks();

            this.reset();

            renderTasks();

        }
    );


function saveTasks() {

    localStorage.setItem(
        "studyhub_tasks",
        JSON.stringify(tasks)
    );

}


function renderTasks(filter = "all") {

    const taskList =
        document.getElementById("taskList");


    let filteredTasks = tasks;


    if (filter === "pending") {

        filteredTasks =
            tasks.filter(task => !task.completed);

    }


    if (filter === "completed") {

        filteredTasks =
            tasks.filter(task => task.completed);

    }


    if (filteredTasks.length === 0) {

        taskList.innerHTML = `
            <p class="empty-text">
                No tasks found.
            </p>
        `;

        updateTaskStats();

        return;
    }


    taskList.innerHTML =
        filteredTasks.map(task => `

            <div
                class="task-card
                ${task.completed ? "completed" : ""}"
            >

                <input
                    type="checkbox"
                    ${task.completed ? "checked" : ""}
                    onchange="toggleTask(${task.id})"
                >

                <div class="task-info">

                    <h3>
                        ${escapeHTML(task.title)}
                    </h3>

                    ${
                        task.dueDate
                            ? `<small>Due: ${task.dueDate}</small>`
                            : ""
                    }

                </div>

                <span
                    class="task-priority priority-${task.priority}"
                >
                    ${task.priority}
                </span>

                <button
                    onclick="deleteTask(${task.id})"
                >
                    🗑️
                </button>

            </div>

        `).join("");


    updateTaskStats();

}


function toggleTask(id) {

    tasks =
        tasks.map(task => {

            if (task.id === id) {

                return {
                    ...task,
                    completed: !task.completed
                };

            }

            return task;

        });


    saveTasks();

    renderTasks();

}


function deleteTask(id) {

    tasks =
        tasks.filter(task => task.id !== id);

    saveTasks();

    renderTasks();

}


function filterTasks(filter) {

    document
        .querySelectorAll(".filter-btn")
        .forEach(button => {

            button.classList.remove("active");

        });


    event.target.classList.add("active");


    renderTasks(filter);

}


function updateTaskStats() {

    const completed =
        tasks.filter(task => task.completed)
            .length;


    document
        .getElementById("taskCount")
        .textContent =
        `${completed}/${tasks.length || 0}`;


    document
        .getElementById("profileTasks")
        .textContent =
        tasks.length;

}


/* =========================================================
   7. HARIS - QUIZ
========================================================= */

// RESERVED FOR HARIS


/* =========================================================
   8. HARIS - POMODORO
========================================================= */

// RESERVED FOR HARIS


/* =========================================================
   9. EXPENSE TRACKER
   MAIZ
========================================================= */

let expenses = JSON.parse(
    localStorage.getItem("studyhub_expenses")
) || [];


document
    .getElementById("expenseForm")
    .addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const title =
                document
                    .getElementById("expenseTitle")
                    .value
                    .trim();


            const amount =
                Number(
                    document
                        .getElementById("expenseAmount")
                        .value
                );


            const type =
                document
                    .getElementById("expenseType")
                    .value;


            const category =
                document
                    .getElementById("expenseCategory")
                    .value;


            if (!title || amount <= 0) {

                alert("Enter valid transaction details.");

                return;
            }


            expenses.push({

                id: Date.now(),

                title,

                amount,

                type,

                category

            });


            localStorage.setItem(
                "studyhub_expenses",
                JSON.stringify(expenses)
            );


            this.reset();

            renderExpenses();

        }
    );


function renderExpenses() {

    const expenseList =
        document.getElementById("expenseList");


    let income = 0;

    let expense = 0;


    expenses.forEach(item => {

        if (item.type === "income") {

            income += item.amount;

        } else {

            expense += item.amount;

        }

    });


    const balance =
        income - expense;


    document
        .getElementById("totalIncome")
        .textContent =
        `Rs. ${income.toLocaleString()}`;


    document
        .getElementById("totalExpense")
        .textContent =
        `Rs. ${expense.toLocaleString()}`;


    document
        .getElementById("totalBalance")
        .textContent =
        `Rs. ${balance.toLocaleString()}`;


    if (expenses.length === 0) {

        expenseList.innerHTML = `
            <p class="empty-text">
                No transactions yet.
            </p>
        `;

        return;
    }


    expenseList.innerHTML =
        expenses.map(item => `

            <div class="expense-item">

                <div>

                    <strong>
                        ${escapeHTML(item.title)}
                    </strong>

                    <small>
                        ${escapeHTML(item.category)}
                    </small>

                </div>

                <div>

                    <strong>
                        ${
                            item.type === "income"
                                ? "+"
                                : "-"
                        }
                        Rs. ${item.amount.toLocaleString()}
                    </strong>

                    <button
                        onclick="deleteExpense(${item.id})"
                    >
                        🗑️
                    </button>

                </div>

            </div>

        `).join("");

}


function deleteExpense(id) {

    expenses =
        expenses.filter(
            item => item.id !== id
        );


    localStorage.setItem(
        "studyhub_expenses",
        JSON.stringify(expenses)
    );


    renderExpenses();

}


/* =========================================================
   10. HARIS - STUDY PROGRESS
========================================================= */

// RESERVED FOR HARIS


/* =========================================================
   11. AI / SMART TOOLS
   MAIZ
========================================================= */


/* WORD COUNTER */

document
    .getElementById("wordCounterInput")
    .addEventListener(
        "input",
        function () {

            const text =
                this.value.trim();


            const words =
                text
                    ? text.split(/\s+/).length
                    : 0;


            document
                .getElementById("wordCount")
                .textContent =
                words;

        }
    );


/* CALCULATOR */

function calculateResult() {

    const input =
        document
            .getElementById("calculatorInput")
            .value
            .trim();


    const result =
        document
            .getElementById("calculatorResult");


    if (!input) {

        result.textContent =
            "Result: Enter an expression";

        return;
    }


    try {

        /*
         * This is a simple demo calculator.
         * Only basic mathematical expressions
         * should be entered.
         */

        const answer =
            Function(
                `"use strict"; return (${input})`
            )();


        result.textContent =
            `Result: ${answer}`;

    } catch {

        result.textContent =
            "Result: Invalid expression";

    }

}


/* PASSWORD GENERATOR */

function generatePassword() {

    const characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
        "abcdefghijklmnopqrstuvwxyz" +
        "0123456789!@#$%^&*";


    let password = "";


    for (let i = 0; i < 12; i++) {

        const randomIndex =
            Math.floor(
                Math.random() *
                characters.length
            );


        password +=
            characters[randomIndex];

    }


    document
        .getElementById("generatedPassword")
        .value =
        password;

}


/* COLOR PICKER */

document
    .getElementById("colorPicker")
    .addEventListener(
        "input",
        function () {

            document
                .getElementById("colorValue")
                .textContent =
                this.value;

        }
    );


/* =========================================================
   12. HARIS - SEARCH
========================================================= */

// RESERVED FOR HARIS


/* =========================================================
   13. HARIS - FAVORITES
========================================================= */

// RESERVED FOR HARIS


/* =========================================================
   14. HARIS - DARK / LIGHT MODE
========================================================= */

// RESERVED FOR HARIS


/* =========================================================
   15. HARIS - NOTIFICATIONS / TOASTS
========================================================= */

// RESERVED FOR HARIS


/* =========================================================
   16. PROFILE
   MAIZ
========================================================= */

function updateProfileStats() {

    document
        .getElementById("profileCourses")
        .textContent = 4;


    document
        .getElementById("profileTasks")
        .textContent =
        tasks.length;


    document
        .getElementById("profileNotes")
        .textContent =
        notes.length;

}


/* =========================================================
   17. HARIS - SETTINGS
========================================================= */

// RESERVED FOR HARIS


/* =========================================================
   18. LOCAL STORAGE
   MAIZ
========================================================= */

function saveAllData() {

    localStorage.setItem(
        "studyhub_notes",
        JSON.stringify(notes)
    );

    localStorage.setItem(
        "studyhub_tasks",
        JSON.stringify(tasks)
    );

    localStorage.setItem(
        "studyhub_expenses",
        JSON.stringify(expenses)
    );

}


/* =========================================================
   SECURITY HELPER
========================================================= */

function escapeHTML(value) {

    return String(value)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");

}


/* =========================================================
   INITIALIZE APP
========================================================= */

function initializeApp() {

    updateUserUI();

    renderNotes();

    renderTasks();

    renderExpenses();

    updateProfileStats();

}


initializeApp();