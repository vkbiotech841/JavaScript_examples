// What is the output of the following program. Explain reason in the last question of the section.

var p1 = new Promise((success, fail) => {
    setTimeout(() => {
        console.log(1);
        success();
    }, 2000)
});
console.log(2);
var p2 = new Promise((success, fail) => {
    setTimeout(() => {
        console.log(3);
        success();
    }, 1000)
});
var p3 = Promise.all([p1, p2]).then(() => new Promise((sucess, fail) => {
    setTimeout(() => {
        console.log(4);
        sucess();
    }, 3000)
}))

p3.then(() => {
    console.log(5);
});


// answer: 2,3,1,4,5

// Reason:
// (1) 2: Because it is not under Asynchronous code.
// (2) p3 is parallel running p1 and p2 promises. but p2 has setTimeout for 1 second and p1 for 2 seconds. Hence, p2 resolves first and give a value of 3, then p1 resolves and gives a value of 1.
// (3) then value 4 comes. from callback promise from the p3 after the resolves.
// (4) then p3 resolve to give 5.