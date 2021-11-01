
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Asychronous operation 01 ...');
        resolve(1);
    }, 2 * 1000);
});

const p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Asychronous operation 02 ...');
        resolve(2);
    }, 2 * 1000);
});

// Running parallel promises
Promise.all([p1, p2])
    .then(result => console.log(result));