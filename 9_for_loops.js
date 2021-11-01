//For loop or for loop function:
// symbol:   for (){};

// Example 01:

// Poor way of writing "Hello World" five time

console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');

// Better way "Hello World" five times: Using for loop

for (let i = 0;i < 5;i++) {
    console.log(i);
    console.log('Hello Vikram');
};

// i = index
// i = 0; is called as Initial expression
// i < 5; is called as condition
// i++ is called as Increament expression


// Example 02:
// Display odd number between 1 to 5: Use for and if loop

// Method 01:
for (let i = 0;i <= 5;i++) {
    if (i % 2 !== 0) {
        console.log("odd number way 01:", i);
    }
};

// Here, if block is a statement. 

// Method 02:
// Another way: Here, we our starting point is 5 and end point 1. Reverse order

for (let i = 5;i >= 1;i--) {
    if (i % 2 !== 0) {
        console.log("odd number way 02:", i);
    }
};