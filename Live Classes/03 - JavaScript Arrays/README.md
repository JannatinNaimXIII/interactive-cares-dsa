# DSA Live Class - 03 - JavaScript Arrays

###### Arrays

In a variable, we can only store *one primitive value*. We can change its value but, it will only contain one value. In
case we need to store multiple values in a single variable, we can use an array.

An array is a *block of contiguous memory space* where we can store values of the same data types. However, in
JavaScript the default array implementation allows us to mix and match different data types in the same array.

```javascript
const names = ["Jannatin Naim", "S.R Setu"];
```

- [Array (data structure) - Wikipedia](https://en.wikipedia.org/wiki/Array_(data_structure))
- [JavaScript Arrays (w3schools.com)](https://www.w3schools.com/js/js_arrays.asp)

###### Array Indices

When an array is created with an identifier, the identifier itself doesn't contain the values in the array. Instead, it
points to the actual array in memory from which we can access its value using its iterator or with the `[]` operator by
passing in an array index. Arrays in JavaScript are stored in the *heap memory*.

The elements in an array are indexed. The first item in an array has an index of `0`. To read or modify the values in
the array we can use this `[]` operator with an index.

```javascript
const names = ["Jannatin Naim", "S.R Setu"];

const personA = names[0]; // Jannatin Naim

names[1] = "Saidur Rahman Setu";

console.log(names); // ["Jannatin Naim", "Saidur Rahman Setu"]
```

###### `const` Declared Arrays

NOTE: When arrays are declared with the `const` keyword it seems reasonable to think that the array items cannot be
modified however, that's not the case.

The `const` keyword fundamentally means whatever value an identifier is referring to cannot be changed. As we discussed
previously, for primitive types, the identifier directly refers to the value stored in it but, that's not the case for
arrays. Arrays are stored in the heap and only the pointer to the location in heap is stored in the `const` array
declaration. So, unless you try to change that reference in the identifier, you're free to modify the array however you
see fit.

```javascript
const names = [];

names = ["Jannatin Naim"]; // ERROR: Assigned to constant variable
```

- [JavaScript const (w3schools.com)](https://www.w3schools.com/js/js_array_const.asp)

###### Dynamic Array Sizes

JavaScript's arrays are dynamic in nature, meaning we don't need to assign a specific size to them during
initialization.
Their size will grow or shrink during runtime and will be handled by the engine itself.

###### Invalid Indices & Empty Values

If we try to insert values into an array while leaving gaps in the indices, they will be marked as *empty items* when we
try to access them.

```javascript
const nums = [1, 2];
nums[4] = 5;

console.log(nums); // [1, 2, <2 empty items>, 4]
```

If we try to access a value that's marked as an *empty item* we'll get `undefined`.

###### `delete` Array Items

We can delete an element at a certain index of an array using the delete keyword. The item deleted will be filled with
an *empty object* and the length of the array will remain unaffected.

```javascript
const nums = [1, 2, 3, 4];

delete nums[0];

console.log(nums); // [<1 empty item>, 2, 3, 4]
```

###### Array Equality

Equality of arrays cannot be checked in the same way we check equality for primitive values. When arrays are created,
their identifier only stores a reference to that array in memory, not the value. So, when comparing two array
identifiers, only their references are matched, not the value those references contain.

```javascript
const a = [1, 2, 3];
const b = [1, 2, 3];

console.log(a === b); // false
```

To check for *deep equality* of arrays, you need to manually go through every element and check for equality based on
that. There are algorithms that will help you efficiently compare two different arrays but, you cannot do it using just
the `==` or `===` operators.

When a primitive value is assigned to a variable, the value itself is stored in that identifier. However, in case of
arrays, the value is not stored into the value but, the reference is. If we compare two identifiers which contain the
reference to the same array, it will pass the equal check.

```javascript
const original = [];
let a = original;
let b = original;

console.log(a === b); // true
```

###### JavaScript Array Methods

JavaScript's arrays have built in *methods* that we can access on an array identifier or constant. Some of these methods
mutate the original array while others do not.

Built-in array methods such as `map`, `filter`, `reduce`, `every`, `some` and `sort` are very powerful. Learn more about
their uses over here.

- [JavaScript Array Methods (w3schools.com)](https://www.w3schools.com/js/js_array_methods.asp)

###### `split` String Method

We can create arrays from strings through the `split` method where a string is *split* into array elements based on a
delimiter. This is possible because `string`s are an array like structure.

```javascript
const nums = [1, 2, 3];
const numsString = "1, 2, 3";

const numsFromString = numsString.split(", ");
console.log(numsFromString); // [1, 2, 3]
```

**NOTE**: The `split` method will not modify the existing string. Instead, it will return a *newly created* array which
can be assigned to a variable or used in an expression.

###### `pop` Array Method

The `pop` array method will delete the last element of an array and return the value which can be assigned to a variable
or used in an expression.

```javascript
const nums = [1, 2, 3, 4];
const lastNum = nums.pop();

console.log(nums, lastNum); // [1, 2, 3], 4
```

###### `push` Array Method

The `push` array method will add a new element to the end of the array.

```javascript
const nums = [1, 2, 3];
nums.push(4);

console.log(nums); // [1, 2, 3, 4]
```

###### `shift` Array Method

The `shift` method will remove the first element of the array and return the value.

```javascript
const nums = [1, 2, 3, 4];
const firstNum = nums.shift();

console.log(nums, firstNum); // [2, 3, 4], 1
```

###### `unshift` Array Method

The `unshift` method will add a new element to the start of the array.

```javascript
const nums = [2, 3, 4];
nums.unshift(1);

console.log(nums); // [1, 2, 3, 4]
```

###### Dynamic Index Access

**TIP**: The last element of an array can be accessed with the index that is one less than the array length. That is
because indices are counted from `0`.

```javascript
const nums = [1, 2, 3, 4];
console.log(nums[nums.length - 1]); // 4
```

**TIP**: An item can be added to the end of the array by using its length as the new index. However, the `push` method
is a better approach for this operation.

```javascript
const nums = [1, 2, 3];
nums[nums.length] = 4;

console.log(nums); // [1, 2, 3, 4]
```

###### Hoisting

JavaScript's values are *hoisted* to the top of the function scope. `const` and `let` variables are not hoisted
but `function` declarations and variables created with `var` are hoisted to the top.

- [JavaScript Hoisting (w3schools.com)](https://www.w3schools.com/js/js_hoisting.asp)

###### Nested Arrays

Since JavaScript arrays are dynamic, it can hold values of multiple data types in the same array. That means, we can
store arrays within arrays as well.

```javascript
const phones = [
    ["Samsung", "S24", 110000],
    ["iPhone", "15ProMax", 130000],
    ["Nokia", "2700c", Infinity]
]

const samsungPhone = phones[0];
console.log(samsungPhone.model); // S24
console.log(phones[0][1]); // S24
```

**NOTE**: `Infinity` is a special numeric value in JavaScript to represent all softs of infinities.
