///////////////// SORTING AND REVERSING AN ARRAY ///////////////////

//////////// Primitive type ////////////////

// Sorting an array: using sort() method
const numbers = [2, 3, 1]; // unsorted array.

// Example 01: using sort () method
numbers.sort();
console.log("sort an array", numbers);

// Example 02:
// reversing an array: using reverse() method
numbers.reverse();
console.log("reverse an array", numbers);



///////////// Reference type ///////////////

const courses = [
    { id: 1, name: 'Node.js' },
    { id: 2, name: 'JavaScript' }
];

// sorting a reference type array:

// simple sort method (that does not take any parameter) only works on primitive types not on reference type.
courses.sort();
console.log("sorting with reference type", courses);


// Example 03: Node.js and JavaScript first letter is capital.
// sort method (that takes two parameters):
courses.sort((a, b) => {       // here, a and b are imaginery parameters to be compared.
    // logic
    // a < b => -1
    // a > b => 1
    // a === b => 0
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log("sorting with reference type 01", courses);
// Result: Javascript comes first.


// Note: In first case, we have written first letter of Node.js and JavaScript in capital letters.
// If we change any of them to lowwer case, then their sort order will be different.

// Example 04: Node.js first letter is capital and javaScript first letter is smaller .

const courses1 = [
    { id: 3, name: 'Node.js' },
    { id: 3, name: 'javaScript' }
];

courses1.sort((a, b) => {
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
});
console.log("sorting with reference type 02", courses1);
// Result: Node.js comes first.

// Why this is happening ???

// ANS: Go to the link: Numeric representatin of each character.
// https://www.cs.cmu.edu/~pattis/15-1XX/common/handouts/ascii.html
// 


// Example 05: To overcome the case sensitivity problem
// first each name to either lower case or uppercase.

courses.sort((a, b) => {
    const nameA = a.name.toLowerCase();
    const nameB = b.name.toLowerCase();

    if (nameA < nameB) return -1;
    if (nameA > nameB) return 1;
    return 0;
});
console.log("sorting with reference type 03", courses);
// Result: Now Javascript comes before Node.js