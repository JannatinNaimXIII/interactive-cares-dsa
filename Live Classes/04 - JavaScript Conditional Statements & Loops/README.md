# DSA Live Class - 04 - JavaScript Conditional Statements & Loops

###### Conditional Statements

In JavaScript, we can conditionally run a block a code i.e. we can choose if a
block of code is ran or not depending on a condition we provide and what to do
if that condition is not met. This is done through the `if` and `else` keywords.

```javascript
let x = 0;

if (x < 0) {
    console.log("x is less than 0.");
} else if (x > 0) {
    console.log("x is greater than 0.");
} else {
    console.log("x is 0.");
}
```

-   [Conditional (computer programming) - Wikipedia](<https://en.wikipedia.org/wiki/Conditional_(computer_programming)>)
-   [JavaScript if else else if (w3schools.com)](https://www.w3schools.com/js/js_if_else.asp)

###### Loops

Loops are used to run a block of code multiple times based on a condition.

###### `while` Loop

`while` loops are the most basic form of loops. As long as the _condition_
provided in the loop holds true, the body of the loop will keep running.

```javascript
while (condition) {
    body;
}
```

The loop will check the condition first, then run the body. It will keep
checking the condition and running the body for as long as the condition holds
true.

```javascript
let i = 0;
while (i < 10) {
    console.log(i);

    i++;
}
```

If we put a statement that will forever evaluate to _true_ inside the
_condition_ for the while loop, we'll get stuck in an infinite iteration and our
program will hang.

```javascript
while (true) {}
```

**NOTE**: The condition doesn't have to evaluate to exactly a `true` or `false`
value, it just has to be a value that is either _truthy_ or _falsy_.

-   [While loop - Wikipedia](https://en.wikipedia.org/wiki/While_loop)
-   [JavaScript while Loop (w3schools.com)](https://www.w3schools.com/js/js_loop_while.asp)

###### `do` Loop

A `do` loop is where the function body is executed once regardless of the
condition being true or false.

```javascript
do {
    body;
} while (condition);
```

In this loop, the body will run at least once before the condition is checked
and the loop will continue if it is met.

```javascript
let i = 0;
do {
    console.log(i);

    i++;
} while (i < 10);
```

###### `for` Loop

`for` loops are used as a shorthand for 3 distinct operations and a block of
code that is iterated over.

```javascript
for (initialization; condition; post_iteration) {
    body;
}
```

The loop runs in the following order. It first runs the _initialization_ step
once at the start of the loop. Then it checks the condition to see if it is
valid or not. It then runs the body of the loop. Finally, it runs the _post
iteration_ section of the loop. That completes the first cycle of the loop.

From the second iteration, only the _condition_, _post iteration_ and _body_ of
the loop is evaluated.

```javascript
for (let i = 0; i < 10; i++) {
    console.log(i); // 0...9
}
```

The `++` operator can be used to quickly increment a value. This operator can be
placed both _in front_ and _after_ the variable and based on the expression its
being used in, the results will vary.

```javascript
let x = 10;

let y = x++;

console.log(x, y); // 11, 10
```

```javascript
let x = 10;

let y = ++x;

console.log(x, y); // 11, 11
```

**NOTE**: The only required syntax of a `for` loop are the `;`s and the actual
declaration along with the body scope. We can leave everything empty and our
program will be stuck in a loop and hang.

```javascript
for (;;) {}
```

To iterate over the elements of an array, we can use the following syntax.

```javascript
const names = ["Jannatin Naim", "SR Setu", "Rijwan Hossain"];

for (let i = 0; i < names.length; i++) {
    const name = names[i];

    console.log(name); // Jannatin Naim, SR Setup, Rijwan Hossain
}
```

The `break` keyword can be used to _stop_ the iteration of the loop and continue
to the next block.

```javascript
const nums = [1, 2, 3, 4, 5];

for (let i = 0; i < 10; i++) {
    if (nums[i] == 3) {
        break;
    }

    console.log(nums[i]); // 1, 2
}
```

The `continue` keyword can be used to skip over an iteration of the loop and
_continue_ to the next iteration.

```javascript
const nums = [1, 2, 3, 4, 5];

for (let i = 0; i < 10; i++) {
    if (nums[i] == 3) {
        continue;
    }

    console.log(nums[i]); // 1, 2, 4, 5
}
```

**TIP**: When you know the _number of times you need to iterate_ it is
recommended to use a `for` loop whereas, if the _number of iterations are
unknown_ it is recommended to use a `while` loop.

-   [For loop - Wikipedia](https://en.wikipedia.org/wiki/For_loop)
-   [JavaScript for Loop (w3schools.com)](https://www.w3schools.com/js/js_loop_for.asp)

###### `for of` Loop

_Iterables_ such as arrays can be iterated over through the `for of` loop. This
will loop over every element of the array and assign each element to an
identifier in the loop.

```javascript
const nums = [1, 2, 3, 4];

for (const num of nums) {
    console.log(num); // 1, 2, 3, 4
}
```

-   [JavaScript For Of (w3schools.com)](https://www.w3schools.com/js/js_loop_forof.asp)

###### `forEach` Array Method

The built-in array method `forEach` can also be used to iterate over array
elements. It takes a _callback function_ that is then ran for every element in
that array.

```javascript
const nums = [1, 2, 3, 4];

nums.forEach(function (num) {
    console.log(num); // 1, 2, 3, 4
});
```

-   [JavaScript Array Iteration (w3schools.com)](https://www.w3schools.com/js/js_array_iteration.asp#mark_foreach)

###### Nested Loops

We can write loops within loops which are called nested loops. You can go as
deep as you want with nesting.

```javascript
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 5; j++) {
        console.log(i, j); // 0...9 (0...4)

        for (let k = 0; k < 3; k++) {
            console.log(i, j, k); // 0...9 (0...4) [0...2]
        }
    }
}
```

**NOTE**: Nested loops are useful for traversing _multidimensional_ arrays. A
multidimensional array is an array that contains other arrays as its elements.

```javascript
const people = [
    ["Jannatin Naim", "jannatinnaim@pondit.family", 20],
    ["SR Setu", "srsetu@gmail.com", 30],
];

for (let row = 0; row < people.length; row++) {
    for (let col = 0; col < people[row].length; col++) {
        console.log(people[row][column]); // Jannatin Naim, jannatinnaim@pondit.family ... srsetu@gmail.com, 30
    }
}

for (const person of people) {
    for (property of person) {
        console.log(property); // Jannatin Naim, jannatinnaim@pondit.family ... srsetu@gmail.com, 30
    }
}
```

-   [Nesting (computing) - Wikipedia](<https://en.wikipedia.org/wiki/Nesting_(computing)>)
