// Local and Global scope


// Global scope: 

// Since, this message is not inside any {} code block. Hence, this constant has global scope.
const message = 'hi';
console.log(message);

// Even we can access global variable inside a function or method.
// for this we need to call the function as well. Otherwide, logic inside the function will not work.

const color = 'red';   // here, color is outside the function. but still we can use it. because its scope is global.
function start() {
    console.log(color);
}

start();

// Local scope:

const music = 'flute';
function run() {
    const joy = 'Happy';
    const speed = 'fast';      // here, const speed is inside the function. Hence, its scope is only inside the function.
    console.log(speed);        // call from inside the function.Hence, speed will work.
    console.log(music);        // since, music const is outside of function. Hence, global scope. it works.
}
run();

// console.log(joy);         // since, joy const is inside the function. its scope is only inside the function. call joy from outside of the function will not work.
console.log(music);          // since, music const is outside the function. Hence, it scope is global. it works.

