// Count occurences:
// searches how many times a numbers has occured in an array.
// if number is not present in the array show 0.


const numbers = [1, 2, 3, 4, 1, 1, 2,];


// Method 01:
function countOccurence(array, searchElement) {
    let count = 0;
    for (let element of array)
        if (element === searchElement)
            count++;
    return count;
};

const count = countOccurence(numbers, 1);
console.log(count);


// Method 02:
function countOccurence1(array, searchElement) {
    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0;
        console.log(accumulator, current, searchElement);
        return accumulator + occurence;
    }, 0);
};

const count1 = countOccurence1(numbers, 1);
console.log(count1);