// Defining function.
// In javaScript functions are objects.


/////////// Method 01: Function declaration: ///////////////////
// by convension we don't terminate the function with semicolon (;).
function walk() {
    console.log('walk')
}

//////////////// Method 02: Function expression in javaScript ////////////////////

// Anonymous function: Because this function does not have a name.
// first we declare a variable then set it to a function then terminate the statement with semicolon(;).
let run = function () {
    console.log('run');
};

// calling the function.
run();
// declarting another variable move and set it to run. Now, move will point (reference) to the same function.                    
let move = run;
// Now, we can call this anonymous function using move() 
move();

//////////////////// Named function expression: Because thid function has name. //////////////////

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

