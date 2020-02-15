// Removing an element from an array.

// Primitive type:

const numbers = [1, 2, 3, 4, 5, 6, 7];

// Removing an element from the End: pop() method
const last = numbers.pop();
console.log(numbers);
console.log(last);

// Removing an element from the Beginning: shift() method
const first = numbers.shift();
console.log(numbers);
console.log(first);

// Removing an element from the Middle: splice() method
const middle = numbers.splice(2, 1);
console.log(numbers);
console.log(middle);

// Here, first parameter is: index of the number to be removed.
// and , second parameter is how many element do you want to remove. 

// removing two elements from the middle at index position 1
const middle1 = numbers.splice(1, 2);
console.log(numbers);
console.log(middle1);
