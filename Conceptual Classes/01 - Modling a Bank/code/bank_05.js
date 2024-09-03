class Bank {
    constructor() {
        this.accounts = [];
        this.transfers = [];
    }

    createAccount(user) {
        const account = new Account(user);

        this.accounts.push(account);

        return account;
    }

    deleteAccount(user) {
        const userAccount = new Account(user);

        this.accounts = this.accounts.filter(
            (account) => account !== userAccount
        );
    }

    getAccount(user) {
        const account = this.accounts.find((account) => account.user === user);

        if (!account) {
            throw new Error("Account not found.");
        }

        return account;
    }

    deposit(user, depositAmount) {
        try {
            const account = this.getAccount(user);

            account.balance += depositAmount;

            return account;
        } catch {
            console.log("Could not deposit as account doesn't exist.");
        }
    }

    withdraw(user, withdrawAmount) {
        const account = this.getAccount(user);

        if (account.balance - withdrawAmount < 0) {
            throw new Error("Cannot withdraw more than current balance.");
        }

        account.balance -= withdrawAmount;

        return account;
    }

    transfer(fromUser, toUser, transferAmount) {
        const fromAccount = this.getAccount(fromUser);
        const toAccount = this.getAccount(toUser);

        if (fromAccount.balance - transferAmount < 0) {
            throw new Error("Cannot transfer more than current balance.");
        }

        fromAccount.balance -= transferAmount;
        toAccount.balance += transferAmount;

        const transaction = new Transfer(
            fromAccount,
            toAccount,
            transferAmount
        );

        this.transfers.push(transaction);

        return transaction;
    }

    getAccountTransactions(userAccount) {
        const account = this.accounts.find(
            (account) => account === userAccount
        );

        if (!account) {
            throw new Error("Account not found.");
        }

        const accountTransactions = this.transfers.filter(
            (transaction) =>
                transaction.fromAccount === account ||
                transaction.toAccount === account
        );

        return accountTransactions;
    }
}

class Account {
    constructor(user, balance = 0) {
        this.user = user;
        this.balance = balance;
    }
}

class Transfer {
    constructor(fromAccount, toAccount, amount) {
        this.fromAccount = fromAccount;
        this.toAccount = toAccount;
        this.amount = amount;
    }
}

const bank = new Bank();

class User {
    constructor(name) {
        this.name = name;
    }
}

// =============================================================================

const userA = new User("User A");
const userB = new User("User B");

const accountOfUserA = bank.createAccount(userA);
bank.createAccount(userB);

bank.deposit(userA, 100);
console.log(accountOfUserA); // { user: userA<reference>, balance: 100 }

bank.withdraw(userA, 100);
console.log(accountOfUserA); // { user: userA<reference>, balance: 0 }

bank.deposit(userA, 100);
console.log(accountOfUserA); // { user: userA<reference>, balance: 100 }

const transferFromAToB = bank.transfer(userA, userB, 50);

console.log(transferFromAToB);

const userATransactions = bank.getAccountTransactions(accountOfUserA);
console.log(userATransactions);
