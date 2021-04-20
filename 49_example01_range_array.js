// Generate numbers array between minimum and maximum number.


function arrayFromRange(min, max) {
    const output = [];
    for (let i = min;i <= max;i++) {
        output.push(i);
    }
    return output;
};

const numbers = arrayFromRange(-10, 10);
console.log("array range", numbers);