function createUser(name, balance = 0) {
    return {
        name,
        balance
    }
}

class User {
    constructor(name, balance = 0) {
        this.name = name;
        this.balance = balance;
    }
}

const userA = createUser("User A");
const userB = new User("User B");

console.log("User A balance: ", userA.balance);

function deposit(balance, depositAmount) {
    return balance + depositAmount;
}

userA.balance = deposit(userA.balance, 100);
console.log(userA.balance); // 100

function withdraw(balance, withdrawAmount) {
    if (balance - withdrawAmount < 0) {
        console.error("Cannot withdraw more than current balance.");
        return;
    }

    return balance - withdrawAmount;
}

userA.balance = withdraw(userA.balance, 100);
console.log(userA.balance); // 0

function transfer(from, to, transferAmount) {
    if (from - transferAmount < 0) {
        console.error("Cannot transfer more than current balance.");
        return;
    }

    from = from - transferAmount;
    to = to + transferAmount;

    return [from, to, transferAmount];
}

userA.balance = deposit(userA.balance, 100);
console.log(userA.balance); // 100

const transferFromAToB = transfer(userA.balance, userB.balance, 50);

userA.balance = transferFromAToB[0];
userB.balance = transferFromAToB[1];

console.log(transferFromAToB);
