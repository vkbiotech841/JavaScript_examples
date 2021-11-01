// Object can hold: number, string, another object, array
// Purpose of an object: To group the related variable and use this object in any function. 
// Object are collection of key:value pair.
// Each key:value are separated by comma. 
// symbol of an object or object litrals is {}


const circle = {    // here, circle is an object with {} object literal symbol. it is holding:
    radius: 1,     // variable: radius
    location: {     // Another object: location that contains x and y variable
        x: 1,
        y: 1,
    },
    isVisible: true,             // boolean:true
    draw: function () {          // function: draw
        console.log('draw');
    }
};


// Dot notation method for calling a function when it inside an object.
// When a function is inside a function it is called as Method inside of function. And function word need to be removed.
// Here, draw function was part of circle object. Hence, draw function can be used using dot notation. 


// Method call:
circle.draw();  // draw is a method here

// Function call:
// draw();