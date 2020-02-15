// Speed limit = 70km/hr,
// if speed is increasing then per 5 km increament will be considered as 1 point.
// if point = 12, then driving licence is suspended. 


function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed < speedLimit)
        console.log('Ok');
    else {
        let points = Math.floor((speed - speedLimit) / kmPerPoint);
        //Math.floor () function converts floating number to absolute number.
        if (points >= 12)
            console.log('Licence suspended');
        else
            console.log('Points', points);   // Here, Points: is for displaying Points word and points is a variable.
    }

}


// Calling function.
checkSpeed(50);
checkSpeed(70);
checkSpeed(73);
checkSpeed(90);
checkSpeed(150);
