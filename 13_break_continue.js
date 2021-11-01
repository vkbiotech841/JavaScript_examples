// Use of Break: in while loop

let i = 0;
while (i < 10) {
    if (i === 5) {
        break;
    }
    i++;
    console.log(i);
};


// Use of continue: in while loop

let j = 0;
while (j < 10) {
    if (j % 2 === 0) {
        console.log(j);
    }
    j++;
    continue;
};

