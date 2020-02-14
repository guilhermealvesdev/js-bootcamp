let myAccount = {
    name: 'Guilherme Alves',
    incomes: 0,
    expenses: 0
}

let addExpense = function (account, amount) {
    account.expenses += amount;
}

let addIncome = function (account, amount) {
    account.incomes += amount;
}

let resetAccount = function (account) {
    account.incomes = 0;
    account.expenses = 0;
}

let getAccountSummary = function (account) {
    let total = account.incomes - account.expenses;

    return `Account for ${account.name} has $${total}. $${account.incomes} in income, and $${account.expenses} in expenses.`;
}

addIncome (myAccount, 1600);
addExpense (myAccount, 300);
addExpense (myAccount, 50);
addExpense (myAccount, 100);
// resetAccount (myAccount);
console.log(getAccountSummary (myAccount));