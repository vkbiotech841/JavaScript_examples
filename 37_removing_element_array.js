// Removing an element from an array.

// Primitive type:

const numbers = [1, 2, 3, 4, 5, 6, 7];

// Removing an element from the End: pop() method removes only one element from the last.
const last = numbers.pop();
console.log(numbers);
console.log("remove element from the last", last);

// Removing an element from the Beginning: shift() method
const first = numbers.shift();
console.log(numbers);
console.log("remove element from the begining", first);

// Removing an element from the Middle: splice() method
// Here, first parameter is: index of the number to be removed.
// and , second parameter is how many element do you want to remove. 
const middle = numbers.splice(2, 1);
console.log(numbers);
console.log("remove element from anywhere", middle);

// removing two elements from the middle at index position 1
const middle1 = numbers.splice(1, 2);
console.log(numbers);
console.log("remove element from anywhere", middle1);
