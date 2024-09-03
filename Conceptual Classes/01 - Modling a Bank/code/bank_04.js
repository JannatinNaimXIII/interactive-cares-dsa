class Bank {
    constructor() {
        this.accounts = [];
    }

    createAccount(user) {
        const account = new Account(user);

        this.accounts.push(account);

        return account;
    }

    deposit(user, depositAmount) {
        const account = this.accounts.find((account) => account.user === user);

        if (!account) {
            console.error("Account to deposit to was not found.");
            return;
        }

        account.balance += depositAmount;

        return account;
    }

    withdraw(user, withdrawAmount) {
        const account = this.accounts.find((account) => account.user === user);

        if (!account) {
            console.error("Account to withdraw from was not found.");
            return;
        }

        if (account.balance - withdrawAmount < 0) {
            console.error("Cannot withdraw more than current balance.");
            return;
        }

        account.balance -= withdrawAmount;

        return account;
    }

    transfer(fromUser, toUser, transferAmount) {
        const fromAccount = this.accounts.find(
            (account) => account.user === fromUser
        );

        if (!fromAccount) {
            console.error("Account to transfer from was not found.");
            return;
        }

        const toAccount = this.accounts.find(
            (account) => account.user === toUser
        );

        if (!toAccount) {
            console.error("Account to transfer to was not found.");
            return;
        }

        if (fromAccount.balance - transferAmount < 0) {
            console.error("Cannot transfer more than current balance.");
            return;
        }

        fromAccount.balance -= transferAmount;
        toAccount.balance += transferAmount;

        return [fromAccount, toAccount, transferAmount];
    }
}

class Account {
    constructor(user, balance = 0) {
        this.user = user;
        this.balance = balance;
    }
}

const bank = new Bank();

class User {
    constructor(name) {
        this.name = name;
    }
}

const userA = new User("User A");
const userB = new User("User B");

bank.createAccount(userA);
bank.createAccount(userB);

let accountOfUserA;

accountOfUserA = bank.deposit(userA, 100);
console.log(accountOfUserA); // { user: userA<reference>, balance: 100 }

bank.withdraw(userA, 100);
console.log(accountOfUserA); // { user: userA<reference>, balance: 0 }

bank.deposit(userA, 100);
console.log(accountOfUserA); // { user: userA<reference>, balance: 100 }

const transferFromAToB = bank.transfer(userA, userB, 50);

console.log(transferFromAToB);
