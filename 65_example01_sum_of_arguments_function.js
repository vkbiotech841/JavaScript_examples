// Sum of arguments:

// To check array is actuall an array: Array.isArray();

function sum(...items) {            // use of rest operator. that return an array.
    return items.reduce((a, b) => a + b);
}

console.log(sum(1, 2, 3, 4));

// What if we have an array.

console.log(sum([1, 2, 3, 4]));      // this simply return an array not a number.

// solution:

function sum1(...items) {
    if (items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];

    return items.reduce((a, b) => a + b);
}

console.log(sum1([1, 2, 3, 4]));