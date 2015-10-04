/*
 Write a function that returns the index of the first element in array
 that is larger than its neighbours or -1, if there’s no such element.
 Use the function from the previous exercise.
 */

console.log('--------------------------------');
console.log('Problem 7. First larger than neighbours');

var numbersArray = [5, 3, 6, 7, 4, 5, 10, 9, 1],
    firstLargerElement;

firstLargerElement = FindLargerElement(numbersArray);

console.log(numbersArray);
if (firstLargerElement != -1)
{
    console.log('The index of the first element larger than its neighbours is: ', + firstLargerElement);
} else {
    console.log('There no element larger than its neighbours.');
}

function FindLargerElement( numbersArray) {
    var largerElement = -1,
        i, len;
    for (i = 1, len = numbersArray.length - 1; i < len; i += 1) {
        if (numbersArray[i] > numbersArray[i - 1] && numbersArray[i] > numbersArray[i + 1]) {
            largerElement = i;
            break;
        }
    }
    return largerElement;
}