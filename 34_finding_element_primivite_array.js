// Finding elements in an array:

// Primitive type element:

const numbers = [1, 2, 3, 4];

// Method 01: Using indexOf method.
console.log(numbers.indexOf('a'));  // Since, 'a' is not present in this array. Hence, it return index -1.
console.log(numbers.indexOf('1'));  // since, we are providing '1'as string. that is not present in this array. Hence, returns index as -1.
console.log(numbers.indexOf(1));   // Since, number 1 is present in this array. It returns index of 1 as 0.

// Method 02: Using lastIndexOf method.
const number1 = [1, 2, 3, 1, 4];
console.log(number1.lastIndexOf(1)); // In this case, we looking for last index of 1. so it returns index of 1 as 3.

// Method 03: To check that if a item is present in an array: indexOf and includes methods.
console.log(numbers.indexOf(1) !== -1); // this return a boolean as true. that means that 1 is present in this array.
console.log(numbers.includes(2)); // includes does the same job as mentioned above.

// Method 04: finding index of an element from a specific index position.
console.log(number1.indexOf(1, 2));
// indexOf method takes two parameters.
// (1) item to be searched and.
// (2) index from where search will begin.
