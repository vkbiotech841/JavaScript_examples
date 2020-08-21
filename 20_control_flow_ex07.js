// To display properties of an object those are string.
// if properties are other than string property it will not come. 
// In this example, title and director are string type and releaseYear and rating are number type. 

// Creating an movie object with following properties. 
const movie = {        // {} is an object literal syntax. 
    title: 'a',         // Here, movie object holds key:value pairs.
    releaseYear: 2020,
    rating: 4.5,
    director: 'b'
};


function showProperties(object) {
    for (let key in object) {                  // using for loop only property is listed.
        if (typeof object[key] === 'string')   // To check the value of a key:value pair; typeof operator was used.
            console.log(key, object[key]);    // if value is a string, it will log key, value on the console.
    }
};


showProperties(movie);