// How we write a function in javaScript: function nameOFtheFuction(){}

// Example 01:
// function declaration: Here, we write the logic of the function.
function greet(name, lastName) {            // this function takes two parameters.
    console.log('Hello ' + name + ' ' + lastName);
}

// calling function with arguments.
greet('vikram', 'kumar');

greet('kriti', 'chanchal');


// Example 02:
// calculating a value
function square(number) {
    return number * number;
}

// Here, we are calling function and storing its result to the squareOf.
let squareOf = square(4);
console.log(squareOf);