// Default parameters:

function interest(principal, rate, years) {
    return principal * rate / 100 * years;
}

console.log("interest", interest(10000, 6, 5));

// What if we want a default value for rate and years.

// Method 01: setting default parameters
// Here, we are using default value for rate and years.

function interest1(principal, rate, years) {
    rate = rate || 7;
    years = years || 5;
    return principal * rate / 100 * years;
}

console.log("interest1", interest1(10000));


// Method 02: setting default parameters
// here, we are setting the default value for rate and years.
// Note: If you a setting a default parameters as above then after rate default parameters any other parameters should also give a default parameter. otherwise code will not work.

function interest2(principal, rate = 8, years = 5) {
    return principal * rate / 100 * years;
}

console.log("interest2", interest2(10000));


// Method 03:
// result will be NaN. because here, years is not defined while calling the function.

function interest3(principal, rate = 8, years) {
    return principal * rate / 100 * years;
}
console.log("interest3", interest3(10000))


// Method 04:
// The solution for this problem will be to: by adding additional parameters rate = undefined and years=5
function interest4(principal, rate = 8, years) {
    return principal * rate / 100 * years;
}
console.log("interest4", interest4(10000, undefined, 5))