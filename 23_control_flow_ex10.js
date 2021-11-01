// Nested loop: Example here, display stars

// Logic:
//first for loop: Initial value of row is 1 and it will add tills rows value.
// let value of pattern is initially 0
// Second for loop: here, we are getting value of row from first loop.
// once the i = value of row (in this 10), for loop ends


function showStar(rows) {
    for (let row = 1;row <= rows;row++) {
        let pattern = '';
        for (i = 0;i < row;i++) {
            pattern += '*';
        }
        console.log("pattern:", pattern);
    }
};

// Calling function
showStar(10);