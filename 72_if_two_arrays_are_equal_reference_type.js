const arr1 = [
    { url: '/a', 'title': 'A' },
    { url: '/b', 'title': 'B' },
    { url: '/c', 'title': 'C' },
    { url: '/d', 'title': 'D' },
    { url: '/e', 'title': 'E' },
];

const arr2 = [
    { url: '/f', 'title': 'F' },
    { url: '/g', 'title': 'G' },
    { url: '/c', 'title': 'C' },
    { url: '/d', 'title': 'D' },
    { url: '/h', 'title': 'H' },
];

const arr3 = [
    { url: '/f', 'title': 'F' },
    { url: '/g', 'title': 'G' },
    { url: '/c', 'title': 'C' },
    { url: '/d', 'title': 'D' },
    { url: '/h', 'title': 'H' },
];

// Using Find Method
function areEqualArrays(array1, array2) {

    if (array1.length === array2.length) {
        let areEqualArrays = true;
        array1.forEach((element, index) => {
            const isTwoObjectsAreEqual = objectsEqual(element, array2[index]);
            areEqualArrays = areEqualArrays && isTwoObjectsAreEqual;
        });

        return areEqualArrays;
    } else {
        return false;
    }


}

function objectsEqual(o1, o2) {
    return typeof o1 === 'object' && Object.keys(o1).length > 0
        ? Object.keys(o1).length === Object.keys(o2).length
        && Object.keys(o1).every(p => objectsEqual(o1[p], o2[p]))
        : o1 === o2;
}


console.log("result", areEqualArrays(arr1, arr2));
console.log("result", areEqualArrays(arr2, arr3));


