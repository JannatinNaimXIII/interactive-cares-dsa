# DSA Live Class - 15 - Binary Search

Binary Search uses the Divide and Conquer strategy to reduce its searchable
data-range in every step and as such it searches through fewer and fewer values
as it takes more and more steps.

### Algorithm

- Start with two pointers that point to the first and last element of a list
  respectively.
- Calculate a middle pointer based on the start and end pointers by taking their
  average value and rounding it to an integer since list indices are always
  whole numbers.
- Compare the value at the middle pointer's position from the list to the target
  value.
    - In case the target value is found, the middle pointer's position is the
      index of the target value in the list.
    - In case the target value is to be found on the *right* side of the list,
      bring the *start* pointer to the *right* side of the middle pointer.
    - In case the target value is to be found on the *left* side of the list,
      bring the *end* pointer to the *left* side of the middle pointer.
- Continue with step 2 for as long as a valid list slice can be made i.e. the
  start pointer does not point to a position larger than that of the end
  pointer.
- Once the start and end pointers pass each other, it is to be concluded that
  the list does not contain the target value.

- [Binary Search (With Code) (programiz.com)](https://www.programiz.com/dsa/binary-search)

### Code

```javascript
const numbers = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
const target = 24;

function binarySearch(list, target) {
    let left = 0;
    let right = list.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (target === list[mid]) {
            return mid;
        } else if (target > mid) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}

const targetIndex = binarySearch(numbers, target);

console.log(targetIndex);
```
