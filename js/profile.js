/* =====================================================
   STUDYHUB - PROFILE PAGE
   ===================================================== */


/* =====================================================
   PROFILE INPUTS
   ===================================================== */

const nameInput =
    document.getElementById("nameInput");

const emailInput =
    document.getElementById("emailInput");

const educationInput =
    document.getElementById("educationInput");

const roleInput =
    document.getElementById("roleInput");

const skillsInput =
    document.getElementById("skillsInput");


/* =====================================================
   SAVE PROFILE
   ===================================================== */

const saveProfileBtn =
    document.getElementById("saveProfileBtn");


if (saveProfileBtn) {

    saveProfileBtn.addEventListener(
        "click",
        function () {


            /* Get values */

            const name =
                nameInput.value;

            const email =
                emailInput.value;

            const education =
                educationInput.value;

            const role =
                roleInput.value;

            const skills =
                skillsInput.value;


            /* Save data */

            localStorage.setItem(
                "profileName",
                name
            );

            localStorage.setItem(
                "profileEmail",
                email
            );

            localStorage.setItem(
                "profileEducation",
                education
            );

            localStorage.setItem(
                "profileRole",
                role
            );

            localStorage.setItem(
                "profileSkills",
                skills
            );


            /* Update profile */

            document.getElementById(
                "profileNameDisplay"
            ).textContent = name;


            document.getElementById(
                "profileEmailDisplay"
            ).textContent = email;


            /* Show message */

            document.getElementById(
                "saveMessage"
            ).textContent =
                "Profile saved successfully!";


        }
    );

}


/* =====================================================
   LOAD SAVED PROFILE
   ===================================================== */

const savedName =
    localStorage.getItem("profileName");


const savedEmail =
    localStorage.getItem("profileEmail");


const savedEducation =
    localStorage.getItem("profileEducation");


const savedRole =
    localStorage.getItem("profileRole");


const savedSkills =
    localStorage.getItem("profileSkills");


if (savedName) {

    nameInput.value =
        savedName;

    document.getElementById(
        "profileNameDisplay"
    ).textContent =
        savedName;

}


if (savedEmail) {

    emailInput.value =
        savedEmail;

    document.getElementById(
        "profileEmailDisplay"
    ).textContent =
        savedEmail;

}


if (savedEducation) {

    educationInput.value =
        savedEducation;

}


if (savedRole) {

    roleInput.value =
        savedRole;

}


if (savedSkills) {

    skillsInput.value =
        savedSkills;

}


/* =====================================================
   PROFILE IMAGE UPLOAD
   ===================================================== */

const imageUpload =
    document.getElementById("imageUpload");

const profileImage =
    document.getElementById("profileImage");

const defaultAvatar =
    document.getElementById("defaultAvatar");


if (imageUpload) {

    imageUpload.addEventListener(
        "change",
        function () {

            const file =
                imageUpload.files[0];


            if (file) {

                const reader =
                    new FileReader();


                reader.onload =
                    function () {

                        profileImage.src =
                            reader.result;

                        profileImage.style.display =
                            "block";

                        defaultAvatar.style.display =
                            "none";


                        localStorage.setItem(
                            "profileImage",
                            reader.result
                        );

                    };


                reader.readAsDataURL(file);

            }

        }
    );

}

/* =====================================================
   REMOVE PROFILE IMAGE
   ===================================================== */

const removePhotoBtn =
    document.getElementById(
        "removePhotoBtn"
    );


if (removePhotoBtn) {

    removePhotoBtn.addEventListener(
        "click",
        function () {

            profileImage.src = "";

            profileImage.style.display =
                "none";

            defaultAvatar.style.display =
                "flex";


            localStorage.removeItem(
                "profileImage"
            );


            imageUpload.value = "";

        }
    );

}


/* =====================================================
   LOAD PROFILE IMAGE
   ===================================================== */

const savedImage =
    localStorage.getItem(
        "profileImage"
    );


if (savedImage) {

    profileImage.src =
        savedImage;

    profileImage.style.display =
        "block";

    defaultAvatar.style.display =
        "none";

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