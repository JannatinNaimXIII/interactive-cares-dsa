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
