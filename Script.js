const balance = document.getElementById("balance");


const money_plus = document.getElementById("income");
const money_minus = document.getElementById("expense");
const list = document.getElementById("list");


const form = document.getElementById("form");
const form_expense = document.getElementById("form-expense");
const text =document.getElementById("text");
const amount = document.getElementById("amount");

function addTransactionDOM(transaction) {
    //to give a + sign for the income 
    //to give a - sign for the expense
    const sign = transaction.amount > 0 ? "+" : "-";
    const icon = transaction.amount > 0 ? "up" : "down";

    const item = document.createElement("li");

    item.classList.add(transaction.amount > 0 ? "plus" : "minus" );

    item.innerHTML = ` <h4> ${transaction.text} </h4><span>${sign} ₹ ${transaction.amount} <i class="fa fa-arrow-circle-${icon}" aria-hidden="true"></i> `;

    list.appendChild(item);
}

function init() {
    item.innerHTML = "";
}
addTransactionDOM()



/*


//Function to add transaction


let Transactions = DummyTransaction;

function addTransaction(transaction) {
    const sign = transaction
}
if(income_submit) {
income_submit.addEventListener("submit" , addIncomeTransaction);
//expense_submit.addEventListener("submit", addTransaction);
}
*/