# DSA Live Class - 10 - JavaScript Array Methods

JavaScript arrays have methods attached to them that allows us to perform
various actions on them.

###### `map` - Recreating an Array

To create a new array using the same elements in an array we can simply define
an array and push all the elements in the current array to the new array. We
can also keep adding the items in the current index of the array to the newly
defined array.

```javascript
const original = [1, 2, 3, 4, 5];
const copy = [];

for (const item of original) {
    copy.push(item);
}

console.log(copy); // [1, 2, 3, 4, 5]
```

Alternatively, we can use the index and set the items using that.

```javascript
const original = [1, 2, 3, 4, 5];
const copy = [];

for (let i = 0; i < original.length; i++) {
    copy[i] = original[i];
}

console.log(copy); // [1, 2, 3, 4, 5]
```

Both of these approaches get our work done. If we wanted to modify the value
before it is added to the new array we could do that in the loop body as well.
However, JavaScript provides the `map` method in an array which achieves the
same purpose. The benefit of doing it using the `map` function is that the
resultant array can be used in an expression without having to create a new
loop construct.

```javascript
const original = [1, 2, 3, 4, 5];

const copy = original.map((item) => item);

console.log(copy); // [1, 2, 3, 4, 5]
```

The `map` function takes a callback function with the arguments being `item`,
`index` and the `array` respectively. The function is called on every element
of the array and the return value from the function is used to create the new
array. Doing this doesn't modify the original array in any way, and we can use
the newly created array as part of a larger expression.

```javascript
const original = [1, 2, 3, 4, 5];

const doubled = original.map((item) => item * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

- [Array.prototype.map() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

###### `filter` - Recreating Only a Subset of an Array

The `map` method allows us to create a new array containing all the elements
from the previous array regardless of the value being modified or not. In case
we want to create a new array and only select a subset of the values to be part
of the new array, we can use the `filter` method. This method doesn't modify
the original array and thus cannot be used to remove elements from an existing
array. `filter` will always create a new array and as such, to remove elements
from an existing array, the existing identifier of the previous array needs to
be overwritten.

```javascript
const original = [1, 2, 3, 4, 5];

const filtered = original.filter((item) => item % 2 === 0); // [2, 4]
```

To have the same array identifier contain a filtered array, we need to define
a mutable variable.

```javascript
let original = [1, 2, 3, 4, 5];

original = original.filter((item) => item % 2 === 0); // [2, 4]
```

- [Array.prototype.filter() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

###### `every` - Check a Condition on All Array Elements

To create a single boolean value based on every element of an array we can use
the `every` method. This method takes in a function that returns a boolean and
if all the elements of an array return `true` the `every` method will also
result in `true`. Otherwise, even if a single element doesn't result in a truthy
value, the method will return `false`.

```javascript
const original = [1, 2, 3, 4, 5];

const isAllPositive = original.every((item) => item > 0); // true
const isAllEven = original.every((item) => item % 2 === 0); // false
```

- [Array.prototype.every() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

###### `some` - Check a Condition on Some Array Elements

Unlike the `every` method, the `some` method only checks for a single value in
the array to result in `true` from the callback. Once a truthy value is found,
the `some` function returns early and doesn't run the predicate on the rest of
the array elements.

```javascript
const original = [1, 2, 3, 4, 5, '6'];

const someIsString = original.some((item) => typeof item === "string");

console.log(someIsString); // true
```

- [Array.prototype.some() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
