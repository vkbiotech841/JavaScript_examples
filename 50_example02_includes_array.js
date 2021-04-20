// Finding a number in an array.  
// Search pattern

const numbers = [1, 2, 3, 4, 5];

// Method 01:
function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
        else {
            return false;
        };
};

const result = includes(numbers, 1);

console.log("is element is present", result);

//  Method 02:
const isElement = numbers.includes(5);
console.log("isElement", isElement);
