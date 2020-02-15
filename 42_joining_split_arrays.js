// Joining arrays:
// it is different from combining arrays.
// In combining array we combine two different arrays, wereas in joining array we joing the elements of a single (may be using comma).

const numbers = [1, 2, 3];

// Here, we want to join element of numbers array by a comma.

const joined = numbers.join(',');
console.log(joined);

// Spliting array:

const message = 'This is my first message';
// Here, we want to split message at empty space.
const parts = message.split(' ');
console.log(parts);

// we can also join these parts at (-)

const combined = parts.join('-');
console.log(combined);

// These methods will be very usefully while making url slug.
// urls should not have a white space.
// Example url slug: https://www.geeksforgeeks.org/arrays-in-javascript/
