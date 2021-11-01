// Logical And (&&)operator

console.log("true && true:", true && true);
console.log("true && false:", true && false);
console.log("false && true:", false && true);

// Logical OR (||) operator

console.log("true || true:", true || true);
console.log("true || false:", true || false);
console.log("false || true:", false || true);

// Tricky 
console.log("true && 'Hi':", true && "Hi");
console.log("true && 'Hi' && 1:", true && "Hi" && 1);
console.log("false && 'Hi':", false && "Hi");
console.log("false || 'Hi':", false || "Hi");
console.log("'Hi' && false:", "Hi" && false);
console.log("'Hi' || false:", "Hi" || false);


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