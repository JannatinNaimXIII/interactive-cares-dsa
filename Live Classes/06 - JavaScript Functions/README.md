# DSA Live Class - 06 - JavaScript Functions

###### Function Declaration & Invocation

Functions are reusable blocks of code that can be used in multiple places and
defined only once. A function's behavior can be influenced by its input passed
in as *arguments* while *calling* it. In JavaScript, functions are declared with
the `function` keyword followed by a *name* and an optional comma separated
parameter list.

```javascript
function functionOne() {
    code
}

function functionTwo(argumentOne, argumentTwo) {
    code
}

functionOne();
functionTwo(a, b);
```

The identifier of a function is treated as a reference type value and can be
used throughout the code just like any other variable. To *invoke* a function
i.e. to execute its code we use its identifier and put `()` next to it and pass
in any arguments if necessary.

```javascript
function greet(name) {
    console.log(`Heyo! How's it going, ${name}?`);
}

greet("Naim"); // Heyo! How's it going, Naim?
```

###### Deferred Code Execution

Functions allow us to defer the execution of code. A function body can be
*declared* and invoked at any point in time. This allows for programs to define
certain behaviors and only execute them later on when necessary.

```javascript
function onSuccess() {
    console.log("Success!");
}

function onError() {
    console.log("Error!");
}

const age = 20;

if (age < 18) {
    onError();
} else {
    onSuccess();
}
```

###### Function Execution Context

Function invocations are isolated from one another and cannot share state
between one function call and another without the use of an external context.
Function invocations create their own execution contexts and values and
variables created inside a function body are dropped once the function is done
executing. Reference type values are kept as long as the reference that was
*returned* and is still being used in the application.

###### Default Parameter Values

Function parameters have a default value of `undefined` if its not provided with
a value while being invoked. A custom default value can be set for parameters
using the `=` operator in the parameter declaration.

```javascript
function greet(name = "person") {
    console.log(`Hello, ${name}.`);
}

greet(); // Hello, person.
greet("Naim"); // Hello, Naim.
```

###### `arguments` Object

In a function body we have access to a special variable called `arguments` which
contains any arguments passed to a function call. This variable will also
contain *uncaught* values i.e. variables that were not declared in the function
parameters.

The `arguments` variable is an object with the *keys* being the indices of the
arguments passed and the values being the actual data used in the argument list.
Default values for parameters are now included in the `arguments` object.

```javascript
function add(a, b) {
    console.log(a + b); // 3
    console.log(arguments); // {"0": 1, "1": 2, "2": 3}
}

add(1, 2, 3);
```

###### Function Return Values

We can use values produced by a function in an expression if the function
*returns* its computed value. This can be done using the `return` keyword inside
a function body. Whenever this keyword is used, the function execution will be
stopped and control will be returned to where it was invoked. If a function
doesn't use an explicit `return` statement, it will return `undefined` by
default. A function can only return one value of any data type.

```javascript
function multiply(a, b) {
    console.log("Multiplying:", a, b); // Multiplying: 2 2
    return a * b;
}

const x = multiply(2, 2) + 4;
console.log(x); // 8
```

###### Anonymous Functions

Functions can also be *anonymous* i.e. declared without specifying a name.
However, these functions cannot be invoked without either storing them using a
variable, or *immediately invoke* them using `()`.

```javascript
const functionA = function () {
    console.log("Function A");
}

functionA();

(function () {
    console.log("Function B");
})()
```

NOTE: The reason the second function *expression* was wrapped inside `()` and
then immediately after a second `()` is used to invoke it is that the function
declaration body sets its scope using the `{}` and that is not the value itself.
As functions are first class citizens in JavaScript, the whole keyword, name,
parameter list and body are altogether considered a value, and as such it has to
be first scoped using `()` and then invoked afterward with the second `()`. This
follows the same concept as operator precedence during arithmetic operations.

###### Function Declaration Hoisting

Function declarations are hoisted in the JavaScript execution context i.e. their
values can be referenced before the declaration statements in a file.

```javascript
log();

function log() {
    console.log("Hi.");
}
```

- [JavaScript Hoisting (with Examples) (programiz.com)](https://www.programiz.com/javascript/hoisting)

###### Tasks

- [ ] [How Functions Work in JavaScript – JS Function Code Examples (freecodecamp.org)](https://www.freecodecamp.org/news/understanding-functions-in-javascript)
