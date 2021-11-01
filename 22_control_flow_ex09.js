// Calculating grade of the student based on marks objected.
// Grading logic:
// if average of marks in a array is in between:
// 0-59:F
// 60-69:D
// 70-79:C
// 80-89:B
// 90-100:A

// Method 01: This code is quit ugly because it has too many repeatation.

const marks = [80, 80, 50];          // array of marks

function calculateGrade(marks) {
    let sum = 0;
    for (let mark of marks)
        sum = sum + mark;      // This is way we store a value to another. Here, mark is being stored to the sum. 
    let average = sum / marks.length;  // Store right side variable (mark) to the left side variable (sum).This is called as mapping. 

    if (average >= 0 && average <= 59) return 'F';
    if (average >= 60 && average <= 69) return 'D';
    if (average >= 70 && average <= 79) return 'C';
    if (average >= 80 && average <= 89) return 'B';
    else return 'A';
}

// Calling calculateGrade function and logging on the console.
console.log("Grade:", calculateGrade(marks));






// Method 02: Lets make a re-usable code

// first re-usable function for calculating average of an array
function calculateAverage(array) {
    let sum = 0;
    for (let value of array) {
        sum += value;
        let average = sum / array.length;
        return average;
    }
}

// Second function for calculating the grade of an array (marks)

function calculatingGrade(marks) {
    const average = calculateAverage(marks)  // calling first function for calculating average and storing its value to the average variable.
    if (average >= 0 && average <= 59) return 'F';
    if (average >= 60 && average <= 69) return 'D';
    if (average >= 70 && average <= 79) return 'C';
    if (average >= 80 && average <= 89) return 'B';
    else return 'A';
}

console.log("Grade:", calculateGrade(marks));




