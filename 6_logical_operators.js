// Logical And (&&)operator

console.log("true && true:", true && true);       //ans: true
console.log("true && false:", true && false);     //ans: false
console.log("false && true:", false && true);     //ans: false

// Logical OR (||) operator

console.log("true || true:", true || true);       //ans:true
console.log("true || false:", true || false);     //ans: true
console.log("false || true:", false || true);     //ans: true

// Tricky 
console.log("true && 'Hi':", true && "Hi");                 //ans:'Hi'
console.log("true && 'Hi' && 1:", true && "Hi" && 1);       //ans:1
console.log("false && 'Hi':", false && "Hi");               //ans:false
console.log("'Hi' && false:", "Hi" && false);               //ans: false
console.log("false || 'Hi':", false || "Hi");               //ans: 'Hi'
console.log("'Hi' || false:", "Hi" || false);               //ans: 'Hi'


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