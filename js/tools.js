/* =====================================================
   STUDYHUB - AI / SMART TOOLS
   ===================================================== */


/* =====================================================
   1. WORD COUNTER
   ===================================================== */

const wordText =
    document.getElementById("wordText");

const wordCount =
    document.getElementById("wordCount");

const characterCount =
    document.getElementById("characterCount");


if (wordText) {

    wordText.addEventListener(
        "input",
        function () {


            const text =
                wordText.value.trim();


            /* Count characters */

            characterCount.textContent =
                wordText.value.length;


            /* Count words */

            if (text === "") {

                wordCount.textContent = 0;

            } else {

                const words =
                    text.split(/\s+/);

                wordCount.textContent =
                    words.length;

            }

        }
    );

}


/* =====================================================
   2. TEXT FORMATTER
   ===================================================== */

const formatText =
    document.getElementById("formatText");


const upperBtn =
    document.getElementById("upperBtn");


const lowerBtn =
    document.getElementById("lowerBtn");


const clearTextBtn =
    document.getElementById("clearTextBtn");


if (upperBtn) {

    upperBtn.addEventListener(
        "click",
        function () {

            formatText.value =
                formatText.value.toUpperCase();

        }
    );

}


if (lowerBtn) {

    lowerBtn.addEventListener(
        "click",
        function () {

            formatText.value =
                formatText.value.toLowerCase();

        }
    );

}


if (clearTextBtn) {

    clearTextBtn.addEventListener(
        "click",
        function () {

            formatText.value = "";

        }
    );

}


/* =====================================================
   3. CALCULATOR
   ===================================================== */

const calculateBtn =
    document.getElementById(
        "calculateBtn"
    );


if (calculateBtn) {

    calculateBtn.addEventListener(
        "click",
        function () {


            const input =
                document.getElementById(
                    "calculatorInput"
                ).value;


            const result =
                document.getElementById(
                    "calculatorResult"
                );


            if (input === "") {

                result.textContent =
                    "Please enter a calculation.";

                return;

            }


            try {

                const answer =
                    Function(
                        "return " + input
                    )();


                result.textContent =
                    "Result: " + answer;

            }

            catch {

                result.textContent =
                    "Invalid calculation.";

            }

        }
    );

}


/* =====================================================
   4. PASSWORD GENERATOR
   ===================================================== */

const generatePasswordBtn =
    document.getElementById(
        "generatePasswordBtn"
    );


if (generatePasswordBtn) {

    generatePasswordBtn.addEventListener(
        "click",
        function () {


            const characters =
                "ABCDEFGHIJKLMNOPQRSTUVWXYZ" +
                "abcdefghijklmnopqrstuvwxyz" +
                "0123456789";


            let password = "";


            for (
                let i = 0;
                i < 10;
                i++
            ) {

                const randomNumber =
                    Math.floor(
                        Math.random() *
                        characters.length
                    );


                password +=
                    characters[randomNumber];

            }


            document.getElementById(
                "passwordResult"
            ).value =
                password;

        }
    );

}


/* =====================================================
   5. COLOR PICKER
   ===================================================== */

const colorPicker =
    document.getElementById(
        "colorPicker"
    );


const colorCode =
    document.getElementById(
        "colorCode"
    );


if (colorPicker) {

    colorPicker.addEventListener(
        "input",
        function () {

            colorCode.textContent =
                colorPicker.value;

        }
    );

}


/* =====================================================
   6. AGE CALCULATOR
   ===================================================== */

const calculateAgeBtn =
    document.getElementById(
        "calculateAgeBtn"
    );


if (calculateAgeBtn) {

    calculateAgeBtn.addEventListener(
        "click",
        function () {


            const birthDate =
                document.getElementById(
                    "birthDate"
                ).value;


            const ageResult =
                document.getElementById(
                    "ageResult"
                );


            if (birthDate === "") {

                ageResult.textContent =
                    "Please select your date of birth.";

                return;

            }


            const birth =
                new Date(birthDate);


            const today =
                new Date();


            let age =
                today.getFullYear() -
                birth.getFullYear();


            const month =
                today.getMonth() -
                birth.getMonth();


            if (
                month < 0 ||
                (
                    month === 0 &&
                    today.getDate() < birth.getDate()
                )
            ) {

                age--;

            }


            ageResult.textContent =
                "Your age is " +
                age +
                " years.";

        }
    );

}


/* =====================================================
   7. QR CODE GENERATOR
   ===================================================== */

const generateQRBtn =
    document.getElementById(
        "generateQRBtn"
    );


if (generateQRBtn) {

    generateQRBtn.addEventListener(
        "click",
        function () {


            const text =
                document.getElementById(
                    "qrText"
                ).value.trim();


            const qrCode =
                document.getElementById(
                    "qrCode"
                );


            if (text === "") {

                qrCode.innerHTML =
                    "<p>Please enter text or URL.</p>";

                return;

            }


            const qrURL =
                "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" +
                encodeURIComponent(text);


            qrCode.innerHTML =
                `<img src="${qrURL}" alt="QR Code">`;

        }
    );

}


/* =====================================================
   8. LOGOUT
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