# DSA Live Class - 02 - JavaScript Data Types & Type Coercion

###### Fun Fact

The most powerful asset at present times is _data_. The one who holds the most
amount of data has the most control over everything. The current revolution in
AI technologies is all thanks to the amount of data that was harvested by
big-tech.

###### Data Types in JavaScript

There are 8 _primitive data types_ in JavaScript.

1. String `string`
2. Number `number`
3. Big Integer `BigInt`
4. Boolean `boolean`
5. Undefined `undefined`
6. Null `null`
7. Symbol `symbol`
8. Object `object`

**Object**: An entity that has _properties_ and _methods_. A property is
something that provides information about the entity. A method is a function
that is attached to or is part of the entity.

-   [JavaScript Data Types (w3schools.com)](https://www.w3schools.com/js/js_datatypes.asp)

###### String

```javascript
let string = "Heyo! How's it going";

console.log(typeof string); // string
```

An empty string and a string with even a single character are not the same.

```javascript
let emptyString = "";
let spaceString = " ";

console.log(emptyString === spaceString); // false
```

###### Number

In JavaScript, all _numbers_ are _64-bit double precision floating point
numbers_. Unlike lower level languages, we do not need to annotate what type of
binary representation to use to store the number.

We can get the maximum integer value that can be stored in JavaScript through
the following property.

```javascript
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
```

If we ever need an integer value that exceeds the maximum safe integer value, we
can use the `BigInt` type to represent that value.

CAUTION: The `Math` object's methods are sometimes incompatible with
the `BigInt` type.

Numeric sequences in strings are still considered as strings in JavaScript.

```javascript
const num = 20;
const numString = "20";

console.log(typeof num); // number
console.log(typeof numString); // string
```

###### Boolean

Boolean values are either `true` or `false`. It's a binary data type i.e. there
are only two possible state for the value to be in.

```javascript
let isAlive = true;

console.log(isAlive); // boolean
```

-   [Falsy - MDN Web Docs Glossary: Definitions of Web-related terms | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Glossary/Falsy)

###### Undefined

`undefined` is like a reserved value in JavaScript that _represents the absence
of a value_.

Variables that are initialized but not assigned a value will by default get the
value of `undefined`. Any value you try to access in JavaScript that was not
_defined_ will result in `undefined`.

```javascript
let name;

console.log(name); // undefined
console.log(typeof name); // undefined
```

###### Null

Unlike `undefined`, `null` means the _actual absence of a value_.

```javascript
let nothing = null;

console.log(nothing); // null;
```

**CAUTION:** However, if the `typeof` operator is used on a `null` value, the
result will be `object`. This is somehow part of
the [ECMAScript Language Specification - ECMA-262 Edition 5.1 (ecma-international.org)](https://262.ecma-international.org/5.1/#sec-11.4.3)
and is a core language feature/bug. This was never changed just for the sake of
_backwards compatibility_.

```javascript
const x = null;

console.log(typeof x); // object
```

###### `NaN` - Not a Number

`NaN` is the representation of a value that is _not a number_. `NaN` can be
produced from invalid arithmetic operations on all arithmetic operators. The `*`
operator cannot work with both operands being a `string` so, it will produce a
result that is _not a number_.

```javascript
const a = "a";
const b = "b";

console.log(a * b); // NaN
```

However, the `typeof` operator when used on a `NaN` will still result
in `number`.

```javascript
console.log(typeof NaN); // number
```

###### `typeof` Operator

The result yielded from the `typeof` operator is a `string`.

```javascript
const name = "string";

console.log(typeof name); // "string"

const typeOfName = typeof name;
console.log(typeof typeOfName); // string
```

###### Object

Everything in JavaScript is an Object. This is because we can access properties
and methods on even primitive data types (the exceptions being `undefined`
and `null` that have no properties or methods).

Primitive values in JavaScript are _boxed_ by default with wrappers which makes
them an Object in practice.

###### Object Literal

We can group a set of values under _named keys_ into a single value called an
Object. Object Literals are used to create objects directly with the properties
and values.

```javascript
const person = {
    name: "Jannatin Naim",
    age: 20,
};
```

###### Type Coercion/Casting

In JavaScript, we can _convert_ one primitive type to another. This can either
be done implicitly or explicitly.

This is especially important when fetching data from external sources such as an
HTTP response or an HTML Form. The data we get might be in a string
representation which is a sequence of digits. We can convert such strings into
JavaScript numbers through type coercion.

```javascript
const recievedNumberString = "20";
console.log(recievedNumberString); // "20";

const age = Number(receivedNumberString);
console.log(age); // 20;

console.log(age === receivedNumberString); // false | These values are not of the same type.
```

Values can sometimes be implicitly converted to other types based on the
operations being performed on it. One such examples is as follows when a number
and a string is used as arguments to the `+` operator.

```javascript
const num = 2;
const string = "0";

const result = num + string;
console.log(result); // "20"
console.log(typeof result); // string
```

-   [JavaScript type coercion explained (freecodecamp.org)](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)
-   [You-Dont-Know-JS/types & grammar/ch4.md at 1st-ed · getify/You-Dont-Know-JS (github.com)](https://github.com/getify/You-Dont-Know-JS/blob/1st-ed/types%20%26%20grammar/ch4.md)

The `+` operator in JavaScript is _overloaded_ i.e. it can produce different
outputs based on the characters of its operands.

In case of `string` as both of its arguments, it will _concatenate_ them and
result in a new string. Based on the implicit type coercion rules of JavaScript,
if either operand of the `+` operator is a string, the other operand will also
be coerced into a string and then concatenated.

```javascript
const x = "Hello, ";
const y = "world!";

const result = x + y;

console.log(result); // Hello, world!
```

The other times when both operands are `number`s, the `+` operator will perform
an addition operation.

```javascript
const a = 10;
const b = 20;

console.log(a + b); // 30
```

**TIP**: The `+` operator can also be used as a _unary operator_. When only one
operand is provided to the `+` operator, it will coerce the value into a number.

```javascript
const ageString = "20";
const age = +ageString;

console.log(age); // 20
console.log(typeof age); // number
```

-   [JavaScript Operator Precedence (w3schools.com)](https://www.w3schools.com/js/js_precedence.asp)
-   [Operator precedence - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence#table)
-   [JS Comparison Table (dorey.github.io)](https://dorey.github.io/JavaScript-Equality-Table/)

###### Tasks

-   [ ] [JavaScript type coercion explained (freecodecamp.org)](https://www.freecodecamp.org/news/js-type-coercion-explained-27ba3d9a2839/)
-   [ ] [JavaScript Operators (w3schools.com)](https://www.w3schools.com/js/js_operators.asp)
-   [ ] [JavaScript Arrays (w3schools.com)](https://www.w3schools.com/js/js_arrays.asp)
-   [ ] [JavaScript for Loop (w3schools.com)](https://www.w3schools.com/js/js_loop_for.asp)
