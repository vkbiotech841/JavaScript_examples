
///////////  For in loop for object //////////////////////////////
//  Example 01 :
const person = {        // person is an Object. It has name and age property
    name: 'Vikram',     // Property is a  "key":'Value' pair
    age: 30             // key are name and age. Value are Vikram and 30
};

// Excessing property of an object.
for (let key in person) {
    console.log("key:", key, "value", person[key]);
};

// To excess property of an object we can use:

// 1. Dot notation: We already know, what property to excess.
person.name
console.log("dot notation", person.name, person.age);

// 2. Bracket notation: We use when we do not know type of property we are going to excess
person['name']
console.log("using big bracket", person['name'], person['age']);


/////////// for in loop for array ////////////////

// Example 02 : 
const colors = ['red', 'green', 'blue'];

for (let index in colors) {
    console.log("index", index, "value", colors[index]);
};

