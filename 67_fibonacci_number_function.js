correctfibonacciArray = [1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

// Generate a fibonacci number array till 10

// Solution:


function fibonacci(num) {
    let arr = [];
    let first = 0;
    let second = 1;
    let sum;

    while (num > 0) {
        sum = first + second;
        arr.push(sum);

        first = second;
        second = sum;

        num = num - 1;
    }
    console.log("fibonacci number array", arr);
    return arr;
}
fibonacci(10);

