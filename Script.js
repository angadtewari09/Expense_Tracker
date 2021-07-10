const balance = document.getElementById("balance-amount");
const sign = "₹";

const money_plus = document.getElementById("income-amount");
const money_minus = document.getElementById("expense-amount");
const income_list = document.getElementById("list_income");
const expense_list = document.getElementById("list_expense");

const form_income = document.getElementById("form-income");
const form_expense = document.getElementById("form-expense");

/*
const income_submit = document.getElementById("income-submit");
const expense_submit = document.getElementById("expense-submit");
*/
const income_text =document.getElementById("income-text");
const expense_text = document.getElementById("expense-text");

const income_money = document.getElementById("income-amount");
const expense_money = document.getElementById("expense-amount");


//function calling 
form_income.addEventListener("submit" ,addIncomeTransaction);
//Generates a random ID for the list
function CreateRandomId() {
    return( Math.floor(Math.random() * 100000));
}


let Transactions = [];

function addIncomeTransaction(e) {
    
    e.preventDefault();
    
        const incometransaction = {
            id:CreateRandomId(),
            text:income_text.value,
            amount: +income_money.value
        };
        
        Transactions.push(incometransaction)
        addTransactionDOM(incometransaction);
        UpdateValues();
        console.log(income_money.value);
        income_text.value="";
        income_money.value=0;
        init();
     
    
}


function addTransactionDOM(transaction) {
    
    
    const item = document.createElement("li");
    item.classList.add("Income-History");

        item.innerHTML = `
            ${transaction.text}<span> ${sign} ${Math.abs(transaction.amount)}</span>
            <button class="delete-btn" onClick="">X</button>
        `;
    income_list.appendChild(item);
}

//update Values

function UpdateValues() {
    const income_amounts = Transactions.map( transaction => transaction.amount);
    const total = income_amounts.reduce((account,item) => (account += item),0).toFixed(2);

    const income = income_amounts.filter(item => item > 0).reduce((account,item) => (account += item),0).toFixed(2);

    balance.innerText=`${sign} ${total}`
    money_plus.innerHTML =`${sign}${income}`
    
    /*money_minus.innerHTML = `${sign}${income}`*/
}


//Init function
function init() {
    income_list.innerHTML = "";
    Transactions.forEach(addTransactionDOM);
    UpdateValues();
}

init();




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