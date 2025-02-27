// function to check if gpa is between 0 and 4
function validGPA(gpa) {
    if (gpa >= 0 && gpa <= 4) {
        return true;
    } else {
        return false;
    }
}
// print to console the function with a gpa of 3.5

console.log(validGPA(3.5));
console.log('is 4.5? ' + validGPA(4.5));

console.log('is 3.4? ' + validGPA(3.5));