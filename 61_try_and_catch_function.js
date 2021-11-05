// Try and Catch: Error handling
// Error () is a constructor function.
// Typically we should do the error handling at the begining of a function. This is called as Defensive programming.


const person = {
    firstName: 'KRITI',
    lastName: 'CHANCHAL',
    set fullName(value) {
        if (typeof value !== 'string')
            throw new Error('Value is not a string.');     // Throwing an Error. Hence, we need to catch that thrown error.

        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

try {
    person.fullName = null;
}

catch (error) {
    alert(error);
    console.log(error);
}

console.log(person);