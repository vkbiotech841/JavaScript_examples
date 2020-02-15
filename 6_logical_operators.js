// Logical And (&&)operator

console.log(true && true);
console.log(true && false);
console.log(false && true);

// Logical OR (||) operator

console.log(true || true);
console.log(true || false);
console.log(false || true);

// Example of && operator
let highIncome = true;
let goodCreditScore = true;
let loanForEligibility = highIncome && goodCreditScore;
console.log('Eligible', loanForEligibility);

// Example of || operator
let highIncomeNo = false;
let goodCreditScoreYes = true;
let loanEligibilityIs = highIncomeNo || goodCreditScoreYes;
console.log('Eligible', loanEligibilityIs);

// Not operator
let applicationRefused = !loanForEligibility;
console.log('application refused', applicationRefused);