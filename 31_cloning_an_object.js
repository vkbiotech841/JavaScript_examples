// Here, circle is our original object. That we want to clone or store into the another object.
const circle = {
    radius: 1,
    draw() {
        console.log('draw');
    }

};

// Method 01: Using for and in loop
const another = {};   //consider another is an empty object.

for (let key in circle)  // Now using for in loop enumerating key in circle object.
    another[key] = circle[key];  // Here, value of the circle key is being stored in the another object.
console.log(another); // logging another object in the console.



//Method 02: Using Object.assign in-build method

const anotherTwo = Object.assign({}, circle);
console.log(anotherTwo);

// Method 03: Using spread operator (in-built).  Widely used method.
// Three dots(...) are called as spread operator. 

const anotherThree = { ...circle };
console.log(anotherThree);

