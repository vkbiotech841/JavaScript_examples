// How we write a function in javaScript: function (){}

// function declaration: performing a task
function greet(name, lastName) {            // this function takes two parameters.
    console.log('Hello ' + name + ' ' + lastName);
}

greet('vikram', 'kumar');        // calling function with arguments.

greet('kriti', 'chanchal');


// calculating a value
function square(number) {
    return number * number;
}

// Here, we are calling function and storing its result to the squareOf.
let squareOf = square(4);
console.log(squareOf);