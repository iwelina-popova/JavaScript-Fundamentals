/*
 Write a function that counts how many times given number appears in given array.
 Write a test function to check if the function is working correctly.
 */

console.log('-------------------------');
console.log('Problem 5. Appearance count');

var firstArray = [1, 1, 1, 5, 6, 8],
    secondArray = [1, 2, 2, 5, 5, 5, 6, 5],
    firstNumber = 1,
    secondNumber = 5;

console.log(firstNumber + ' appears in ' + firstArray + ' -> ' + appearanceCount(firstArray, firstNumber));
console.log(secondNumber + ' appears in ' + secondArray + ' -> ' + appearanceCount(secondArray, secondNumber));

function appearanceCount(array, number) {
    var len, i,
        counter = 0;

    for(i = 0, len = array.length; i < len; i += 1) {
        if(number === array[i]) {
            counter += 1;
        }
    }
    return counter;
}