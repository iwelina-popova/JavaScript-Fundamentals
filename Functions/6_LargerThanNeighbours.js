/*
 Write a function that checks if the element at given position
 in given array of integers is bigger than its two neighbours
 (when such exist).
 */

console.log('--------------------------');
console.log('Problem 6. Larger than neighbours');

var numbersArray = [5, 8, 6, 5, 4, 5];

console.log('The array is: ' + numbersArray);
isElementLarger(numbersArray, 1);
isElementLarger(numbersArray, 0);
isElementLarger(numbersArray, 4);
isElementLarger(numbersArray, 10);

function isElementLarger(numbersArray, position) {
    var element,
        len = numbersArray.length - 1;

    if (position > 0 && position < len) {
        if (numbersArray[position - 1] < numbersArray[position] &&
            numbersArray[position] > numbersArray[position + 1]) {
            console.log('Element at position ' + position + ':' + numbersArray[position] + ' is larger than its two neighbours');
        } else {
            console.log('Element at position ' + position + ':' + numbersArray[position] + ' is not larger than its two neighbours');
        }
    }
    else if (position === 0) {
        if (numbersArray[position] > numbersArray[position + 1]){
            console.log('Element at position ' + position + ':' + numbersArray[position] + ' is larger than its right neighbour');
        } else {
            console.log('Element at position ' + position + ':' + numbersArray[position] + ' is not larger than its right neighbour');
        }
    }
    else if (position === len) {
        if (numbersArray[position] > numbersArray[position - 1]){
            console.log('Element at position ' + position + ':' + numbersArray[position] + ' is larger than its left neighbour');
        } else {
            console.log('Element at position ' + position + ':' + numbersArray[position] + ' is not larger than its left neighbour');
        }
    }
    else console.log('Element at position ' + position + ' -> there no element at this position');
}