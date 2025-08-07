

// __Hoisting__ is a concept which enables us to extract values of variables and functions even before defining them.

// Let us understand the concept by the following examples.


// code example 1

var x = 7;

function getName() {
    console.log("Namaste JavaScript");
}

getName();
console.log(x);



// Output:
//  Namaste JavaScript
// 7


// code example 2

getName1();
console.log(y);

var y = 7;

function getName1() {
    console.log("Namaste JavaScript");
}

//  Output:
// Namaste JavaScript
// undefined


// code example 3

getName3();
// console.log(z);

function getName3() {
    console.log("Namaste JavaScript");
}



// Output:
// Namaste JavaScript
// Error: z is not defined



// code example 4

function getName4() {
    console.log("Namaste JavaScript");
}

console.log(getName4)


// Output:

//  f getName(){
//       console.log("Namaste JavaScript);
//   }


// code example 5

getName5();
// console.log(i);
console.log(getName5)

function getName5() {
    console.log("Namaste JavaScript");
}


// Output:
// Namaste JavaScript
// Error: i is not defined
// f getName(){
//       console.log("Namaste JavaScript);
//   }


// code example 6

console.log(getName6);
console.log(getName7);

var getName6 = function () {
    console.log("Namaste JavaScript");
}

var getName7 = () => {
    console.log("Namaste JavaScript");
}



// Output:
// undefined
// undefined


// __REASON OF WEIRDNESS__

// * The answer lies in the Global Exection Context. In the memory phase, the variables will be initialized as *undefined* and functions will get the whole function code in their memory.

// * This is the reason why we are getting these outputs.














