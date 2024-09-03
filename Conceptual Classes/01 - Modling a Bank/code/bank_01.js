const userA = "User A";
let balanceOfUserA = 0;

const userB = "User B";
let balanceOfUserB = 0;

console.log("User A balance: ", balanceOfUserA);

function deposit(balance, depositAmount) {
    return balance + depositAmount;
}

balanceOfUserA = deposit(balanceOfUserA, 100);
console.log(balanceOfUserA); // 100

function withdraw(balance, withdrawAmount) {
    if (balance - withdrawAmount < 0) {
        console.error("Cannot withdraw more than current balance.");
        return;
    }

    return balance - withdrawAmount;
}

balanceOfUserA = withdraw(balanceOfUserA, 100);
console.log(balanceOfUserA); // 0

function transfer(from, to, transferAmount) {
    if (from - transferAmount < 0) {
        console.error("Cannot transfer more than current balance.");
        return;
    }

    from = from - transferAmount;
    to = to + transferAmount;

    return [from, to, transferAmount];
}

balanceOfUserA = deposit(balanceOfUserA, 100);
console.log(balanceOfUserA); // 100

const transferFromAToB = transfer(balanceOfUserA, balanceOfUserB, 50);

balanceOfUserA = transferFromAToB[0];
balanceOfUserB = transferFromAToB[1];

console.log(transferFromAToB);
