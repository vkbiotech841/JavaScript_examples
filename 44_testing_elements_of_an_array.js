// Testing elements of an array:


// Example 01: Testing if all elements of this array are positive using every() method.
const numbers = [1, -1, 2, 3];

// Example 01: Seaching for all positive: every() method.
// every() method takes a call back function and three arguments. but here, we gave only one.
const allPositive = numbers.every((value) => {
    return value >= 0;
});
console.log("all positive element", allPositive);

// Example02:Seaching for all least one positive: some() method.
const atLeastOnePositive = numbers.some((value) => {
    return value >= 0;
});
console.log("at least one positive element", atLeastOnePositive);