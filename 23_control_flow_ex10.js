// Nested loop: Example here, display stars

// Here, we do not have any array called as rows. but we are imaging that

function showStar(rows) {
    for (let row = 1;row <= rows;row++) {   //first for loop: Initial value of row is 1 and it will add tills rows value.
        let pattern = '';                   // let value of pattern is initially 0
        for (i = 0;i < row;i++) {        // Second for loop: here, we are getting value of row from first loop.
            pattern += '*';                 // once the i = value of row (in this 10), for loop ends
        }
        console.log("pattern:", pattern);
    }
};

// Calling function
showStar(10);