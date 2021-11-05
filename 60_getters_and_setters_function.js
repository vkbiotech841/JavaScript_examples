// Getters and setters


// object
const person = {
    firstName: 'VIKRAM',
    lastName: 'KUMAR'
};

// Get the full name

// Method 01: string method
console.log("person fullname", person.firstName + ' ' + person.lastName);

// Method 02:We can also use template literals method.
console.log("template literals", `${person.firstName} ${person.lastName}`);

// Method 03: by creating method in an object.

const person1 = {
    firstName: 'RICKY',
    lastName: 'KUMAR',
    fullname() {
        return `${person1.firstName} ${person1.lastName}`;
    }
};

console.log("person1 fullname", person1.fullname()); // Here, we are calling fullname as () method.

// Method 04: Using getters
// Now, we do not want to call fullname as () method. Instide we just want to use fullname property.

// getters = is used for accessing the properties of an object.
// setters =  is used for change (mutate) these properties of an object.

const person2 = {
    firstName: 'HINA',
    lastName: 'KUMARI',
    get fullname() {                       // getter: here, we have just used 'get' word as a prefix for a method of an object.
        return `${person2.firstName} ${person2.lastName}`;
    }
};

console.log("person2 fullname", person2.fullname);      // Here, we are using fullname as a properties of an object. Not as method.

// Method 05: setters

const person3 = {
    firstName: 'KRITI',
    lastName: 'CHANCHAL',
    get fullname() {                      // GETTER: setting properties of an object.
        return `${person3.firstName} ${person3.lastName}`;
    },
    set fullName(value) {                // SETTER: changing properties of an object
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }
};

person3.fullName = 'VIKRAM KUMAR';       // original name was KRITI CHANCHAL but setter (set) has changed the properties of an object. Here, fullName properties has been changed to VIKRAM KUMAR.

console.log("person3", person3);