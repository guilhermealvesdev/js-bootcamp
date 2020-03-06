let myAccount = {
    name: "Guilherme",
    expenses: 0,
    income: 0
}

let addExpense = function(account, amount) {
    account.expenses += amount;
}

let addIncome = function (account, amount) {
    account.income += amount;
}

let resetAccount = function(account) {
    account.expenses = 0;
    account.income = 0;
}

let getAccountSummary = function(account) {
    let total = account.income - account.expenses;

    return `Account for ${account.name} has $${total}. $${account.income} in income, $${account.expenses} in expenses.`
}

addIncome(myAccount, 2800);
addExpense(myAccount, 400);
addExpense(myAccount, 100);
addExpense(myAccount, 300);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));