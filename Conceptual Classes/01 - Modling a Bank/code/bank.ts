class Bank {
    private accounts: Account[];
    private transfers: Transfer[];

    createAccount(user: User) {
        const account = new Account(this.accounts.length + 1, user);

        this.accounts.push(account);

        return account;
    }

    getUserAccount(user: User) {
        const account = this.accounts.find((account) => account.user === user);

        if (!account) {
            throw new Error(`User ${user.name} doesn't have an account.`);
        }

        return account;
    }

    deposit(user: User, amount: number) {
        const account = this.getUserAccount(user);

        account.balance += amount;

        return account;
    }

    withdraw(user: User, amount: number) {
        const account = this.getUserAccount(user);

        if (account.balance - amount < 0) {
            throw new Error(
                `Account: ${account.serial} attempted a withdraw for more amount than current balance.`
            );
        }

        account.balance -= amount;

        return account;
    }

    send(fromUser: User, toUser: User, amount: number) {
        const fromAccount = this.getUserAccount(fromUser);
        const toAccount = this.getUserAccount(toUser);

        if (fromAccount.balance - amount < 0) {
            throw new Error(
                `Account: ${fromAccount.serial} attempted a transfer for more amount than current balance.`
            );
        }

        fromAccount.balance -= amount;
        toAccount.balance += amount;

        const transfer = new Transfer(fromAccount, toAccount, amount);
        this.transfers.push(transfer);

        return transfer;
    }

    getUserTransfers(user: User) {
        const account = this.getUserAccount(user);

        const transfers = this.transfers.filter(
            (transfer) =>
                transfer.from.user === user || transfer.to.user === user
        );
    }
}

class Account {
    serial: number;
    user: User;
    balance: number;

    constructor(serial: number, user: User, balance: number = 0) {
        if (balance < 0) {
            throw new Error(
                `Account: ${serial} was created with a negative balance.`
            );
        }

        this.serial = serial;
        this.user = user;
        this.balance = balance;
    }
}

class Transfer {
    from: Account;
    to: Account;
    amount: number;

    constructor(from: Account, to: Account, amount: number) {
        this.from = from;
        this.to = to;
        this.amount = amount;
    }
}

class User {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

// =============================================================================

const bank = new Bank();

const userA = new User("User A");
const userB = new User("User B");

bank.createAccount(userA);
bank.createAccount(userB);

bank.deposit(userA, 100);
bank.deposit(userB, 100);

bank.withdraw(userB, 50);

bank.send(userA, userB, 25);

const aAccount = bank.getUserAccount(userA);
const bAccount = bank.getUserAccount(userB);

// must be true based on previous transactions
console.log(aAccount.balance === bAccount.balance);

console.log(bank.getUserTransfers(userA));
