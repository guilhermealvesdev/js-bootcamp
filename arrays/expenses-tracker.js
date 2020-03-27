const account = {
    name: 'Guilherme',
    expenses: [],
    incomes: [],
    addExpense: function(description, amount) {
        this.expenses.push({
            description: description,
            amount: amount
        });
    },
    addIncome: function(description, amount) {
        this.incomes.push({
            description: description,
            amount: amount
        });
    },
    getAccountSummary: function() {
        let totalExpenses = 0;
        let totalIncomes = 0;
        let balance = 0;

        this.expenses.forEach(function(item){
            totalExpenses += item.amount;
        });

        this.incomes.forEach(function(item) {
            totalIncomes += item.amount;
        })

        balance = totalIncomes - totalExpenses;

        return `${this.name} has a balance of $${balance}. $${totalIncomes} in incomes, $${totalExpenses} in expenses.`
    },
}



account.addExpense('Rent', 950);
account.addExpense('Coffee', 2);
account.addExpense('Sandwich', 5);

account.addIncome('Salary', 2800);
account.addIncome('FreelaWeld', 300);

console.log(account.getAccountSummary())

console.log(account.expenses);
console.log(account.incomes);