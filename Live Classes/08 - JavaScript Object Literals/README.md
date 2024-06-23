# DSA Live Class - 08 - JavaScript Object Literals

###### Object Initialization & Accessing Values

Objects are a store of *key value pairs* in JavaScript. Objects can be created using the *object literal syntax*. Values
inside an object can be accessed using the identifier followed by a `.` and then the key or using the identifier and the
key in between `[]`.

```javascript
let object = {
    key: value,
}

object.key;
object["key"];
```

```javascript
let person = {
    name: "Jannatin Naim",
    age: 20,
}

console.log(person.name); // Jannatin Naim
console.log(person["age"]); // 20
```

###### Value Types

The keys can hold any type of value. The ones that hold information we call them *properties* and the ones that contain
functions, we call them *methods*. Functions when they are part of an object are called methods. Methods can be declared
like properties or as a function declaration.

```javascript
const phone = {
    model: "iPhone 14 Pro Max",
    boot: function () {
        console.log("Booting up phone.");
    },
    shutdown() {
        console.log("Shutting down.");
    }
}

console.log(phone.model); // iPhone 14 Pro Max
phone.boot(); // Booting up phone.
phone.shutdown(); // Shutting down.
```

###### Unknown Object Properties

Accessing unknown properties on an object will return `undefined`.

```javascript
const x = {}

console.log(x.y); // undefined
```

###### Strict Mode

JavaScript's *strict mode* can be used to prevent common bugs from appearing in our code. It sets some stricter
guidelines to follow while coding. Code that may be valid JavaScript and will be executed without *errors* will often be
blocked by the strict mode in case it contains dangerous behavior.

- [JavaScript "use strict" (w3schools.com)](https://www.w3schools.com/js/js_strict.asp)

###### Object Property Mutation

Properties in objects can be modified or new properties can be introduced using the assignment operator. Properties of
an object can be removed using the `delete` keyword.

```javascript
const os = {
    name: "Windows",
    version: 11,
}

os.name = "Windows 11";
os.build = "22H2";
delete os.version;

console.log(os); // {name: "Windows 11", build: "22H2"}
```

###### Nested Object Properties

Objects can contain objects as values and as such `.` can be chained to reach deeply nested values.

```javascript
const x = {
    y: {
        z: "Hi.",
    }
}

console.log(x.y.z); // Hi.
```

###### Calculator Object

```javascript
const calculator = {
    add(a, b) {
        return a + b;
    },
    subtract(a, b) {
        return a - b;
    },
    divide(a, b) {
        return a / b;
    },
    multiply(a, b) {
        return a * b;
    }
}

calculator.add(1, 2); // 3
calculator.subtract(3, 4); // -1
calculator.divide(5, 6); // 0.8333333333
calculator.multiply(7, 8); // 56
```

###### Object `for in` Loops

We can use a `for in` loop to iterate over the *keys* of an object.

```javascript
const person = {
    name: "Jannatin Naim",
    age: 20,
}

for (const key in person) {
    console.log(person[key]); // Jannatin Naim, age
}
```

###### Factory Functions

Objects that are created with the same set of keys can be produced using a *factory function* or a *constructor
function* that provide a common blueprint to create new objects with similar keys but different values.

```javascript
function createPhone(brand, model, price) {
    return {
        brand,
        model,
        price,
        isAvailable: true,
    }
}

const iPhone14ProMax = createPhone("Apple", "14 Pro Max", 120_000);
const samsungGalaxyS20Ultra = createPhone("Samsung", "S20 Ultra", 120_000);

console.log(iPhone14ProMax); // {brand: "Apple", model: "14 Pro Max", price: 120000, isAvailable: true}
```

NOTE: When using a variable as the value of a key in an object literal, if the name of the key and the variable matches,
we can omit the `:` and just write the variable name as a property.

NOTE: Numbers in JavaScript can contain `_` to help with readability.

###### Palindrome Checker

```javascript
function isPalindrome(string = "") {
    if (!string.length) return false;

    let firstHalf = "";
    let secondHalf = "";

    if (string.length % 2 === 0) {
        firstHalf = string.slice(0, string.length / 2);
        secondHalf = string.slice(string.length / 2);
    } else {
        firstHalf = string.slice(0, Math.floor(string.length / 2));
        secondHalf = string.slice(Math.ceil(string.length / 2));
    }

    const halfLength = Math.floor(string.length / 2);

    for (let i = 0, j = halfLength - 1; i < halfLength && j >= 0; i++, j--) {
        if (firstHalf[i] !== secondHalf[j]) return false;
    }

    return true;
}
```
