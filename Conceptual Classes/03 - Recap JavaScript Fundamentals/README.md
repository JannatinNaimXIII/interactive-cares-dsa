# DSA Conceptual Class - 03 - Recap JavaScript Fundamentals

###### Strings

```javascript
"some text";
'some text';

"some ' text";
"some \" text";

'some " text';
'some \' text';

`some text`;
`some ${2 + 2} text`;
"some " + (2 + 2) + " text";

const  string = "some text";

string.toLowerCase();
string.indexOf();
string.indexOf("o");
string.indexOf("x");
string.slice(0, 4);
string.split(" ");
string.includes("some");
string.trim();
string.replace("some", "other");
```

- [String - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)
- [String.prototype.toLowerCase() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)
- [String.prototype.indexOf() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)
- [String.prototype.slice() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)
- [String.prototype.split() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [String.prototype.includes() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes)
- [String.prototype.trim() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim)
- [String.prototype.replace() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

###### Numbers

```javascript
10;
10n;

10_000;

const number = 10.125;

number.toFixed(2);
number.toString();

10 + 10;
10 - 10;
10 * 10;
10 / 10;
10 ** 10;
10 % 10;
```

- [Number - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)
- [BigInt - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/BigInt)
- [Number.prototype.toFixed() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
- [Number.prototype.toString() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toString)
- [Expressions and operators - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators#arithmetic_operators)

###### Bolleans

```javascript
true;
false;

Boolean(value);
Boolean();
Boolean("");
Boolean(0);
Boolean(false);

if (true) {}
else if (false) {}
else {}

```

- [Boolean - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean)
- [Truthy - MDN Web Docs Glossary: Definitions of Web-related terms | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Glossary/Truthy)
- [if...else - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else)

###### Functions

```javascript
function repeatedCode() {
    console.log("Step One.");
    console.log("Step Two.");
}

repeatedCode();
repeatedCode();
repeatedCode();

function dynamicBehavior(argument) {
    if (argument === "a") {
        console.log("Route A");
    } else {
        console.log("Unknown Route");
    }
}

dynamicBehavior("a");
dynamicBehavior("b");

function multipleArguments(a, b) {
    console.log(a, b);
}

multipleArguments("a", "b");
multipleArguments(2, 4);

function infiniteArguments(...args) {
    console.log(args);
}

infiniteArguments(1, 2, 3, 4, 5);

function higherOrder() {
    return function() {
        console.log("Returned from a higher order function.");
    }
}

const returnedFunction = higherOrder();

returnedFunction();

function closureParent(a) {
    function closureChild(b) {
        console.log(a, b);
    }

    return closureChild;
}

const closureFunction = closureParent(2);

closureFunction(4);

class Person {
    constructor(name) {
        this.name = name;

        this.propertyName = value;
    }

    greet() {
        console.log(`Hi, I'm ${this.name}.`);
    }
}

const personA = new Person("A");
const personB = new Person("B");

personA.name;
personA.greet();
personB.greet();
```

- [Functions - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [Functions (Closures) - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions#closures)
- [Rest parameters - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters)
- [Higher Order Functions in JavaScript – Reach New Heights in Your JS Code (freecodecamp.org)](https://www.freecodecamp.org/news/higher-order-functions-in-javascript-examples/)