const fs = require("fs");

// Read the file and convert its content into a string.
const file = fs.readFileSync("./input.txt").toString();

// Each line is separated through the newline (\n) character.
const stringNums = file.split("\n");

// Contents of each line is a number which can be parsed into JavaScript's native Number type.
const numA = parseInt(stringNums[0]);
const numB = parseInt(stringNums[1]);

console.log(numA + numB);
