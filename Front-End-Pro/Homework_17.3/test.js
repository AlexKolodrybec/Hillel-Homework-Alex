class BankAccount {
    constructor(initialBalance) {
      this.balance = initialBalance;
    }
  
    getBalance() {
      return this.balance;
    }
  
    deposit(amount) {
      if (amount > 0) {
        this.balance += amount;
      } else {
        throw new Error("Сума депозиту має бути більше нуля");
      }
    }
  
    withdraw(amount) {
      if (amount > 0) {
        if (amount <= this.balance) {
          this.balance -= amount;
        } else {
          throw new Error("Недостатньо коштів");
        }
      } else {
        throw new Error("Сума виведення має бути більше нуля");
      }
    }
  }
  
  const account1 = new BankAccount(1000);
  
  console.log(account1.getBalance()); 
  
  account1.deposit(500);
  
  console.log(account1.getBalance()); 
  
  account1.withdraw(200);
  
  console.log(account1.getBalance());