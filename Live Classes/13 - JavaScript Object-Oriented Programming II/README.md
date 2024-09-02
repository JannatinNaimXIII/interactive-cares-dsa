# DSA Live Class - 12 - JavaScript Object-Oriented Programming

OOP basics have been discussed previously in
[[Live Classes/12 - JavaScript Object-Oriented Programming/README|12 - JavaScript Object-Oriented Programming]].

###### Inheritance

Once a class is defined, another class can derive from it and inherit all the
implemented properties and methods. The new class can add or modify the
properties and methods defined in the parent class as well. A class can be
inherited from by using the `extends` keyword.

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    greet() {
        console.log(`Hi, ${this.name}.`);
    }
}

class Student extends Person {
    study() {
        console.log(`${this.name} is studying.`);
    }
}
```

The `Student` class inherits all functionality and properties defined in the
`Person` class and adds a new method `study` which is exclusive to the `Student`
class.

If a class wants to add new properties to the class it has inherited other
properties from during construction, it must explicitly set the values of the
parent class as well.

The `super` method when called inside a `costructor` function calls the
parent class' `constructor` function. This can be used to instantiate the parent
class first before adding new properties to the extended class.

```javascript
class Teacher extends Person {
    constructor(name, salary) {
        super(name);

        this.salary = salary;
    }
}
```

- [Inheritance and the prototype chain - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

###### Modules

JavaScript code is ran using scripts and so far we've put all our code in a
single script. However, we can split up our code into multiple source files
and export values from each of those files to be used in other source files.
This mechanism is known as having code modules.

JavaScript has two such standards of exposing modules based on its execution
environment. This is because historically JavaScript didn't have native support
for modules and this feature was independently developed by runtimes. As of
ES6 standardization, modules are a native part of JavaScript. However, due to
legacy reasons the Node.js specific module system is still just as relevant.

In practical terms they are very similar to use but in certain case these
separate module systems are not interoperable.

```javascript
// main.js

class Person {
    constructor(name) {
        this.name = name;
    }
}

const person = new Person("Jannatin Naim");
```

The above code has both the class definition and usage all in the same file. To
break this up we'll create a separate `person.js` file which will only contain
the definition of the `Person` class and will export it for use in other files.

```javascript
// person.js (es6)

export default class Person {
    constructor(name) {
        this.name = name;
    }
}
```

Alternatively, the CommonJS way of exporting values from a module is as follows.

```javascript
// person.js (commonJS)

class Person {
    constructor(name) {
        this.name = name;
    }
}

module.exports = Person;
```

- [JavaScript modules - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)

###### Module Imports

To use these exported values in our `main.js` file we'll have to import the
references from the source file that exports them. The following examples assume
that the source files are part of the same directory. Otherwise, the relative
path to the source files need to be adjusted.

```javascript
// main.js (es6)

import Person from './perosn.js';

const person = new Person("Jannatin Naim");
```

```javascript
// main.js (commonJS)

const Person = require("./person.js");

const person = new Person("Jannatin Naim");
```

A single source file an export multiple values as well as a default value which
we've imported in the example above. To export individual values, the following
methods shall be used.

```javascript
// person.js (es6)

export const name = "Person";
export const description = "Creates a new person.";
```

```javascript
// person.js (commonJS)

const name = "Person";
const description = "Creates a new person.";

module.exports.name = name;
module.exports.description = name;
```

In case of CommonJS exports, if the file doesn't need to have a default exported
value, instead of setting individual properties to the `module.exports` object,
it could be set to an object literal that exports all the variables in it.

```javascript
// person.js (commonJS)

const name = "Person";
const description = "Creates a new person.";

module.exports = {
    name,
    description
}
```

###### Multiple Imports from Module

Using ES6 imports, we'll have to either import these values individually
through object destructuring or accumulate all exported values under a single
object which will have the exported variables as properties on that object. This
will make the object itself the default exported value of the module if there
exists one.

**NOTE**: The pitfall of using the special syntax to accumulate all exports
into a single variable will cause the default exported object's properties to be
overwritten.

```javascript
// main.js (es6)

import { name, description } from "./person.js"

console.log(name, description);
```

```javascript
// main.js (commonJS)

const { name, description } = require("./person.js");

console.log(name, description);
```

Valid import options for ES6 also include the following examples.

```javascript
// main.js (es6)

import Person from "./person.js";
import Person, { name, description } from "./person.js";
import * as person from "./person.js"; // all exports under a single variable
```

- [CommonJS vs. ES modules in Node.js - LogRocket Blog](https://blog.logrocket.com/commonjs-vs-es-modules-node-js/)
