/* =====================================================
   STUDYHUB - EXPENSE TRACKER
   ===================================================== */


/* =====================================================
   GET ELEMENTS
   ===================================================== */

const addTransactionBtn =
    document.getElementById(
        "addTransactionBtn"
    );

const transactionFormBox =
    document.getElementById(
        "transactionFormBox"
    );

const transactionForm =
    document.getElementById(
        "transactionForm"
    );

const cancelTransactionBtn =
    document.getElementById(
        "cancelTransactionBtn"
    );

const transactionTitle =
    document.getElementById(
        "transactionTitle"
    );

const transactionAmount =
    document.getElementById(
        "transactionAmount"
    );

const transactionType =
    document.getElementById(
        "transactionType"
    );

const transactionCategory =
    document.getElementById(
        "transactionCategory"
    );

const transactionDate =
    document.getElementById(
        "transactionDate"
    );

const searchTransaction =
    document.getElementById(
        "searchTransaction"
    );

const transactionsContainer =
    document.getElementById(
        "transactionsContainer"
    );


/* =====================================================
   SUMMARY ELEMENTS
   ===================================================== */

const totalBalance =
    document.getElementById(
        "totalBalance"
    );

const totalIncome =
    document.getElementById(
        "totalIncome"
    );

const totalExpenses =
    document.getElementById(
        "totalExpenses"
    );

const transactionCount =
    document.getElementById(
        "transactionCount"
    );


/* =====================================================
   GET SAVED TRANSACTIONS
   ===================================================== */

let transactions =
    JSON.parse(
        localStorage.getItem(
            "studyHubTransactions"
        )
    ) || [];


/* =====================================================
   FILTER
   ===================================================== */

let currentFilter = "all";


/* =====================================================
   OPEN FORM
   ===================================================== */

addTransactionBtn.addEventListener(
    "click",
    function () {

        transactionFormBox.classList.add(
            "show"
        );

        transactionTitle.focus();

    }
);


/* =====================================================
   CANCEL FORM
   ===================================================== */

cancelTransactionBtn.addEventListener(
    "click",
    function () {

        transactionForm.reset();

        transactionFormBox.classList.remove(
            "show"
        );

    }
);


/* =====================================================
   ADD TRANSACTION
   ===================================================== */

transactionForm.addEventListener(
    "submit",
    function (event) {

        event.preventDefault();


        const title =
            transactionTitle.value.trim();

        const amount =
            Number(
                transactionAmount.value
            );

        const type =
            transactionType.value;

        const category =
            transactionCategory.value;

        const date =
            transactionDate.value;


        /* CREATE TRANSACTION */

        const newTransaction = {

            id: Date.now(),

            title: title,

            amount: amount,

            type: type,

            category: category,

            date: date

        };


        /* ADD TO ARRAY */

        transactions.push(
            newTransaction
        );


        /* SAVE */

        saveTransactions();


        /* RESET FORM */

        transactionForm.reset();

        transactionFormBox.classList.remove(
            "show"
        );


        /* SHOW */

        showTransactions();

    }
);


/* =====================================================
   SHOW TRANSACTIONS
   ===================================================== */

function showTransactions() {

    transactionsContainer.innerHTML = "";


    const search =
        searchTransaction.value
            .toLowerCase();


    let visibleTransactions = 0;


    for (
        let i = 0;
        i < transactions.length;
        i++
    ) {

        const transaction =
            transactions[i];


        /* SEARCH */

        if (
            !transaction.title
                .toLowerCase()
                .includes(search)
        ) {

            continue;

        }


        /* FILTER */

        if (
            currentFilter !== "all" &&
            transaction.type !== currentFilter
        ) {

            continue;

        }


        visibleTransactions++;


        /* ICON */

        let icon = "📦";


        if (
            transaction.category === "Food"
        ) {

            icon = "🍔";

        }


        if (
            transaction.category === "Transport"
        ) {

            icon = "🚌";

        }


        if (
            transaction.category === "Education"
        ) {

            icon = "📚";

        }


        if (
            transaction.category === "Shopping"
        ) {

            icon = "🛍️";

        }


        /* AMOUNT */

        let amountClass =
            "expense-amount";

        let amountSign =
            "-";


        if (
            transaction.type === "income"
        ) {

            amountClass =
                "income-amount";

            amountSign =
                "+";

        }


        /* CREATE CARD */

        const card =
            document.createElement("div");


        card.className =
            "transaction-card";


        card.innerHTML = `

            <div class="transaction-icon">

                ${icon}

            </div>


            <div class="transaction-info">

                <h3>
                    ${transaction.title}
                </h3>

                <p>

                    ${transaction.category}
                    •
                    ${transaction.date}

                </p>

            </div>


            <div class="transaction-amount ${amountClass}">

                ${amountSign}
                Rs. ${transaction.amount}

            </div>


            <button
                class="delete-transaction"
                onclick="deleteTransaction(${transaction.id})">

                🗑️

            </button>

        `;


        transactionsContainer.appendChild(
            card
        );

    }


    /* EMPTY */

    if (
        visibleTransactions === 0
    ) {

        transactionsContainer.innerHTML = `

            <div class="empty-transactions">

                <h3>
                    💰 No transactions found
                </h3>

                <p>
                    Add your first transaction.
                </p>

            </div>

        `;

    }


    /* COUNT */

    transactionCount.textContent =
        visibleTransactions +
        (
            visibleTransactions === 1
                ? " Transaction"
                : " Transactions"
        );


    updateSummary();

}


/* =====================================================
   DELETE TRANSACTION
   ===================================================== */

function deleteTransaction(id) {

    const confirmDelete =
        confirm(
            "Are you sure you want to delete this transaction?"
        );


    if (!confirmDelete) {

        return;

    }


    for (
        let i = 0;
        i < transactions.length;
        i++
    ) {

        if (
            transactions[i].id === id
        ) {

            transactions.splice(i, 1);

            break;

        }

    }


    saveTransactions();

    showTransactions();

}


/* =====================================================
   SAVE
   ===================================================== */

function saveTransactions() {

    localStorage.setItem(
        "studyHubTransactions",
        JSON.stringify(transactions)
    );

}


/* =====================================================
   UPDATE SUMMARY
   ===================================================== */

function updateSummary() {

    let income = 0;

    let expenses = 0;


    for (
        let i = 0;
        i < transactions.length;
        i++
    ) {

        if (
            transactions[i].type === "income"
        ) {

            income =
                income +
                transactions[i].amount;

        } else {

            expenses =
                expenses +
                transactions[i].amount;

        }

    }


    const balance =
        income - expenses;


    totalIncome.textContent =
        "Rs. " + income;


    totalExpenses.textContent =
        "Rs. " + expenses;


    totalBalance.textContent =
        "Rs. " + balance;

}


/* =====================================================
   SEARCH
   ===================================================== */

searchTransaction.addEventListener(
    "input",
    function () {

        showTransactions();

    }
);


/* =====================================================
   FILTER BUTTONS
   ===================================================== */

const filterButtons =
    document.querySelectorAll(
        ".expense-filter"
    );


for (
    let i = 0;
    i < filterButtons.length;
    i++
) {

    filterButtons[i].addEventListener(
        "click",
        function () {


            /* REMOVE ACTIVE */

            for (
                let j = 0;
                j < filterButtons.length;
                j++
            ) {

                filterButtons[j]
                    .classList
                    .remove("active");

            }


            /* ADD ACTIVE */

            this.classList.add("active");


            /* CHANGE FILTER */

            currentFilter =
                this.dataset.filter;


            showTransactions();

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

showTransactions();