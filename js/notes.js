/* =====================================================
   STUDYHUB - NOTES MANAGER
   ===================================================== */


/* =====================================================
   GET HTML ELEMENTS
   ===================================================== */

const addNoteBtn =
    document.getElementById("addNoteBtn");

const noteFormBox =
    document.getElementById("noteFormBox");

const noteForm =
    document.getElementById("noteForm");

const cancelNoteBtn =
    document.getElementById("cancelNoteBtn");

const noteTitle =
    document.getElementById("noteTitle");

const noteCategory =
    document.getElementById("noteCategory");

const noteContent =
    document.getElementById("noteContent");

const notesContainer =
    document.getElementById("notesContainer");

const searchNote =
    document.getElementById("searchNote");

const notesCount =
    document.getElementById("notesCount");


/* =====================================================
   NOTES ARRAY
   ===================================================== */

let notes =
    JSON.parse(
        localStorage.getItem("studyHubNotes")
    ) || [];


/* =====================================================
   EDIT NOTE ID
   ===================================================== */

let editId = null;


/* =====================================================
   SHOW ADD NOTE FORM
   ===================================================== */

addNoteBtn.addEventListener(
    "click",
    function () {

        noteFormBox.classList.add("show");

        noteTitle.focus();

    }
);


/* =====================================================
   CANCEL FORM
   ===================================================== */

cancelNoteBtn.addEventListener(
    "click",
    function () {

        noteForm.reset();

        editId = null;

        noteFormBox.classList.remove("show");

    }
);


/* =====================================================
   ADD / EDIT NOTE
   ===================================================== */

noteForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const title =
            noteTitle.value.trim();

        const category =
            noteCategory.value;

        const content =
            noteContent.value.trim();


        if (editId === null) {

            /* ADD NEW NOTE */

            const newNote = {

                id: Date.now(),

                title: title,

                category: category,

                content: content,

                date: new Date()
                    .toLocaleDateString(),

                pinned: false

            };


            notes.push(newNote);

        } else {

            /* EDIT NOTE */

            for (let i = 0; i < notes.length; i++) {

                if (notes[i].id === editId) {

                    notes[i].title = title;

                    notes[i].category = category;

                    notes[i].content = content;

                }

            }

        }


        /* SAVE */

        localStorage.setItem(
            "studyHubNotes",
            JSON.stringify(notes)
        );


        /* RESET */

        noteForm.reset();

        editId = null;

        noteFormBox.classList.remove("show");


        /* SHOW NOTES */

        showNotes();

    }
);


/* =====================================================
   SHOW NOTES
   ===================================================== */

function showNotes() {

    const search =
        searchNote.value
            .toLowerCase();


    notesContainer.innerHTML = "";


    let foundNotes = 0;


    for (let i = 0; i < notes.length; i++) {

        const note = notes[i];


        if (
            note.title
                .toLowerCase()
                .includes(search) ||

            note.content
                .toLowerCase()
                .includes(search)
        ) {

            foundNotes++;


            const noteCard =
                document.createElement("div");


            noteCard.className =
                "note-card";


            if (note.pinned) {

                noteCard.classList.add("pinned");

            }


            noteCard.innerHTML = `

                <div class="note-top">

                    <span class="note-category">

                        ${note.category}

                    </span>


                    <button
                        class="pin-btn"
                        onclick="pinNote(${note.id})">

                        ${note.pinned ? "📌" : "📍"}

                    </button>

                </div>


                <h3>
                    ${note.title}
                </h3>


                <p>
                    ${note.content}
                </p>


                <div class="note-date">

                    📅 ${note.date}

                </div>


                <div class="note-actions">

                    <button
                        class="edit-note"
                        onclick="editNote(${note.id})">

                        ✏️ Edit

                    </button>


                    <button
                        class="delete-note"
                        onclick="deleteNote(${note.id})">

                        🗑️ Delete

                    </button>

                </div>

            `;


            notesContainer.appendChild(
                noteCard
            );

        }

    }


    /* EMPTY MESSAGE */

    if (foundNotes === 0) {

        notesContainer.innerHTML = `

            <div class="empty-notes">

                📝

                <h3>
                    No notes found
                </h3>

                <p>
                    Create your first study note.
                </p>

            </div>

        `;

    }


    notesCount.textContent =
        foundNotes +
        (foundNotes === 1
            ? " Note"
            : " Notes");

}


/* =====================================================
   SEARCH NOTES
   ===================================================== */

searchNote.addEventListener(
    "input",
    function () {

        showNotes();

    }
);


/* =====================================================
   EDIT NOTE
   ===================================================== */

function editNote(id) {

    for (let i = 0; i < notes.length; i++) {

        if (notes[i].id === id) {

            noteTitle.value =
                notes[i].title;

            noteCategory.value =
                notes[i].category;

            noteContent.value =
                notes[i].content;

            editId = id;

            noteFormBox.classList.add(
                "show"
            );

            noteTitle.focus();

        }

    }

}


/* =====================================================
   DELETE NOTE
   ===================================================== */

function deleteNote(id) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this note?"
        );


    if (confirmDelete) {

        for (let i = 0; i < notes.length; i++) {

            if (notes[i].id === id) {

                notes.splice(i, 1);

                break;

            }

        }


        localStorage.setItem(
            "studyHubNotes",
            JSON.stringify(notes)
        );


        showNotes();

    }

}


/* =====================================================
   PIN NOTE
   ===================================================== */

function pinNote(id) {

    for (let i = 0; i < notes.length; i++) {

        if (notes[i].id === id) {

            notes[i].pinned =
                !notes[i].pinned;

        }

    }


    localStorage.setItem(
        "studyHubNotes",
        JSON.stringify(notes)
    );


    showNotes();

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
   SHOW NOTES WHEN PAGE LOADS
   ===================================================== */

showNotes();