# DSA Live Class - 14 - Linear Search

### Arrays

JavaScript arrays are a sequential store of values stored under a single
identifier.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7];
```

### Linear Searching

A linear searching algorithm is one that compares each value for a match by
iterating sequentially through a list of values. In case of an array, a linear
search algorithm will start by comparing the first element of the array and will
keep checking the next element until a match is found or the rightmost value of
the array has been checked.

```javascript
const numbers = [2, 4, 8, 10, 12];

const target = 10;

function linearSearch(list, target) {
    for (let i = 0; i < list.length; ++i) {
        if (list[i] == target) {
            // terminate search on first instance of target being found
            return i;
        }
    }

    return -1;
}

const targetIndex = linearSearch(numbers, target);

console.log(targetIndex);
```

- [Linear Search (With Code) (programiz.com)](https://www.programiz.com/dsa/linear-search)
