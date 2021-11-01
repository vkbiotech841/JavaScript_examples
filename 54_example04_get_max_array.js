// Get Maximum
// Find the largest number in an array.
// if an array is empty, return undefined.

const numbers = [1, 2, 3, 4];


// Method 01:

function getMax(array) {
    if (array.length === 0)
        return undefined;

    let max = array[0];                       // Assuming first index of an array is a max.
    for (let i = 1; i < array.length; i++)    // Then i starts from index 1
        if (array[i] > max)                   // comparing each index with max, if index value is greater than max.
            max = array[i];                   // storing max index value to the max.
    return max;                               // returning max value.
};

const max = getMax(numbers);
console.log(max);


// Method 02:

function getMax1(array) {
    if (array.length === 0) return undefined;
    return array.reduce((a, b) => (a > b) ? a : b);    // Note: you must return 
};

const max1 = getMax1(numbers);
console.log(max1);