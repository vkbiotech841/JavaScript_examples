// Define a function, which search value of an array1 to another array2. but except the value of array1.


const numbers = [1, 2, 3, 4];

// Method 01:
function except(array, excluded) {
    const output = [];
    for (let element of array) {
        if (!excluded.includes(element)) {
            console.log("!excluded.includes(element)", !excluded.includes(element));
            output.push(element);
        }
    }
    return output;
};

// We can check for multiple elements.
const output = except(numbers, [1, 2]);
console.log("get element except:", output);


