// Example of nested for loop.
// Prime number: A number which can be divide by 1 or itself.
// prime number example: 2, 3,7,11,13,17,19

// The best way to understand this example is consider that number is not a prime (example let number is 4). Then read the code.

// Method 01:
function showPrimes(limit) {                          // number start from 2 because 2 is the first prime number. 
    for (let number = 2; number <= limit; number++) {  // this function just increasing the till the limit number.

        let isPrime = true;                // Here, we are considering the isPrimer = true. This is quit usual in programming language.
        for (let factor = 2; factor < number; factor++) {   // Since, first primer number 2 can only be divided by either 1 or 2 itself. so the factor initial will be 2.
            if (number % factor === 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) console.log(number);
    }
}

showPrimes(20)

showPrimes(10)



// // Method 02: Making re-usable function

// function showPrimes(limit) {
//     for (let number = 2; number <= limit; number++)
//         if (isPrime(number)) console.log(number);
// }

// // Re-usable function
// function isPrime(number) {
//     for (let factor = 2; factor < number; factor++)
//         if (number % factor === 0)
//             return false;
//     return true;

// }