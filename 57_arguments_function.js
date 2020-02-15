// Javascript is a dynamic language: it means that we can declare a variable set to a number and futher we can set to a string.
// Argument:


function sum(a, b) {
    return a + b;
}

console.log(sum(1, 2));  // Two argument supplied. Result: 3. Here, number + number = Number.

console.log(sum(1));     // We can also supply one argument. Result: NaN (Not a Number).Here, number + undefined = NaN

console.log(sum(1));    // No Argument supplied. Result: NaN.

console.log(sum(1, 2, 3, 4, 5));  // Five arguments are supplied.but it will consider only two arguments.Result:3 

// What if we want a multiple arguments in a function (flexibility).
// Every function in javascript has a special object called as Arguments.

function sum1() {          // Here, have not supplied any parameters.
    let total = 0;
    for (let value of arguments)
        total += value;
    return total;
}

console.log(sum1(1, 2, 3, 4, 5, 6));      // multiple arguments can be supplied.

console.log(sum1(1, 2, 3, 4, 5, 6, 7, 8, 9)); 