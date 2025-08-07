const obj1 = { name: 'John', age: 33, info: { married: true, hobbies: ['sport', 'art'] } };
const obj2 = { age: 33, name: 'John', info: { hobbies: ['sport', 'art'], married: true } };
const obj3 = { name: 'John', age: 33 };
const obj4 = { name: 'John', age: 33 };



function objectsEqual(o1, o2) {
    return typeof o1 === 'object' && Object.keys(o1).length > 0
        ? Object.keys(o1).length === Object.keys(o2).length
        && Object.keys(o1).every(p => objectsEqual(o1[p], o2[p]))
        : o1 === o2;

}

console.log(objectsEqual(obj1, obj2)); // true
console.log(objectsEqual(obj1, obj3)); // false
console.log(objectsEqual(obj3, obj4)); // true