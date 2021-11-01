// Defining function.
// In javaScript functions are objects.


// Method 01: Function declaration:
function walk() {
    console.log('walk')
}                         // by convension we donot terminate the function with semicolon (;).

// Method 02: Function expression in javaScript

// Anonymous function: Because this function does not have a name.
let run = function () {              // first we declare a variable then set it to a function then terminate the statement with semicolon(;).
    console.log('run');
};

run();                              // calling the function.
let move = run;                     // declarting another variable move and set it to run.Now, move will point (reference) to the same function.
move();                             // Now, we can call this anonymous function using move() 

// Named function expression: Because thid function has name.

let run = function run() {
    console.log('run');
};


// Key difference between function declaration and function expresssion

// Function declaration:
// We can call a function before its declaration.
// Hoisting: Hoisting is a process, where, all functions declarations are moved to the top of a file (before it calls a function) by javaScript engine. it happedns enternally. 
// Hoisting works



// Function expresssion:
// We can not call a function before its declaration.
// No hoisting.

