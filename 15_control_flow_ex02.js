// Find if isLandscape or portrate mode.
// find width is greater than height.

// Method 01:
function isLandscape(width, height) {
    if (width > height) {
        return true;
    } else {
        return false;
    }
}

let result = isLandscape(1500, 800);
console.log(result);

// Method 02:

function isPortrate(width, height) {
    return (width < height) ? true : false;
}

let resultTwo = isPortrate(600, 500);
console.log(resultTwo);