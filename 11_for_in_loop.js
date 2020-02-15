//  Example 01 : For in loop in object
const person = {        // person is an Object. It has name and age property
    name: 'Vikram',     // Property is a  "key":'Value' pair
    age: 30             // key are name and age. Value are Vikram and 30
};
// Excessing property of an object.
for (let key in person) {
    console.log(key, person[key]);
};

// To excess property of an object we can use:

// Dot notation: We already know, what property to excess.
person.name
// Bracket notation: We use when we do not know, what property we are going to excess
person['name']



// Example 02 : for in loop in array
const colors = ['red', 'green', 'blue'];

for (let index in colors) {
    console.log(index, colors[index]);
};

