// Let and var keywords:

// Let keyword:
function start() {
    for (let i = 0; i < 5; i++) {
        console.log(i);            // here, scope of i is inside the for block.
    }
    // console.log(i);                  // Because of the let keyword, Here, scope of i is outside the for block. Hence, it does not work.
}


start();

// var keyword:

function start1() {
    for (var i = 0; i < 6; i++) {
        console.log(i);

    }
    console.log(i);              // because of the var keyword. the scope of i is just limited to local scope inside the for loop. but Even its scope is their outside the for loop. 
}

start1();

