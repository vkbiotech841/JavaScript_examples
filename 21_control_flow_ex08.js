// Find the multiple of 3 and 5 between 1-10 and add them.
// Multiple of 3 will be 3,6,9
// Multiple of 5 will be 5, 10

function sum(limit) {
    let sum = 0;          // Considering initially sum = 0.
    for (i = 0;i <= limit;i++) {
        if (i % 3 === 0 || i % 5 === 0) {
            sum += i;    // adding i to the sum.
        }
    }
    return sum;           // return should be in for block because we should get the once for loop ends.
};

// Calling the function and logging on the console
console.log(sum(10))