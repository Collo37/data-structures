// creating new arrays from a specified range
let arr = Array.from({ length: 100 }, (_, i) => i + 1);

// creating an array from a string
let stringArr = Array.from("Collins");

// Fill array method: Returns an array of similar characters
let otherArr = new Array(20).fill(1);

const numbers = Array.from({ length: 10 }, (_, i) => i + 1);

// multi-level arrays
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

//console.log(matrix[0][1], matrix[1][1], matrix[2][1])

// console.log(Array.from(numbers.values()));

// reducing arrays
console.log(
  numbers.reduce((number, n) => {
    return number + n;
  }, 0)
);

let animals = [
  "Cat",
  "Sheep",
  "Cow",
  "Goat",
  "Camel",
  "Cat",
  "Sheep",
  "Sheep",
  "Giraffe",
  "Lion",
  "Camel",
];

let animalsCount = animals.reduce((acc, animal) => {
  if (acc[animal]) {
    acc[animal] += 1;
  } else {
    acc[animal] = 1;
  }
  return acc;
}, {});

// console.log(animalsCount);

let flattenedArr = matrix.reduce((acc, matrixVal) => {
  matrixVal.forEach((value) => acc.push(value));
  return acc;
}, []);

// console.log(flattenedArr);
