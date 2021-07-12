const balance = document.getElementById('balance');
console.log(balance)
const sign = '₹'

const money_plus = document.getElementById("income");
const money_minus = document.getElementById("expense");
const list = document.getElementById("list");


const form = document.getElementById("form");
const form_expense = document.getElementById("form-expense");
const text =document.getElementById("text");
const amount = document.getElementById("amount");

const dummyTransactions = [
    {id:1, text: "Flower", amount:-20},
    {id:2, text: "Salary", amount:300},
    {id:3, text: "Book", amount:-20},
    {id:4, text: "Camera", amount:550}
]

let transactions = dummyTransactions;

function addTransactionDOM(transaction) {
    //to give a + sign for the income 
    //to give a - sign for the expense
    console.log(transaction.amount);
    const sign = transaction.amount > 0 ? "+" : "-";
    const icon = transaction.amount > 0 ? "up" : "down";

    const item = document.createElement("li");

    item.classList.add(transaction.amount > 0 ? "plus" : "minus" );
    item.innerHTML = ` <h4> ${transaction.text} </h4><span>${sign} ₹ ${Math.abs(transaction.amount)} <i class="fas fa-sort-${icon}" aria-hidden="true"></i> <i class="fas fa-trash-alt"></i> `;
    list.appendChild(item);
}

form.addEventListener("submit" , (e) => {
    e.preventDefault();
    if(text.value.trim() === "" || amount.value.trim() === "") {
        alert("Please fill valid input...");
    }else{

    }
});

function updateValue(params) {
    const amount = transactions.map(item => item.amount);
    const total = amount.reduce((a,b) => (a +=b ),0).toFixed(2);
    const income = amount.filter((item) => item > 0).reduce((a,b) => (a+=b),0).toFixed(2);
    const expense = amount.filter((item) => item < 0).reduce((a,b) => (a+=b),0).toFixed(2);
   
    console.log(total);
    console.log(income);
    console.log(expense);

    balance.innerHTML = `${sign}${total}`;
    money_plus.innerHTML = `${sign}${income}`;
    money_minus.innerHTML = `${sign}${Math.abs(expense).toFixed(2)}`;
 
}

function Init() {
    list.innerHTML = "";
    transactions.forEach(addTransactionDOM);
    updateValue();
}
Init();



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