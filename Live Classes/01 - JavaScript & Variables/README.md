# DSA Live Class - 01 - JavaScript & Variables

###### Frequently Asked Questions

**Q: Why do we need to learn a programming language?**

Suppose we have a computer; it doesn't understand our natural language (English,
Bangla). It has its own language called Binary (made of 0s and 1s). If we want
to give any instructions to the computer we need an _interpreter_ which will
convert something like our natural language and translate it for the computer to
understand. Such tools are called _compilers_.

-   [Binary number - Wikipedia](https://en.wikipedia.org/wiki/Binary_number)
-   [Compiler - Wikipedia](https://en.wikipedia.org/wiki/Compiler)

**Q: How do we choose a programming language?**

It's hard for someone who's never programmed before he'll not understand a
thing. However, once you're familiarized with programming, it's very easy to
understand what's going on. Programming languages just like their real world
counterparts, have unique features/quirks. Languages can be built for specific
purposes or for general scripting. Although these languages differ in their
syntax, functionality, purpose, etc. they all share the same _core
fundamentals_.

-   [Programming language - Wikipedia](https://en.wikipedia.org/wiki/Programming_language)
-   [List of programming languages - Simple English Wikipedia, the free encyclopedia](https://simple.wikipedia.org/wiki/List_of_programming_languages)

**Q: Why did we choose JavaScript for the course?**

It's the native language of the web i.e. websites and servers can universally
use this language among many other applications.

-   [JavaScript - Simple English Wikipedia, the free encyclopedia](https://simple.wikipedia.org/wiki/JavaScript)
-   [TC39 - Specifying JavaScript.](https://tc39.es/)

**Q: How do we run JavaScript?**

JavaScript cannot be directly ran on a computer. You need a JavaScript engine
that can process and run your code. _Google Chrome_ has one such engine which
can run JavaScript. Another option to run your JavaScript code is the _Node.js_
runtime environment.

-   [JavaScript engine - Wikipedia](https://en.wikipedia.org/wiki/JavaScript_engine)
-   [Runtime system - Wikipedia](https://en.wikipedia.org/wiki/Runtime_system)
-   [Node.js - Wikipedia](https://en.wikipedia.org/wiki/Node.js)

###### Primitive Data Types in JavaScript

-   Numbers
    -   Integers `int`
    -   Floating Point Numbers / Decimals `float`
-   Text
    -   Character `char`
    -   String / Sequence of Characters `string`
-   Boolean Context (True and False)

    -   Boolean `bool`

-   [Data type - Wikipedia](https://en.wikipedia.org/wiki/Data_type)
-   [Primitive vs Reference Data Types in JavaScript (freecodecamp.org)](https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/)

###### Dynamic Type System in JavaScript

In JavaScript, you don't need to specify what type of data is being put into a
variable. Such as, assigning a number into a variable will need only the
variable name, and assignment operator and the value itself. JavaScript will
store the value internally as a specific type based on the value provided but
that will be abstracted away into the engine itself.

-   [Type system - Wikipedia](https://en.wikipedia.org/wiki/Type_system)
-   [Dynamic programming language - Wikipedia](https://en.wikipedia.org/wiki/Dynamic_programming_language)

###### Variables - Declaration & Assignment

Declaring a variable in JavaScript requires the `let` keyword, followed by the
_name_ of the variable, the assignment operator i.e. `=` and the value that is
to be stored into the variable.

```javascript
let name = "Jannatin Naim";
let age = 20;
```

Variables can be created with _3 different keywords_ in JavaScript.

```javascript
var a = "JavaScript";
let b = 262;
const c = "Oracle";
```

Variables are first _initiated_/_declared_ and then _assigned_ a value.
Variables that are declared but are not assigned a value when it's initialized,
is given a value of `undefined`. Variables declared with `const` cannot be
initialized without a value provided during its declaration.

```javascript
let course; // undefined

course = "Data Structures"

const x; // ERROR
```

`undefined` is a JavaScript is a special value that defines the _absence_ of a
value.

-   [Variable (computer science) - Wikipedia](<https://en.wikipedia.org/wiki/Variable_(computer_science)>)
-   [JavaScript undefined Property (w3schools.com)](https://www.w3schools.com/jsref/jsref_undefined.asp)

###### Variables in Memory

Variables are stored in memory. Memory can be seen as a list of slots that can
contain a binary value. Numbers are generally stored using _4 bytes_ i.e. _32
bits_ for integer values. These 32 bits can be used to represent a binary value
of 32 digits which is a combination of `4,294,967,295` values in decimal.
Different _data types_ take up different amount of space in memory to represent
themselves.

In JavaScript, values can be either of a _primitive_ type or of a _reference_
type. Primitive values are directly accessed by the program. These values are
stored as is on the memory. Reference type values are stored across a memory
range and only their _pointer_ are referenced by the program.

-   [Primitive vs Reference Data Types in JavaScript (freecodecamp.org)](https://www.freecodecamp.org/news/primitive-vs-reference-data-types-in-javascript/)

###### Constant Variable Declaration

A variable defined with `const` will only prevent its _reference_ from being
re-assigned but not the value of the reference that it contains i.e. an array
that is declared with `const` is not _immutable_. The values of the array can be
freely _mutated_ (changed) without updating the variable reference.

-   [JavaScript const (w3schools.com)](https://www.w3schools.com/JS/js_const.asp)

###### JavaScript Identifiers

Identifiers (variable names) in JavaScript need to follow a few rules.

-   Valid
    -   Alpha-numeric
        -   `A-Z`, `a-z`, `0-1`
    -   Special characters
        -   `_`, `$`
-   Invalid
    -   Cannot start with a _number_.
    -   Cannot be an existing _keyword_

Variables in JavaScript follow the _camel case_ (`variableName`) naming
convention for variables names and instances. Classes and Interfaces follow the
_pascal case_ (`VariableName`) naming convention.

-   [JavaScript Keywords and Identifiers (programiz.com)](https://www.programiz.com/javascript/keywords-identifiers)

###### Tasks

-   [ ] Build a habit of reading.
-   [ ] [Values, Types, and Operators :: Eloquent JavaScript](https://eloquentjavascript.net/01_values.html)
-   [ ] [JavaScript Tutorial (w3schools.com)](https://www.w3schools.com/js/default.asp) - [JavaScript Operators (w3schools.com)](https://www.w3schools.com/js/js_operators.asp)
