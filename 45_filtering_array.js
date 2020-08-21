// Filtering an array:  filter method gives an array.


const numbers = [1, -1, 2, 3];

// Example 01: Filtering only the positive values: using filter() method.

// numbers.filter means that filter method is applied to the numbers array.
// filter method takes a callback function. This call back function takes a value (element of an array).
// This call back function further iterates to the each element of an array.
// While iterating, it checks the if value is >= 0. if yes, it stores in a separate array.
// At the end filter method gives an array, where filtered values are stored. 

const filtered = numbers.filter((value) => {
    return value >= 0;
});
console.log(filtered);


// Alernatively, we can write a single code also.

const filtered1 = numbers.filter(v => v >= 0);
console.log(filtered1);