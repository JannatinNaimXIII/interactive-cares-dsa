# DSA Live Class - 07 - JavaScript Functions II

###### Higher Order Functions

Functions are treated as *first class citizens* in JavaScript i.e. they can be used as values throughout the application and passed around as a reference type data.

Functions that either take in a function as an argument or return one is called a *higher order function*.

```javascript
function sayHi(name) {
	console.log(`Hi, ${name}.`);
}

function welcome(name, greetFunction) {
	greetFunction();
	console.log("Welcome to the program.");
}

welcome("Naim", sayHi);
```

- [Higher-Order Functions :: Eloquent JavaScript](https://eloquentjavascript.net/3rd_edition/05_higher_order.html#h_xxCc98lOBK)

###### Callback Functions

A function when passed into another function for delayed execution is called a *callback* function. This is when you leave the invocation of a function up to another function to decide and just provide it with the definition of your function body. The arguments that are passed, the time its called is handled by the higher order function that took the callback function as an argument itself.

Callback functions are widely used as event handlers as a defined behavior is only executed when certain things may happen.

```javascript
function buttonClickHandler() {
	console.log("Button was clicked.");
}

const button = document.getElementById("button");
button.addEventListener("click", buttonClickHandler);
```

- [Callback function - MDN Web Docs Glossary: Definitions of Web-related terms | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Glossary/Callback_function)
- [JavaScript Callbacks (w3schools.com)](https://www.w3schools.com/js/js_callback.asp)

###### Fizz Buzz Function

```javascript
function fizzBuzz(start, limit) {
	for (let num = start; num <= limit; num++) {
		if (!Math.abs(num)) continue; // Skip negative numbers.
		if (num === 0) continue; // Skip 0.
		
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
}

fizzbuzz(10, 200);
```

###### Rest Operator

A function can take in an specified number of values as arguments by using the `...` (rest/spread) operator. This is used to catch all the values passed as arguments to a function into an array with a specified identifier.

```javascript
function addNumbers(...nums) {
	let sum = 0;
	for (const num of nums) {
		sum += num;
	}
	return sum;
}

console.log(addNumbers(1, 2, 3, 4, 5)); // 15
```

The rest operator can be used to catch extra arguments in a function after the named parameters have been defined. However, the spread operator has to be used on the last parameter of the function.

```javascript
function cart(name, ...items) {
	console.log(`${name} is buying the following items.`);
	console.log(items);
}

cart("Naim", "Pen", "Paper");
```

- [Rest parameters - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)

###### Spread Operator

Similarly to the concept of collecting multiple arguments of a function in a single variable, a single *iterable value* can be used to pass multiple arguments to a function. The spread operator is used in this case.

```javascript
function addNums(a, b, c) {
	return a + b + c;
}

const nums = [1, 2, 3];

console.log(addNums(...nums)); // 6
```

NOTE: The `...` operator is called spread when it's *spreading an iterable* into multiple values and rest when it's *collecting a number of values*.

- [Spread syntax (...) - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax)

###### Arrow Functions

Arrow functions are a function expression syntax introduced in ES6. These have different behaviors than regular function declarations.

```javascript
const sayHi = (name) => {
	console.log(`Hi, ${name}`);
}
```

- [Arrow function expressions - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions)

###### One Liner Arrow Functions

Arrow functions when can be written in one line do not need the surrounding `{}` and an implicit return will take place if the function produces any value.

```javascript
const add = (a, b) => a + b;

console.log(add(1, 2)); // 3;
```
