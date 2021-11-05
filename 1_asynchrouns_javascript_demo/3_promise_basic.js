// Promise: A solution for callback. it promises to give a result.
// Promise holds the eventual result of the asynchrouns operation.
// If an asynchronous operation ends. Then it gives either a "value" or an "error".
// it is an object.
// 3 states of promise: (1) pending state (2) Fulfilled state and (3) Rejected state

const p = new Promise((resolve, reject) => {
    // Kick off some async works.
    // async function will give some result.
    setTimeout(() => {
        resolve(1);                      //pending => resolved, fulfilled
        reject(new Error('an error occurred message'));   // pending => rejected
    }, 2 * 1000);
})

// Consuming promises

p
    .then(result => console.log('Result', result))
    .catch(err => console.log('Error', err.message));
