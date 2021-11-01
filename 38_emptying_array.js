// Emptying an array
const num = [1, 2, 3, 4, 5];
let numbers = [1, 2, 3, 4];
let another = numbers;    // Reference array: Assigning numbers array to another array.


// Method 01: Empting an array by assigning empty array []. if numbers array does not have any reference.

// In this case, numbers array has one reference array (another).

// if array is a variable (let):
numbers = []; // here, array is a variable, not a constant. if array is a constant this method will not work.
console.log(numbers);

// if array is a constant (const). 
// num = [];
// console.log(num); // This will give an error.

// Assigning numbers array to another array.
// In this case, another still stores the numbers array evenafter emptying the numbers array.
// Because, numbers array has different memory allocation than numbers array.
// However, it contains the same element as numbers array. Evenafter emptying the numbers array.
console.log(another);

// Method 02: Making length of the array to 0.
let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = array1;

array1.length = 0;
console.log(array1);
console.log(array2);

// This method empty the array eventhough it has any other reference array.

// Method 03: using splice method: best method
let array3 = [1, 2, 3, 4, 5];
let array4 = array3;

array3.splice(0, array3.length); // starting index is 0 and number of items to be removed = length of the array.
console.log(array3);
console.log(array4);

// Method 04: using pop method.
let array5 = [1, 2, 3, 4, 5, 6];
let array6 = array5;

while (array5.length > 0) {
    array5.pop();
};
console.log(array5);
console.log(array6);