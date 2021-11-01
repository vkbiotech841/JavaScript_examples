// Spread operator(...): three dots
// 


// Example 01: Primitive type
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, ...second];
console.log("primitive type spreed operator", combined);

// Example 02: Reference type
const third = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' },
];

const fourth = [
    { id: 3, name: 'c' },
    { id: 4, name: 'd' },
];

const combined1 = [...third, ...fourth];
console.log("Reference type spreed operator", combined1);

// Example 03: When can also add element in between the spreed operators.

const combined2 = [...first, 'a', 'b', ...second, 'c', 1];
console.log(combined2);
