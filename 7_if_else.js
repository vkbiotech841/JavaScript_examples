// if, else if and else comes with their code blocks {}.
// if (){}
// else if (){}
// else {}

// Example 01:
// if hour is between 6am to 12pm: Goood morning
// if hour is between 12pm to 6pm:Good afternoon
// otherwise: Good evening

let hour = 19;

if (hour >= 6 && hour < 12) {
    console.log('Good morning');
}
else if (hour > 12 && hour < 18) {
    console.log('Good afternoon');
}
else {
    console.log('Good evening');
};
