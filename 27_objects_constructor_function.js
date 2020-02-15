// Construct function job: Construct an object.

// Notation system: Write the name of the function as PASCAL notation. ex: OneTwoThreeFour
// While creating an object using Factory function we used return function to initialized an object. Where as
// In Constructor function we use "this" keyword to refere an object that executing the piece of code. 
// Consider intially "this" keyword as an empty object. if you add dot just next this, the
// Using keyword:      this.      we can access following things:
// we can read a property of an object.
// we can set a property of an object. 
// keyword:        new            we can access following thins:
// first it creates an empty object {};
// Second it sets the property of an object. it uses keyword  "this."   to do so.
// Third, it used keyword to  "new" to set a new object (makes instance of an object). 




function Circle(radius) {            // Pascal notation for writing name of constructor function.
    this.radius = radius;            // setting radius property of an object to radius. 
    this.draw = function () {        // setting draw property of an object to function or method. 
        console.log('draw');
    }
}

const circle = new Circle(1);       // setting new object with its property (this.). Ex: radius and draw.

// Here, using contructor function we have created a object: new cicle and stored in circle variable.