# DSA Live Class - 05 - JavaScript Conditional Statements II

###### Conditional Statements

Conditional statements are blocks of code that are only ran if a certain
*condition* is met. The `if` keyword is used to create conditional statements in
JavaScript. Blocks of code that are put under an `if` statement will only be run
if the *condition* provided is evaluated to `true`.

```javascript
const age = 20;

if (age < 18) {
    console.log("You are not allowed to enter.");
}
```

###### Alternate Code Path

An alternate block of code can be run instead whenever the condition in the `if`
block fails. The `else` keyword is used to define the fallback block of code.

```javascript
const price = 100;
const balance = 50;

if (balance < price) {
    console.log("You do not have enough balance.");
} else {
    console.log("Thank you for your purchase.");
}
```

###### Chaining Conditions

Multiple conditions can be checked before the last fallback `else` block using
the `else if` keywords. It can be used as many times as needed after an `if`
block and before the last `else` block if there is any.

```javascript
const num = 420;

if (num > 0) {
    console.log("Number is positive.");
} else if (num < 0) {
    console.log("Number is negative.");
} else {
    console.log("Number is neutral.");
}
```

###### Code Formatters

Prettier is a code formatting tool that is used to enforce a standardized code
style across files and projects. Prettier comes with a default and highly
opinionated code style guideline among which some styles can be customized.

###### Odd-Even Checker

```javascript
for (let num = 1; num <= 100; num++) {
    if (num % 2 === 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}
```

###### Fizz Buzz Problem

```javascript
for (let num = 1; num <= 100; num++) {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(num);
    }
}
```

###### Fizz Buzz Extended Problem

```javascript
for (let num = 1; num <= 100; num++) {
    let output = "";
    if (num % 3 === 0) {
        output += "Fizz";
    } else if (num % 5 === 0) {
        output += "Buzz";
    } else if (num % 7 === 0) {
        output += "More";
    } else {
        output += num;
    }
    console.log(output);
}
```

###### Logical Operators

The `&&`, `||` and `!` operators are used on boolean values. These are the
logical operators in JavaScript.

```javascript
const a = true;
const b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false
```

```javascript
const age = 20;
const country = "Bangladesh";

let accessGranted = false;
if (age >= 18 && country === "Bangladesh") {
    console.log("Yokoso, watashi no soul society.");
    accessGranted = true;
}

if (!accessGranted) {
    if (age < 18) {
        console.log("You are underage.");
    }

    if (country != "Bangladesh") {
        console.log("You are not from Bangladesh.");
    }
}
```

- [Logical AND (&&) - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)
- [Logical OR (||) - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)
- [Logical NOT (!) - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_NOT)

###### Template Literals

Template literal strings in JavaScript are used to inject evaluated values into
strings. These strings can also be used as part of a *tagged function* which
allows for functions to be called with the string literal and the arguments
passed in for further processing in a shorthand syntax.

```javascript
const name = "Jannatin Naim";
const age = 20;

console.log(`I'm ${name} and I am ${age} years old.`); // I'm Jannatin Naim and I am 20 years old.
```

###### `switch` Statement

We can define multiple paths based on the value of a single element using
a `switch` statement. Based on the value, the `switch` *cases* will be executed
for the first that evaluate to true and will *fall through* unless a `break`
statement is used.

```javascript
const num = 5;

switch (num) {
    case num > 10:
        console.log("Number is greater than 10.");
    case num > 5:
        console.log("Number is greater than 5.");
    case num > 0:
        console.log("Number is greater than 0.");
    case num > -5:
        console.log("Number is greater than -5");
}

// Number is greater than 0.
// Number is greater than -5.
```

###### `switch` `case` Scoping

Switch cases have a shared scope among all the cases, if we want individual
scopes, we can wrap the case in `{}`. Otherwise, we can just keep writing our
code in between `case` statements and those will be the only block of code ran
if its preceding case passes.

###### `switch` `case` Fall Through

If we don't want our cases to *fall through*, we can use a `break` statement.

```javascript
const num = 15;

switch (num) {
    case num > 10: {
        console.log("Number is greater than 10.");
        break;
    }
    case num > 5: {
        console.log("Number is greater than 5.");
        break;
    }
    case num > 0: {
        console.log("Number is greater than 0.");
        break;
    }
    case num > -5: {
        console.log("Number is greater than -5");
        break;
    }
}

// Number is greater than 10.
```

###### `default` Case

If we want to handle unexpected values we can set a `default` block that will
run if none of the previous cases were matched.

```javascript
const letter = "c";

switch (letter) {
    case "a":
        console.log("Letter is a.");
        break;
    case "b"
        ;
        console.log("Letter is b.");
        break;
    default:
        console.log(`Letter is ${c}.`);
}

// Letter is c.
```

###### `Date` Object

In JavaScript, we can get the current date-time using the following code:

```javascript
const date = new Date();

console.log(date); // 2024-06-22T05:56:40.812Z
```

We can get the current *day of the week* using the `getDay` method on a `Date`
object. However, this function will return an integer instead of a string. The
integer represents the index of an array with the days of the week in order
starting from Sunday at the first position.

- [Date - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date)

###### Print Current Date

We can use the `switch` statement to print the day based on the index we get.

```javascript
const date = new Date();
const day = date.getDay();

switch (day) {
    case 0:
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    default:
        console.log("Anything but Sunday and Monday.");
}
```

```javascript
const date = new Date();
const day = date.getDay();

const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

const dayString = days[day];

console.log(`Today is ${dayString}.`); // Today is Saturday.
```

###### `Math` Object

The `random` function on the `Math` object will generate a floating point number
between 0 (inclusive) and 1 ( exclusive).

```javascript
const randomNumber = Math.random();
console.log(randomNumber); // 0.8327279540178107
```

- [Math - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math)
- [JavaScript Math random() Method (w3schools.com)](https://www.w3schools.com/jsref/jsref_random.asp)

###### String `charCodeAt` Method

The `charCodeAt` function on the `String` data type can be used to get the ASCII
character code at a position of the string.

```javascript
const string = "Hello, world!";
console.log(string.charCodeAt(0)); // 72
```

- [String.prototype.charCodeAt() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/charCodeAt)
