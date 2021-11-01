// Built in objects in Javascript: Math object, string object, scape notations, template literals, Date object.


// Math object: For mathematics operation in javascript

let x = Math.random(); //random number each time.
console.log("math.random", x);

let y = Math.round(1.8); // Rounding off a number
console.log("math.round", y);

let z = Math.max(1, 2, 3, 4, 5, 6);  // Calculates largest number
console.log("math.maximum", z);

let a = Math.min(1, 2, 3, 4, 5, 6);  // Calculates smallest number
console.log("math.minimum", a);

let b = Math.floor(1.7);
console.log("math.floor", b);


// String object: For string related operations.

const message = 'This is my first message'

// calculates length of a string (with space)
console.log("calculate string length", message.length);

// Give the index element of the an string object.
console.log("index value of a string", message[0]);
console.log("index value of a string", message[1]);

// search for a word in a string object and return a boolean.
console.log("if string includes a word", message.includes('my'));
console.log("if string includes a word", message.includes('not'));

// searches if string object starts with 'This'.
// This is a case-sensitive process. 
console.log("if string startswith", message.startsWith('This'));
console.log("if string startswith", message.startsWith('this'));

// seaches if string object ends with 'e'
console.log("if string endsWith", message.endsWith('e'));

// Gives the index of word 'my' in the string object.
console.log("index of the word in a string", message.indexOf('my'));

// A word can be replaced. here, first become second.
console.log("replace a word in a string", message.replace('first', 'second'));

// Uppercase a string elements.
console.log("uppercase", message.toUpperCase());

// Lower case a string elements.
console.log("lowercase", message.toLowerCase());

// added extra white space for demo.
const vikram = ' I love flute  '

console.log(vikram);
// Removes or trim white space from left and right.
console.log("trime", vikram.trim());
// Trims white space from left.  
console.log("trime from left", vikram.trimLeft());
// Trims white space from right.
console.log("trime from right", vikram.trimRight());


// Scape notation in javascript: 

// Single quote (\') was added.
console.log("scape notation", 'I love \'flute\' ');
// New line (\n) was added.
console.log("new line", 'I love \n flute');
// Splite each element based on ''
console.log("split", vikram.split(''));
// splite each element at l
console.log("split at l", vikram.split('l'));

// concatination in  javascript;
const string1 = "vikram";
const string2 = " love";
const string3 = " punam flute";
// join each element 
console.log("concat", string1.concat(string2, string3));

// Template literals in javascript: Back tick character ``
// Using scape notation and Without template literal
const kriti = 'This is me \n \'kriti\'';
console.log(kriti);

const ricky = `This is me
'Ricky'`;
console.log("template literals", ricky);            // Using template literal, quite simple way. 

// Template literals are good way to send an email.

const email =
    `Hi Herry,

Thank you for joing our team

Regards,
Vikram`;

console.log("email", email);

// Template literals are good way to give placeholder.

const name = 'Vikram';     // Bad way of writing
const myMessage = 'Hi ' + name + ',\n' + 'Thank you';
console.log("myMessage", myMessage);


const goodName =       // ${} can any piece of expression: string,number, function.
    `Hi ${name},
Thank you`;
console.log(goodName);

// Date objects:

