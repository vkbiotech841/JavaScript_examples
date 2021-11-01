// Adding element to an array: Primitive type.



const numbers = [3, 4];

// Arrays are like an object. so we can use dot method to use various method associated with an array.

// Adding element to the end: push method.
numbers.push(5, 6);
console.log("array push method", numbers);

// Adding element to the begining:unshift method.
numbers.unshift(1, 2);
console.log("add element to the beginner of an array", numbers);

// Adding element to the anywhere in an array: splice method
numbers.splice(2, 0, 'a', 'b');
// This method takes three parameters: 
// (1) index of the position to where we want to insert: In this case index position is 2.
// (2) DeletCount: In this case, we do not want to delete anything.
// (3) items to be inserted: In this case, we are inserting 'a'and 'b'.
console.log("add element at anywhere", numbers);

