/* =====================================================
   STUDYHUB - COURSE ROADMAP
   ===================================================== */


/* =====================================================
   COURSE DATA
   ===================================================== */

const courses = {

    html: {

        title: "HTML",

        category: "Frontend",

        icon: "🌐",

        description:
            "Learn the structure of websites using HTML.",

        duration: "4 Hours",

        lessons: [

            {
                title: "Introduction to HTML",
                description:
                    "Learn what HTML is and how websites use it."
            },

            {
                title: "HTML Document Structure",
                description:
                    "Learn DOCTYPE, html, head and body."
            },

            {
                title: "Headings and Paragraphs",
                description:
                    "Learn how to create headings and paragraphs."
            },

            {
                title: "Links and Images",
                description:
                    "Learn how to add links and images."
            },

            {
                title: "Lists and Tables",
                description:
                    "Learn ordered lists, unordered lists and tables."
            },

            {
                title: "Forms",
                description:
                    "Learn inputs, buttons and HTML forms."
            },

            {
                title: "Semantic HTML",
                description:
                    "Learn header, nav, main, section and footer."
            }

        ]

    },


    css: {

        title: "CSS",

        category: "Frontend",

        icon: "🎨",

        description:
            "Learn how to create beautiful and responsive websites.",

        duration: "5 Hours",

        lessons: [

            {
                title: "Introduction to CSS",
                description:
                    "Learn what CSS is and how it styles HTML."
            },

            {
                title: "Selectors",
                description:
                    "Learn element, class and ID selectors."
            },

            {
                title: "Colors and Backgrounds",
                description:
                    "Learn colors, backgrounds and gradients."
            },

            {
                title: "Box Model",
                description:
                    "Learn margin, padding, border and content."
            },

            {
                title: "Flexbox",
                description:
                    "Learn how to create flexible layouts."
            },

            {
                title: "CSS Grid",
                description:
                    "Learn how to create grid layouts."
            },

            {
                title: "Responsive Design",
                description:
                    "Learn media queries and responsive websites."
            }

        ]

    },


    javascript: {

        title: "JavaScript",

        category: "Programming",

        icon: "⚡",

        description:
            "Learn JavaScript and make websites interactive.",

        duration: "8 Hours",

        lessons: [

            {
                title: "Introduction to JavaScript",
                description:
                    "Understand what JavaScript does in websites."
            },

            {
                title: "Variables",
                description:
                    "Learn let, const and basic variables."
            },

            {
                title: "Data Types",
                description:
                    "Learn strings, numbers, booleans and objects."
            },

            {
                title: "Conditions",
                description:
                    "Learn if, else and comparison operators."
            },

            {
                title: "Functions",
                description:
                    "Learn how to create reusable functions."
            },

            {
                title: "Arrays and Objects",
                description:
                    "Learn how to store and manage data."
            },

            {
                title: "DOM Manipulation",
                description:
                    "Learn how JavaScript changes HTML elements."
            },

            {
                title: "Events",
                description:
                    "Learn click, submit and keyboard events."
            },

            {
                title: "LocalStorage",
                description:
                    "Learn how to save data in the browser."
            },

            {
                title: "JavaScript Project",
                description:
                    "Build a small project using JavaScript."
            }

        ]

    },


    git: {

        title: "Git & GitHub",

        category: "Development Tools",

        icon: "🔀",

        description:
            "Learn version control and manage your projects with GitHub.",

        duration: "3 Hours",

        lessons: [

            {
                title: "Introduction to Git",
                description:
                    "Understand Git and version control."
            },

            {
                title: "Git Installation",
                description:
                    "Install Git and configure your account."
            },

            {
                title: "Git Init and Status",
                description:
                    "Learn how to initialize and check a repository."
            },

            {
                title: "Git Add and Commit",
                description:
                    "Learn how to save your project changes."
            },

            {
                title: "GitHub Repository",
                description:
                    "Create and manage repositories on GitHub."
            },

            {
                title: "Push and Pull",
                description:
                    "Learn how to send and receive code."
            },

            {
                title: "Branches",
                description:
                    "Learn how to work with branches."
            }

        ]

    },


    "web-development": {

        title: "Web Development",

        category: "Career",

        icon: "💻",

        description:
            "Learn how HTML, CSS and JavaScript work together.",

        duration: "12 Hours",

        lessons: [

            {
                title: "What is Web Development?",
                description:
                    "Understand frontend and backend development."
            },

            {
                title: "HTML Basics",
                description:
                    "Create the structure of a website."
            },

            {
                title: "CSS Basics",
                description:
                    "Design and style your website."
            },

            {
                title: "JavaScript Basics",
                description:
                    "Add interaction to your website."
            },

            {
                title: "Responsive Websites",
                description:
                    "Make websites work on different screens."
            },

            {
                title: "Git & GitHub",
                description:
                    "Manage your project using Git and GitHub."
            },

            {
                title: "Final Project",
                description:
                    "Build a complete website using your skills."
            }

        ]

    }

};



/* =====================================================
   GET COURSE FROM URL
   ===================================================== */

const urlParams =
    new URLSearchParams(
        window.location.search
    );


const courseName =
    urlParams.get("course");



/* =====================================================
   SELECT ELEMENTS
   ===================================================== */

const courseTitle =
    document.getElementById("courseTitle");

const courseCategory =
    document.getElementById("courseCategory");

const courseIcon =
    document.getElementById("courseIcon");

const courseDescription =
    document.getElementById("courseDescription");

const courseDuration =
    document.getElementById("courseDuration");

const lessonCount =
    document.getElementById("lessonCount");

const roadmapContainer =
    document.getElementById("roadmapContainer");

const totalLessons =
    document.getElementById("totalLessons");

const completedLessons =
    document.getElementById("completedLessons");

const progressPercentage =
    document.getElementById("progressPercentage");

const roadmapProgressFill =
    document.getElementById(
        "roadmapProgressFill"
    );



/* =====================================================
   CHECK COURSE
   ===================================================== */

const selectedCourse =
    courses[courseName];


if (!selectedCourse) {

    courseTitle.textContent =
        "Course Not Found";

    courseDescription.textContent =
        "Please go back and select a valid course.";

} else {

    loadCourse();

}



/* =====================================================
   LOAD COURSE
   ===================================================== */

function loadCourse() {

    courseTitle.textContent =
        selectedCourse.title;


    courseCategory.textContent =
        selectedCourse.category;


    courseIcon.textContent =
        selectedCourse.icon;


    courseDescription.textContent =
        selectedCourse.description;


    courseDuration.textContent =
        "⏱️ " + selectedCourse.duration;


    lessonCount.textContent =
        "📚 " +
        selectedCourse.lessons.length +
        " Lessons";


    totalLessons.textContent =
        selectedCourse.lessons.length;


    renderLessons();

    updateProgress();

}



/* =====================================================
   GET SAVED PROGRESS
   ===================================================== */

function getProgress() {

    const savedProgress =
        localStorage.getItem(
            "studyHubProgress_" + courseName
        );


    if (savedProgress) {

        return JSON.parse(
            savedProgress
        );

    }


    return [];

}



/* =====================================================
   SAVE PROGRESS
   ===================================================== */

function saveProgress(completed) {

    localStorage.setItem(

        "studyHubProgress_" +
        courseName,

        JSON.stringify(completed)

    );

}



/* =====================================================
   RENDER LESSONS
   ===================================================== */

function renderLessons() {

    const completed =
        getProgress();


    roadmapContainer.innerHTML = "";


    selectedCourse.lessons.forEach(
        function (lesson, index) {


            const isCompleted =
                completed.includes(index);


            const lessonElement =
                document.createElement("div");


            lessonElement.className =
                "roadmap-lesson";


            if (isCompleted) {

                lessonElement.classList.add(
                    "completed"
                );

            }


            lessonElement.innerHTML = `

                <div class="lesson-number">

                    ${index + 1}

                </div>


                <div class="lesson-content">

                    <h3>

                        ${lesson.title}

                    </h3>


                    <p>

                        ${lesson.description}

                    </p>

                </div>


                <button
                    class="lesson-complete-btn"
                    data-index="${index}">

                    ${isCompleted
                        ? "✓ Completed"
                        : "Mark Complete"}

                </button>

            `;


            roadmapContainer.appendChild(
                lessonElement
            );

        }
    );


    addLessonEvents();

}



/* =====================================================
   LESSON BUTTON EVENTS
   ===================================================== */

function addLessonEvents() {

    const buttons =
        document.querySelectorAll(
            ".lesson-complete-btn"
        );


    buttons.forEach(
        function (button) {

            button.addEventListener(
                "click",
                function () {

                    const index =
                        Number(
                            this.dataset.index
                        );


                    toggleLesson(index);

                }
            );

        }
    );

}



/* =====================================================
   COMPLETE / UNCOMPLETE LESSON
   ===================================================== */

function toggleLesson(index) {

    let completed =
        getProgress();


    if (completed.includes(index)) {

        completed =
            completed.filter(
                function (item) {

                    return item !== index;

                }
            );

    } else {

        completed.push(index);

    }


    saveProgress(completed);


    renderLessons();

    updateProgress();

}



/* =====================================================
   UPDATE PROGRESS
   ===================================================== */

function updateProgress() {

    const completed =
        getProgress();


    const total =
        selectedCourse.lessons.length;


    const completedCount =
        completed.length;


    const percentage =
        Math.round(
            (completedCount / total) * 100
        );


    completedLessons.textContent =
        completedCount;


    progressPercentage.textContent =
        percentage + "%";


    roadmapProgressFill.style.width =
        percentage + "%";

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