// Mapping an array: map method gives an array.

// Mapping means each element of an array can be mapped to something else.
// 

const numbers = [1, -1, 2, 3];

const filtered = numbers.filter((value) => {
    return value >= 0;
});
console.log("filtered method", filtered);


// Example 01: using map () method.

// map () method takes a callback function.

// Here, we are mapping filtered positive value or numbers to between <li></li> tag.
const items = filtered.map((value) => {
    return '<li>' + value + '</li>';
});
console.log("mapped method", items);
// Result: returns an array containing mapped elements.

// We are using join () method to join each element of mapped items with empty space and also adding <ul></ul>. 
const html = '<ul>' + items.join('') + '</ul>';
console.log("html", html);
// Result: returns a string.


// Example 02: Mapping to an object.

// Here, we are mapping value to an object.
const itemObject = filtered.map((value) => {
    const object = {
        number: value
    };
    return object;
});
console.log("map method", itemObject);