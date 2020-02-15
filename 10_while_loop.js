// Symbols:
// for (){};
// if ()
// while (){};

// Display odd number between 1 to 5: Use for and if loop

for (let i = 0; i <= 5; i++) {
    if (i % 2 !== 0)
        console.log(i);
};

//  In case of for loop: let i=0 is inside for loop but in
// In case of while loop, it is outside of the loop

let i = 0;              // variable is outside the while block
while (i <= 5) {        // Condition
    if (i % 2 !== 0)    // statement
        console.log(i);
    i++;                 // increamentExpression
};