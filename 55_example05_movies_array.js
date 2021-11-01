// find the movies in 2018 with rating > 4
// sort them by the rating 
// in descending order.
// Pick only the title and display on the console.

const movies = [
    { title: 'a', year: 2018, rating: 4.5 },
    { title: 'b', year: 2018, rating: 4.7 },
    { title: 'c', year: 2018, rating: 3 },
    { title: 'd', year: 2017, rating: 4.5 },
];


// Method 01:
const titles = movies
    .filter(movies => movies.year === 2018 && movies.rating >= 4)   // filtering movies with year === 2018 and rating >= 4. This returns an array.
    .sort((a, b) => a.rating - b.rating)                            // Applying sort method to the new array. sorting based on rating. let say a.rating = 5, and b.rating = 4.5. then difference is positive number  0.5.
    .reverse()                                                      // sort method returns value in ascending order.but in this case, we want values in descending order.Hence, reverse method is applied.
    .map(movies => movies.title)                                    // Now, we want to map the values to the title of the array.

console.log(titles);




// Note:
// filter () method returns = a new array, it only works with an array.
// sort () method = by default it works for numbers and strings. For objects we need to supply a comparition function. it returns value in ascending order.
// reverse () method returns = It changes the order in reverse direction.
// map() method returns = an array.