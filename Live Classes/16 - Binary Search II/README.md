# DSA Live Class - 15 - Binary Search

### Order Agnostic Binary Search

```javascript
const numbers = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
const target = 24;

function binarySearch(list, target) {
    const order = getSortedOrder(list);

    if (order === 0) {
        return -1;
    }

    let left = 0;
    let right = list.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (target === list[mid]) {
            return mid;
        }

        if (order > 0) {
            if (target > mid) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (target > mid) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }

    return -1;
}

function getSortedOrder(list) {
    if (!list.length || list.length === 1) return 0;

    return Math.sign(list.at(-1) - list.at(0));
}

const targetIndex = binarySearch(numbers, target);

console.log(targetIndex);
```

### Solutions Requiring Binary Search

- Dataset contains a sorted array.
- IndexOf and LastIndexOf methods.

### IndexOf and LastIndexOf Methods

#### Algorithm for IndexOf

- Use a Binary Search to determine a single occurrence of the given target
  value.
- Run a new Binary Search with its limit set to a pointer which is on the left
  side of the current occurrence of the target value.
- As long as a target value is being found on the left half of the current
  occurrence, keep running the Binary Search.
- Once the target value is not found on the left half, the previously found
  occurrence is the first occurrence of the target value in the array.

```javascript
const numbers = [2, 4, 6, 6, 6, 6, 8, 10];
const target = 6;

function indexOf(list, target) {
    const occurrence = binarySearch(list, target);

    if (occurrence === -1) {
        return -1;
    }

    let lastLeftOccurrence = occurrence;
    while (true) {
        const leftOccurrence = binarySearch(list, target, 0, lastLeftOccurrence - 1);

        if (leftOccurrence !== -1) {
            lastLeftOccurrence = leftOccurrence;
        } else {
            break;
        }
    }

    return lastLeftOccurrence;
}

function lastIndexOf(list, target) {
    const occurrence = binarySearch(list, target);

    if (occurrence === -1) {
        return -1;
    }

    let lastRightOccurrence = occurrence;
    while (true) {
        const rightOccurrence = binarySearch(list, target, lastRightOccurrence + 1, list.length - 1);

        if (rightOccurrence !== -1) {
            lastRightOccurrence = rightOccurrence;
        } else {
            break;
        }
    }

    return lastRightOccurrence;
}

function binarySearch(list, target, start, end) {
    let order = 0;
    if (list.length && list.length > 1) {
        order = Math.sign(list.at(-1) - list.at(0));
    } else {
        return -1;
    }

    let left = start || 0;
    let right = end || list.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (target === list[mid]) {
            return mid;
        }

        if (order > 0) {
            if (target > mid) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            if (target > mid) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }

    return -1;
}

console.log(indexOf(numbers, 6));
console.log(lastIndexOf(numbers, 6));
```
