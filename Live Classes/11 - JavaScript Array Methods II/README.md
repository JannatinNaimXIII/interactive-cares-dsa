# DSA Live Class - 11 - JavaScript Array Methods II

Few of JavaScript's built-in array methods were discussed in
[[Live Classes/10 - JavaScript Array Methods/README|10 - JavaScript Array Methods]]
notes.

###### `reduce` - Create a Single Value from All Array Elements

Operations that require the *accumulation* of several values can be performed
using the `reduce` method.

An example of an operation that requires an accumulation of values includes
finding the sum of a given set of values.

```javascript
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

for (const num of numbers) {
    sum += num;
}

console.log(sum); // 15
```

The concept of a `reduce` method is to give you a mutable variable and let you
iterate through all array elements based on which you can mutate the given
variable based on your own logic and conditions. This results you in creating
a single value from the accumulation of all your array elements.

The function signature of a `reduce` method is as follows.

```javascript
reduce(
    function (accumulatedValue, currentElement) => updatedAccumulatedValue,
    initialAccumulatedValue
)
```

The predicate is run on all elements of an array and the returned value from a
previous operation is passed on as the current accumulated value for the next
element. The initial value of the accumulator can be set explicitly otherwise it
will use the first array element.

**CAUTION**: If the initial value of the accumulator is not set, the reduce
function is executed starting from the second element which might cause
unintended behavior.

```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((sum, number) => sum + nmber, 0);

console.log(sum); // 15
```

By default, the elements are iterated over from left to right. To go right to
left, the `reduceRight` method can be used.

- [Array.prototype.reduce() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
- [Array.prototype.reduceRight() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight)

###### `sort` - Sorts All Array Elements

The `sort` method sorts a given array elements in ascending order by first
converting all values to strings and then comparing the UTF-16 code values.
This behavior can be changed using a comparison function which determines how
the two values being compared should be arranged.

**CAUTION**: Since JavaScript arrays can contain values of different types, the
`sort` method will only order them based on their *stringified* value. As such,
an array containing values of multiple data types will be sorted in unexpected
ways.

**CAUTION**: The `sort` method sorts an array *in place* i.e. it mutates the
original array. To create a new sorted array without modifying the existing
array, te `toSorted` method can be used instead.

```javascript
const values = ['a', 'c', 'b', 'e', 'd'];

values.sort();

console.log(values); // ['a', 'b', 'c', 'd', 'e']
```

To sort elements based on a condition, a callback function can be passed in as
an argument to the `sort` function. The arguments of the callback function are
the two values being compared. This function should return an integer value
which corresponds to the following sort order.

- Positive - `a` should come before `b`.
- Negative - `b` should come before `a`.
- Zero/NaN - `a` and `b` are equal. Positions are not changed.

Simply, to sort based on ascending and descending order, the following methods
can be used.

```javascript
const values = ['a', 'c', 'b', 'e', 'd'];

const ascending = values.toSorted((a, b) => a - b);
console.log(ascending); // ['a', 'b', 'c', 'd', 'e']

const descending = values.toSorted((a, b) => b - a);
console.log(descending); //  ['e', 'd', 'c', 'b', 'a']
```

- [Array.prototype.sort() - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
