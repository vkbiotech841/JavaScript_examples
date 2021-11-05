// "this" keyword:
// "this" keyword: Refers to the object that is executing the current function.

// if a function is a method in an object: this keyword references to an object.
// if a function is regular function: this keyword references to a global object (e.g window object in browser or a global object in node)


// Example 01: 
// When this keyword is inside a method.
const video = {      // object
    title: 'a',
    play() {
        console.log(this);  // here, this keyword is inside a method
    }
};

video.play();

video.stop = function () {    // adding new method to video object.
    console.log(this);        // Since, stop() method has been added to the video object. Then this keyword still be referencing to the video object.
};

video.stop();
// result: Hence, in this case, this keyword refereces to video object.



// Example 02: 
// When this keyword is inside a regulor function.

function playVideo() {
    console.log(this);
}

playVideo();

// Result:Here, this keyword is inside a regulor function. Hence, it references to the multiple window objects and global objects in node.


// Example 03: 
// When this keyword is inside a constructor function. it references to an empty {} object.

function Video(title) {
    this.title = title;
    console.log(this);
}

const v = new Video('a');     // we call the constructor function using new keyword. new keyword also creates an empty object {}. and sets this keyword to point to the empty object.


// Example 04: 
// When this keyword is inside a callback function.it references a window object. because callback function is just like a regular function inside a another function.

const Video1 = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        this.tags.forEach(function (tag) {
            console.log(this.title, tag);
        }, this);
    }
};

Video1.showTags();

