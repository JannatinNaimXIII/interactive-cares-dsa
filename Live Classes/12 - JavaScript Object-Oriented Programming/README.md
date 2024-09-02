# DSA Live Class - 12 - JavaScript Object-Oriented Programming

The general way we've programmed so far in JavaScript by declaring variables
scoped globally/within functions and using other functions to manipulate these
values is known as procedural programming.

JavaScript objects are a way of grouping these values and functions together
under a single identifier. Programming an application where such objects are
used as a form of combining values and functionality in entities is known as
object-oriented programming.

###### Pillars of Object-Oriented Programming

- Encapsulation - The act of grouping data together to be used/managed in a
  centralized fashion.
- Abstraction - Hiding implementation details and providing an interface for a
  consumer to use and get an expected behavior.
- Inheritance - Re-using implementation details and extending its functionality.
- Polymorphism - Overriding an inherited implementation and provide custom
  functionality.

- [The Four Pillars of Object-Oriented Programming (freecodecamp.org)](https://www.freecodecamp.org/news/four-pillars-of-object-oriented-programming/)

###### Procedural Program

Here's an example of an application written in a procedural way that stores
data about people and based on that data, performs some tasks.

```javascript
const naimName = "Jannatin Naim";
const naimAge = 20;

const setuName = "Saidur Rahman Setu";
const setuAge = 99;

function greetPerson(name, age) {
    console.log(`Hi, ${name}! Good to know that you're ${age} years old.`);
}

function goShopping(name, age) {
    if (age < 30) {
        console.log(`${name} is healthy and has no trouble carrying all the groceries.`)
    } else {
        console.log(`${name} broke his back trying to carry these bags. They're getting old. :)`)
    }
}

// =============================================================================

greetPerson(naimName, naimAge);

goShopping(setuName, setuAge);
```

###### Object Literals

Instead of having separate variables for each person's name and age and have
generic functions that take in parameters of a person's information to perform
actions, we could group all of them together using an `object` literal.

```javascript
const naim = {
    name: "Jannatin Naim",
    age: 20,
    greetPerson() {
        console.log(`Hi, ${name}! Good to know that you're ${age} years old.`);
    },
    goShopping() {
        if (this.age < 30) {
            console.log(`${this.name} is healthy and has no trouble carrying all the groceries.`)
        } else {
            console.log(`${this.name} broke his back trying to carry these bags. They're getting old. :)`)
        }
    }
}


const setu = {
    name: "Saidur Rahman Setu",
    age: 99,
    greetPerson() {
        console.log(`Hi, ${name}! Good to know that you're ${age} years old.`);
    },
    goShopping() {
        if (this.age < 30) {
            console.log(`${this.name} is healthy and has no trouble carrying all the groceries.`)
        } else {
            console.log(`${this.name} broke his back trying to carry these bags. They're getting old. :)`)
        }
    }
}

// =============================================================================

naim.greetPerson();

setu.goShopping();
```

**NOTE**: The `this` keyword in JavaScript refers to the current `object`
instance a method is operating on. In our case, `this` is referring to the
individual `naim` and `setu` objects.

Creating object literals like this solves our problem of having independent
variables but introduces a new problem i.e. repetition of implementing the
properties and methods.

**NOTE**: Values when grouped under an object are called properties and methods
grouped under an object are called methods.

- [Object-oriented programming - Learn web development | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object-oriented_programming)
- [this - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)

###### Factory Functions

To get around the limitations of creating object literals we can use a factory
function that creates this object for us based on the parameters passed to it.

```javascript
function createPerson(name, age) {
    return {
        name: name,
        age,
        greetPerson() {
            console.log(`Hi, ${name}! Good to know that you're ${age} years old.`);
        },
        goShopping() {
            if (this.age < 30) {
                console.log(`${this.name} is healthy and has no trouble carrying all the groceries.`)
            } else {
                console.log(`${this.name} broke his back trying to carry these bags. They're getting old. :)`)
            }
        }
    }
}

const naim = createPerson("Jannatin Naim", 20);
const setu = createPerson("Saidur Rahman Setu", 99);
```

To create an object using a factory function, the function needs to be invoked
with the required parameters, and it will return a new object which can be used
to access its properties and methods.

**NOTE**: When creating an object literal if the property name and a variable
being used for its value are the same, only the `propertyName` can be used to
set both the name and value instead of writing the `propertyName: value` in
whole.

- [JavaScript Factory Functions (javascripttutorial.net)](https://www.javascripttutorial.net/javascript-factory-functions/)

###### Constructor Functions

Similar to factory functions, this is also used to create new object instances.
However, for a constructor function, the properties and methods are not created
using an object but by adding them directly to the `this` variable in the
function body.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.greetPerson = function () {
        console.log(`Hi, ${name}! Good to know that you're ${age} years old.`);
    },
        this.goShopping = function () {
            if (this.age < 30) {
                console.log(`${this.name} is healthy and has no trouble carrying all the groceries.`)
            } else {
                console.log(`${this.name} broke his back trying to carry these bags. They're getting old. :)`)
            }
        }
}

const naim = new Person("Jannatin Naim", 20);
const setu = new Person("Saidur Rahman Setu", 99);
```

The naming convention for constructor function is the name of the entity being
created written in Pascal case. Our example shows a *person* object being
created and as such our constructor function is named `Person`.

**NOTE**: Invoking a constructor function must be done by preceding it with a
`new` keyword.

- [JavaScript Constructor Function (javascripttutorial.net)](https://www.javascripttutorial.net/javascript-constructor-function/)

###### `class` Keyword

Classes are the most optimal way of creating structured objects in JavaScript.
This follows the same concept as a constructor function but gives much more
control over how the data is stored, who has access to it and define properties
and methods on the *class* itself (static properties and methods) which are not
bound to any specific instance.

```javascript
class Person {
    static description = "Create a person object."

    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Hi, ${name}! Good to know that you're ${age} years old.`);
    }

    goShopping() {
        if (this.age < 30) {
            console.log(`${this.name} is healthy and has no trouble carrying all the groceries.`)
        } else {
            console.log(`${this.name} broke his back trying to carry these bags. They're getting old. :)`)
        }
    }
}

const naim = new Person("Jannatin Naim", 20);
const setu = new Person("Saidur Rahman Setu", 99);

console.log(Person.description); // Create a person object.
console.log(naim.description); // ERROR
```

- [Classes - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes)

###### `Function` Constructor

Values in JavaScript are objects themselves including functions. The reason
that constructor functions work is that they set properties and methods on the
function object itself and those properties and values are later accessed once
the constructor function is ran.

```javascript
const print = new Function('num', 'console.log(num)');

print(5); // 5
```

The `function` keyword we've used in the past to create functions are language
features which are ultimately created using the `Function` constructor. Same
thing goes for any literal values created in the program such as strings,
numbers and booleans which have their respective constructor functions `String`,
`Number`, and `Boolean` respectively.

- [Function() constructor - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
