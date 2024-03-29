// Here, circle is our original object. That we want to clone or store into the another object.
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }
};

// Method 01: Using for and in loop

//consider another is an empty object.
// Now using for in loop enumerating key in circle object.
// Here, value of the circle key is being stored in the another object.
const another = {};

for (let key in circle) {
    another[key] = circle[key];
}
console.log("clonned object 01", another);


//Method 02: Using Object.assign in-build method
const anotherTwo = Object.assign({}, circle);
console.log("clonned object 02", anotherTwo);


// Method 03: Using spread operator (in-built).  Widely used method.
// Three dots(...) are called as spread operator. 
const anotherThree = { ...circle };
console.log("clonned object 03", anotherThree);

