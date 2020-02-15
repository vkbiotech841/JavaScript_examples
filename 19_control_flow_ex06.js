// falsy value are: Falsy,undefined, null, '', false, 0, NaN

const array = [0, null, undefined, '', 1, 2, 3];


function countTruthy(array) {
    let count = 0;
    for (let value of array)
        if (value)            // here, we are looking for truthy value.
            count++
    return count;
}
// calling function
console.log(countTruthy(array));

// Array contains 7 values but 4 of them are falsy value.
// Our result only counts truthy value. Hence, result is 3. 