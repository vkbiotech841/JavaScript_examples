// Value type or premitive type: number,string, boolean, symbol, undefined, null
// Refernce type: Objects,functinos, and array

// How Value and reference type behave differentlly:

// Premitive type example:
let x = 10;  // initially x was 10
let y = x;   // Value of x was copied to y

x = 20;      // Again value of x was changed to 20

// But when we logged the value of x and y. we found x=20 whereas y=10.
console.log("x:", x);
console.log("y:", y);


// Reference type example:

let a = { value: 10 }; // Initially value property of "a" object was set to 10.
let b = a;             // Object "a" was stored into the object b.

a.value = 20;          // Value property of a was changed to 20.


// But when we logged the value of a and b objects, we found a=20 wherease b=20
console.log("a", a);
console.log("b", b);


// Conclusion: Primitives are copied by their value and refernce type are copied by their reference.