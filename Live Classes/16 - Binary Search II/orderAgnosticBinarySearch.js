const numbers = [3, 6, 9, 12, 15, 18, 21, 24, 27, 30];
const target = 24;

function binarySearch(list, target) {
    const order = getSortedOrder(list);

    if (order === 0) {
        return 0;
    }

    let left = 0;
    let right = list.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (target === list[mid]) {
            return mid;
        }

        // if (target > mid) {
        //     if (order > 0) {
        //         left = mid + 1;
        //     } else {
        //         right = mid - 1;
        //     }
        // } else {
        //     if (order > 0) {
        //         right = mid - 1;
        //     } else {
        //         left = mid + 1;
        //     }
        // }

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

// function getSortedOrder(list) {
//     if (!list.length || list.length === 1) return 0;
//
//     let order = 0;
//     let start = list[0]
//     let end = list[1];
//
//     for (let i = 2; start === end && i < list.length; ++i) {
//         end = list[i];
//     }
//
//     const difference = start - end;
//
//     if (difference > 0) {
//         return 1;
//     } else if (difference < 0) {
//         return -1;
//     }
//
//     return 0;
// }

const targetIndex = binarySearch(numbers, target);

console.log(targetIndex);
