// To check if two arrays have the same elements
// (1) Verify that the arrays have the same length.
// (2) Call the every() method on the first array and verify that the element on every iteration is equal to the element at the same index from the other array.
// (3) The every method only returns true if the condition is met for every array element.


// Example 01:

const arr1 = ['a', 'b', 'c'];
const arr2 = ['a', 'b', 'c'];

const arr3 = [
    { name: 'vikram' },
    { value: 'kumar' },
];
const arr4 = [
    { name: 'vikram' },
    { value: 'kumar' },
];

function areEqual(array1, array2) {
    if (array1.length === array2.length) {
        return array1.every((element, index) => {
            if (element === array2[index]) {
                return true;
            }

            return false;
        });
    }

    return false;
}

console.log(areEqual(arr1, arr2)); // 👉️ true


// Note: This only works with primitive type.

console.log(areEqual(arr3, arr4)); // 👉️ false