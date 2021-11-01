// Moving an element of an array.
// it takes 3 parameters: an array, index of the element to be moved, offset:number of position to be moved.
// if elements is trying to move outside of an array. Display an error on the console.

// Logic:
// Get the final position by adding current index position with offset.
// throwing an error if wrong offset is given.
// remove one element to be moved from the given index. Splice method gives an array that contains the removed element. so, using [0], we taking the removed element from index 0.
// adding removed element to the position it has to move. Hence, now (final index where element has to move) = index(previous position) + offset.

const numbers = [1, 2, 3, 4];

function move(array, index, offset) {

    const position = index + offset;

    if (position >= array.length || position < 0) {
        console.error('Invalid offset.');
        return;
    }

    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(index + offset, 0, element);
    return output;
};

// moving an element at index 0 to offset (position) of 1.
const result = move(numbers, 0, 1);
console.log("move 01", result);

const result1 = move(numbers, 0, 2);
console.log("move 02", result1);

const result2 = move(numbers, 2, -1);
console.log("move 03", result2);

const result3 = move(numbers, 0, 4);
console.log("move 04", result3);

const result4 = move(numbers, 0, -10);
console.log("move 05", result4);
