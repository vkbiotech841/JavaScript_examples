// Default parameters:

function interest(principal, rate, years) {
    return principal * rate / 100 * years;
}

console.log(interest(10000, 6, 5));

// What if we want a default value for rate and years.

// Method 01: setting default parameters

function interest1(principal, rate, years) {
    rate = rate || 7;                       // This says that if rate is provide as a parameters then use that else use the default rate as 7
    years = years || 5;                     // Similarly, This says that if years are provide as a parameters then use that else use the default years as 5
    return principal * rate / 100 * years;
}

console.log(interest1(10000));     // Here, we are using default value for rate and years.

// Method 02: setting default parameters

function interest2(principal, rate = 8, years = 5) {     // here, we are setting the default value for rate and years.
    return principal * rate / 100 * years;
}

console.log(interest2(10000));

// Note: If you a setting a default parameters as above then after rate default parameters any other parameters should also give a default parameter. otherwise code will not work.

function interest3(principal, rate = 8, years) {
    return principal * rate / 100 * years;
}
console.log(interest3(10000))

// result will be NaN.

// The solution for this problem will be to:

function interest4(principal, rate = 8, years) {
    return principal * rate / 100 * years;
}
console.log(interest4(10000, undefined, 5))