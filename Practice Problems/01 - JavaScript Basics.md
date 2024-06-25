Given a list of strings that contain information about people; parse the strings
and print an output in the specified
format. `Hi, I'm <name>. I live in <location> and I'm <age> years old.` The
values they contain are name, age and location delimited by a `;` respectively.

```javascript
const people = [
    "Jannatin Naim;20;Cox's Bazar",
    "Saidur Rahman Setu;99;Dhaka"
]

function introduction(person) {
    let output = "";

    // code

    return output;
}

for (const person of people) {
    const string = introduction(person);
    console.log(string);
}
```

```text
Hi, I'm Jannatin Naim. I live in Cox's Bazar and I'm 20 years old.
Hi, I'm Saidur Rahman Setu. I live in Dhaka and I'm 99 years old.
```

---

Given a list of integers, find the sum, average and minimum and maximum numbers
in that list.

```javascript
const numbers = [65, 20, 94, 29, 16, 33, 81, 47, 73, 17];

function stats(numbers) {
    let sum = 0, average = 0, mixumum = 0, minimum = 0;

    // code

    return [sum, average, maximum, minimum]
}

const values = stats(numbers);

console.log("Sum:", values[0]);
console.log("Average:", values[1]);
console.log("Maximum:", values[2]);
console.log("Minimum:", values[3]);
```

```text
Sum: 475
Average: 47.5
Maximum: 94
Minimum: 16
```

---

Given a range of numbers, print the `nth` odd number. In case there isn't an odd
number in that position, return `null`.

```javascript
const numbers = [36, 57, 95, 81, 21, 28, 96, 27, 46, 40];

function nthOddNumber(numbers, position) {
    let numberAtPosition = 0;

    // code

    return numberAtPosition;
}

const value = nthOddNumber(numbers, 2);
console.log(value);
```

```text
95
```

---

Given a number between $1$ and $9$; print all the values that are lower than the
given number and are greater than $0$.

```javascript
function lowerNumbers(number) {
    let lowerNumbers = [];

    // code

    return lowerNumbers;
}

const values = lowerNumbers(5);

for (const number of values) {
    console.log(number);
}
```

```text
4
3
2
1
```

---

Given two numbers and an operator; write a calculator that performs the
operation on the two operands. The operators will be as
follows: `addition`, `subtraction`, `division` and `multiplication`.

```javascript
function calculate(a, b, operation) {
    let result = 0;

    // code

    return result;
}

const value = calculate(10, 5, "division");
console.log(value);
```

```text
2
```

---

Given a string; print the number of vowels in it and the most frequently
occurring vowel.

```javascript
function countVowels(string) {
    let vowelCount = 0, mostOccurredVowel = "";

    // code

    return {
        vowelCount,
        mostOccurredVowel,
    }
}

const result = countVowels("The quick brown fox jumps over the lazy dog. However, why does the fox jump over the dog? Can he just not leave the dog alone? I don't understand what foxes do, man.");

console.log("Vowels:", result.vowelCount);
console.log("Most Occurred Vowel:", result.mostOccurredVowel);
```

```text
Vowels: 44
Most Occurred Vowel: e
```

---

Given a list of numbers; print only the prime numbers.

```javascript
function findPrimes(numbers) {
    const primes = [];

    // code

    return primes;
}

const result = findPrimes([28, 47, 25, 53, 34, 26, 30, 27, 59, 33, 19, 2, 37]);
for (const prime of result) {
    console.log(prime);
}
```

```text
47
53
59
19
2
37
```

---

Given an array of numbers; remove the duplicate values in it and print the
unique values only.

```javascript
function findUniqueNumbers(numbers) {
    return uniques = [];

    // code

    return uniques;
}

const result = findUniqueNumbers([1, 2, 2, 3, 5, 6, 6, 6, 8, 9, 9]);
for (const number of result) {
    console.log(number);
}
```

```text
1
2
3
5
6
8
9
```

---

Given a value and a type, convert the given value to the corresponding
type. `type` can be one of the following: `string`, `number` and `boolean`.

```javascript
function convertType(value, type) {
    let convertedValue;

    // code

    return convertedValue;
}

const result = convertType("Hi.", "boolean");
console.log(result);
```

```text
true
```

---

Given a matrix; print the values in the positions in an ascending order.

```javascript
const matrix = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1],
]

function printMatrix(matrix) {
    // code
}
```

```text
1
2
3
4
5
6
7
8
9
```
