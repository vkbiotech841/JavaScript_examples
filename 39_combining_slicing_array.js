// Combining and slicing arrays: Primitive type


const first = [1, 2, 3];
const second = [4, 5, 6];

// Combining arrays: concat() method.

const combined = first.concat(second);
console.log("concat method", combined);

// slicing an array: using slice() method

// Example 01: start and end index are defined.
const slice = combined.slice(2, 4);    // starting index=2 and end index = 4.
console.log(combined);               // slicing does not affect the original array. it just slice a part and stores it into a variable.
console.log("slice method", slice);

// Example 02: Only start index is defined. Hence, it slice, starting from start index till end of the array.
const slice1 = combined.slice(2);
console.log("slice method", slice1);

// Example 03: When start and end index is not defined. It slice the complete array. or we can say it copies the entire array.
const slice2 = combined.slice();
console.log("slice method", slice2);