// Displaying even and odd numbers between a given number starting from zero.

// Method 01
// function showNumbers(limit) {
//     for (let i = 0;i <= limit;i++)
//         if (i % 2 === 0) {
//             console.log(i, 'EVEN');
//         } else {
//             console.log(i, 'ODD');
//         }
// };

// calling function
showNumbers(10);


// Method 02
function showNumbers(limit) {
    for (let i = 0;i <= limit;i++) {
        const message = (i % 2 === 0) ? 'EVEN' : 'ODD'
        console.log(i, message);
    }
};