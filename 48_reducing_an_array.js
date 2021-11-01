// Reducing an array.

// Reducing means we can reduce the element of an array into a single value.

const numbers = [1, -1, 2, 3];

// simple sum:
let sum = 0;
for (let number of numbers) {
    sum = sum + number;
};
console.log("calculate sum", sum);


// Example 01: reduce() method.
// reduce () method takes two arguments.
// (1) a call back function: in this case:  (accumulator, currentValue)=>{}
// (2) initial value for accumulator: In this case it is 0.
//currentValue: it is a value of each element in a array.
// accumulator: it accumulats or sum the currentValue each time when call back function is called.

const number1 = [1, 2, 3, 4, 5];
const sum1 = number1.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log("reduce method", sum1);