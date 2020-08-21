// Finding a number in an array.  
// Search pattern

const numbers = [1, 2, 3, 4, 5];


function includes(array, searchElement) {
    for (let element of array)
        if (element === searchElement)
            return true;
        else {
            return false;
        };
};

const result = includes(numbers, 1);

console.log(result);