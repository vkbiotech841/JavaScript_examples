// Chaining method:
// Chaining method basically uses output of one method as input to another method.

const numbers = [1, -1, 2, 3];

const items = numbers
    .filter(n => n >= 0)
    .map(n => ({ value: n }))
    .filter(obj => obj.value > 1)
    .map(obj => obj.value);

console.log("final item", items);


// Solution at each step:

 // [1,2,3]
 // [{value:1}, {value:2}, {value:3}]
 // [{value:2}, {value:3}]
//  [2,3]