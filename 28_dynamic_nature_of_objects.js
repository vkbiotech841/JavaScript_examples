// Objects are dynamic in nature.
// This means that property of an object can be added or deleted from the object.

// A circle object.
const circle = {
    radius: 1
};

// Adding new property (key:value). Property should be separated by comma.
// To refer the property of an object, we will use dot notation.

// Here color and draw (function) are two new properties being added to the circle object.
circle.color = 'yellow';
circle.draw = function () { };

console.log("updated object", circle);

// Deleting exiting property (color) of a object.
delete circle.color;

//logging circle object. This circle object has now only two properties radius and draw function.
console.log("updated object after removing color", circle);