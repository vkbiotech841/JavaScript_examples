// FizzBuzz example.
// logic:
// if a number is divisible by 3: Fizz
// if a number is divisible by 5: Buzz
// if a number is divisible by 3 and 5 : FizzBuzz
// if a number is not divisible by 3 and 5: Return same number
// if number is not a number: return "Not a number"

function fizzbuzz(input) {
    if (typeof input !== 'number') {
        return 'Not a number';
    } else if ((input % 3 === 0) && (input % 5 === 0)) {
        return 'FizzBuzz';
    } else if (input % 3 === 0) {
        return 'Fizz';
    } else if (input % 5 === 0) {
        return 'Buzz';
    } else {
        return input;
    }
};

let resultOne = fizzbuzz(3);
console.log(resultOne);

let resultTwo = fizzbuzz(5);
console.log(resultTwo);

let resultThree = fizzbuzz(15);
console.log(resultThree);

let resultFour = fizzbuzz(7);
console.log(resultFour);

let resultFive = fizzbuzz('a');
console.log(resultFive);

