// Factory function produces objects: A method to create an object. 
// Notation system: Write the name of the function as CAMEL notation. ex: oneTwoThreeFour


function createCircle(radius) {
    return {                      // In factory function return word is used but it is not used in constructor function.
        radius: radius,
        draw() {
            console.log('draw');
        }
    };
};

// Calling function and storing in a variable.
// Here, factory function has created a circle1 object. 
const circle1 = createCircle(2);
console.log(circle1);

// Testing reusablity of the code.
// Here, factory function has created a circle2 object.
const circle2 = createCircle(4);
console.log(circle2);