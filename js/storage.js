/* =====================================================
   STUDYHUB - LOCAL STORAGE
   SECTION 19
   ===================================================== */


/* =====================================================
   SAVE DATA
   ===================================================== */

function saveData(key, data) {

    localStorage.setItem(
        key,
        JSON.stringify(data)
    );

}


/* =====================================================
   GET DATA
   ===================================================== */

function getData(key) {

    const data =
        localStorage.getItem(key);


    if (data) {

        return JSON.parse(data);

    }


    return null;

}


/* =====================================================
   REMOVE DATA
   ===================================================== */

function removeData(key) {

    localStorage.removeItem(key);

}


/* =====================================================
   CHECK DATA
   ===================================================== */

function hasData(key) {

    return localStorage.getItem(key) !== null;

}


/* =====================================================
   CLEAR STUDYHUB DATA
   ===================================================== */

function clearStudyHubData() {

    localStorage.clear();

}