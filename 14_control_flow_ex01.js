// write the functions that takes two numbers and returs the maximum of two numbers.

// Method 01:
function max(a, b) {
    if (a > b) {
        return a;
    } else {
        return b;
    }
}

// Calling function and storing result in a variable

let result = max(2, 3);
console.log(result);

// Method 02:

function maximum(a, b) {
    return (a > b) ? a : b;  // in this case, we have removed the "if" word and used ternary operator
}

let resultMax = maximum(3, 5);
console.log(resultMax);