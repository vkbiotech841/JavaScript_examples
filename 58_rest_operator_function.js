// Rest operator: if we want a function with multiple parameters we can use rest operator.
// rest operator symbol: (...args)
// This enable us to use multiple arguments in while call a function.
// Note: In case of rest operator, we write (...args) in the parameters whereas for spread operator, we write in the argument.

// Example 01: calculating the sum of the numbers with multiple parameters and arguments.

function sum(...args) {
    return args.reduce((a, b) => a + b);
};
console.log(sum(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Example 02: calculate the total price in a shopping mall. if 0.1 is discount and two items prices are 20 and 30.

function sum1(discount, ...prices) {          // here ...prices is a rest parameters. before this parameters can have multiple parameters but not after this. Hence, rest of the parameters are called as REST parameters.
    const total = prices.reduce((a, b) => a + b);
    return total * (1 - discount);
}

console.log(sum1(0.1, 20, 30, 40))