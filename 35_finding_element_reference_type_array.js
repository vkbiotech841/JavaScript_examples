// Finding an element of an array: Reference type
// Finding reference type is different from finding primitive type.

// Reference type:

const courses = [           // array containing objects.
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
];

// Method 01: finding items: find method

// include method does not work with reference type. because objects are reference type.
// That means, even though  this object is present in this array but include method gives a false.
console.log(courses.includes({ id: 1, name: 'a' }));

// Way 01: fetching by name.

// find method: it takes a predicate or call function as an parameter. This function takes an element as a paratermeter.
// In this case, callback function takes a course element and return if course.name is equals to string 'a'.
// Further, we are saving the returned result into a course constant.
const course = courses.find(function (course) {     // Note: call back function takes course or element not courses.
    return course.name === 'a'
});

console.log(course);

// Way 02: fetching by id.
const course2 = courses.find(function (course) {
    return course.id === 2
});

console.log(course2);

// Way 03: if search element is absent. it returns undefined.

const course3 = courses.find(function (course) {
    return course.id === 3
});

console.log(course3);


// Method 02: findIndex method :searching and getting index of the element.

// Example 01: if element is present. it returns index of that element.
const course4 = courses.findIndex(function (course) {
    return course.id === 1
});

console.log(course4);

// Example 02: if element is absent. it returns index as -1.

const course5 = courses.findIndex(function (course) {
    return course.id === 12
});

console.log(course5);


