// Built in objects in Javascript: Math object, string object, scape notations, template literals, Date object.


// Math object: For mathematics operation in javascript

let x = Math.random(); //random number each time.
console.log(x);

let y = Math.round(1.8); // Rounding off a number
console.log(y);

let z = Math.max(1, 2, 3, 4, 5, 6);  // Calculates largest number
console.log(z);

let a = Math.min(1, 2, 3, 4, 5, 6);  // Calculates smallest number
console.log(a);


// String object: For string related operations.

const message = 'This is my first message'

console.log(message.length);              // calculates length of a string (with space)

console.log(message[0]);
console.log(message[1]);                 // Give the index element of the an string object.

console.log(message.includes('my'));      // search for a word in a string object and return a boolean.
console.log(message.includes('not'));

console.log(message.startsWith('This'));  // searches if string object starts with 'This'.
console.log(message.startsWith('this'));  // This is a case-sensitive process. 

console.log(message.endsWith('e'));       // seaches if string object ends with 'e'

console.log(message.indexOf('my'));       // Gives the index of word 'my' in the string object.

console.log(message.replace('first', 'second'));   // A word can be replaced. here, first become second.

console.log(message.toUpperCase());               // Uppercase a string elements.

console.log(message.toLowerCase());               // Lower case a string elements. 


const vikram = ' I love flute  '    // added extra white space for demo.

console.log(vikram);
console.log(vikram.trim());        // Removes or trim white space from left and right.
console.log(vikram.trimLeft());    // Trims white space from left. 
console.log(vikram.trimRight());   // Trims white space from right.


// Scape notation in javascript: 

console.log('I love \'flute ');  // Single quote (\') was added.
console.log('I love \n flute');  // New line (\n) was added.
console.log(vikram.split(''));   // Splite each element based on ''
console.log(vikram.split('l'));  // splite each element at l

// Template literals in javascript: Back tick character ``

const kriti = 'This is me \n \'kriti\'';  // Using scape notation and Without template literal
console.log(kriti);

const ricky = `This is me
'Ricky'`;
console.log(ricky);            // Using template literal, quite simple way. 

// Template literals are good way to send an email.

const email =
    `Hi Herry,

Thank you for joing our team

Regards,
Vikram`;

console.log(email);

// Template literals are good way to give placeholder.

const name = 'Vikram';     // Bad way of writing
const myMessage = 'Hi ' + name + ',\n' + 'Thank you';
console.log(myMessage);


const goodName =       // ${} can any piece of expression: string,number, function.
    `Hi ${name},
Thank you`;
console.log(goodName);

// Date objects:

