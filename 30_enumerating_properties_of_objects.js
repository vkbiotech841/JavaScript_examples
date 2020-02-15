// Enumerating or repeating the properties of an objects.

const circle = {
    radius: 1,
    draw() {
        console.log('draw')
    }
};

// Method 01: Using for in loop

for (let key in circle)
    console.log(key, circle[key]);

// Method 02: Using for of loop and .keys
for (let key of Object.keys(circle))
    console.log(key);

// Method 03: Using for of loop and .entries
for (let entry of Object.entries(circle))
    console.log(entry);

//Method 04: Using if and in 

if ('color' in circle) console.log('yes');