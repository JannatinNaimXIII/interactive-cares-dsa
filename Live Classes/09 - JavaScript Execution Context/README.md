# DSA Live Class - 09 - JavaScript Execution Context

The Execution Context in JavaScript is the _environment_ a piece of code is run.
This includes variable bindings, the scope chain, function arguments, etc.

```javascript
let numOne = 20;
let numTwo = 10;

function add(a, b) {
    const result = a + b;
    return result;
}

add(a, b);
```

JavaScript code starts its execution on the _global execution context_. It
provides the global object and other declarative records such as variables and
functions.

Identifiers are hoisted and variables declared with `let` and `cosnt` are kept
_uninitialized_ and the lines above their declaration is marked as their
_temporal dead zone_ where the identifier is accessible but since they are
uninitialized still, it throws an error. Variables declared with `var` however
_are initialized_ with the value `undefined` and later down the line gets
populated with its assigned value. Function declarations are also kept in memory
and can be accessed before their declaration.

Whenever a new function is called, it creates its own execution context and up
its scope chain is the execution context it was created in. This is how nested
function calls create a scope chain that allows inner contexts to access values
from outer contexts.

Values inside an execution context are destroyed once that execution context is
off the call stack, however in case of a closure, inner functions can retain the
_variable environment_ from an execution context that is not on the call stack.

NOTE: JavaScript Execution Context is best understood in a visual format. Please
refer to the resources below to get a better understanding on the topic.

-   [JavaScript Visualized - Execution Contexts (youtube.com)](https://www.youtube.com/watch?v=zdGfo6I1yrA)
-   [ECMAScript® 2025 Language Specification (tc39.es)](https://tc39.es/ecma262/#sec-executable-code-and-execution-contexts)
-   [JavaScript Execution Context – How JS Works Behind The Scenes (freecodecamp.org)](https://www.freecodecamp.org/news/execution-context-how-javascript-works-behind-the-scenes/)
