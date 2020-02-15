//For loop:
// symbol:   for (){};

// Poor way of writing "Hello World" five time

console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');
console.log('Hello World');

// Better way "Hello World" five times: Using for loop

for (let i = 0; i < 5; i++) {
    console.log(i);
    console.log('Hello Vikram');
};

// i = index
// i = 0; is called as Initial expression
// i < 5; is called as condition
// i++ is called as Increament expression


// Display odd number between 1 to 5: Use for and if loop

for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0)
        console.log(i);
};

// Here, if block is a statement. 

// Another way: Here, we our starting point is 5 and end point 1. Reverse order

for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0)
        console.log(i);
};