class BankAccount {
  constructor(initialBalance){
    this.initialBalance = initialBalance
    this.transactions = []
  }

  addTransaction(){
    bills.forEach((bill) => {
      this.transactions.push(bill)
    })
  }

  currentBalance(){
    this.transactions.forEach((expense) => {
      this.initialBalance += expense
    })
    return this.initialBalance
  }
}

let initialBalance = 1000
let bills = [-45, -99.95, -34.43]
let bankAccount = new BankAccount(initialBalance)

bankAccount.addTransaction()
console.log(bankAccount.transactions)
console.log(`The current balance is now $${bankAccount.currentBalance()}`)
