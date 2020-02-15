// Arrow function: In other, languages (e.g C) it is also called as lamda function.
// Whenever, we are using a predicate or call back function.
// When can use arrow function. Simply removing the function word and adding => symbol.


const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

// Without arrow function:
const course = courses.find(function (course) {
    return course.name === 'a'
});

console.log(course);

// With arrow functions:

// if multiple parameters are present.
const course1 = courses.find((course) => {
    return course.name === 'a'
});

console.log(course1);

// if single parameter is present. 

// As in this case. we have only one parameter, we can remove (), return keyword and {}.
// This gives a single line code. 
// We read this one line code as: course goes to course.id

const course2 = courses.find(course => course.id === 1);

console.log(course2);

// if no parameter is present.

// we simply give a () and remove return keyword as well as {}.
const course3 = courses.find(() => course.id === 2);
console.log(course3);
