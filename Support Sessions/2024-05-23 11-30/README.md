# Live Support Session - 23 May 2024 - 11:30

###### Multidimensional Array

In JavaScript, multidimensional arrays are traversed usually through nested loops. The _parent loop_ traverses over one
axis while the other _child loop_ traverses on the other axis. As such, the amount of nesting in the array corresponds
to the nesting of loops to traverse that array in a nested loop.

```javascript
const multiDimensionalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
];

for (const row of multiDimensionalArray) {
    let output = "";

    for (const col of row) {
        output += col;
    }

    console.log(output);
}
```

The same code can be translated in `C` as follows.

```c
#include <stdio.h>

int main()
{
    int i, j;

    int a[3][3];

    a[0][0] = 1;
    a[0][1] = 2;
    a[0][2] = 3;
    a[1][0] = 4;
    a[1][1] = 5;
    a[1][2] = 6;
    a[2][0] = 7;
    a[2][1] = 8;
    a[2][2] = 9;

    for (i = 0; i < 3; i++)
    {
        for (j = 0; j < 3; j++)
        {
            printf("%d", a[i][j]);
        }
        printf("\n");
    }

    return 0;
}
```

###### Functions & Methods

Functions are a block of code that can be executed by referring to it by its name. A method is a function that is given
the context of an object to refer to. Methods are usually part of a `class` and the `object` that it can refer to is an
instance of that class.

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }

    call() {
        console.log("Calling ", this.name);
    }
}

function callPerson(name) {
    console.log("Calling ", name);
}

const person = new Person("Jannatin Naim");
person.call(); // Calling Jannatin Naim

callPerson("Jannatin Naim"); // Calling Jannatin Naim
```
