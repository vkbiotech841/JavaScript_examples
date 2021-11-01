// Get Maximum
// Find the largest number in an array.
// if an array is empty, return undefined.

const numbers = [1, 2, 3, 10, 4];


// Method 01:

// Assuming first index of an array is a max.
// Then i starts from index 1
// comparing each index with max, if index value is greater than max.
// storing max index value to the max.
// returning max value.

function getMax(array) {
    if (array.length === 0) {
        return undefined;
    }

    let max = array[0];
    for (let i = 1;i < array.length;i++) {
        if (array[i] > max) {
            max = array[i];
        }

    }
    return max;

};

const max = getMax(numbers);
console.log("max", max);


// Method 02:

function getMax1(array) {
    if (array.length === 0) return undefined;
    return array.reduce((a, b) => (a > b) ? a : b);    // Note: you must return 
};

const max1 = getMax1(numbers);
console.log("max1", max1);