// Iterating an array:

const numbers = [1, 2, 3];

// Method 01:  
// Example 01: using "for of" loop
for (let number of numbers) {
    console.log(number);
};

// Method 02: using forEach () method

// Example 02:forEach method takes a call function as an argument.
numbers.forEach((number) => {
    console.log(number);
});

// Example 03: forEach method takes a call function and two parameters.
numbers.forEach((number, index) => {
    console.log(index, number);
});