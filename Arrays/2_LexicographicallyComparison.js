//Write a script that compares two char arrays lexicographically (letter by letter).

var firstArray = ['a', 'b', 'c', 'f'],
    secondArray = ['a', 'g', 'c'],
    firstLength = firstArray.length,
    secondLength = secondArray.length,
    minLength = Math.min(firstLength, secondLength),
    i;

for(i = 0; i < minLength; i += 1) {
    if(firstArray[i] > secondArray[i]) {
        console.log(firstArray[i] + ' is lexicographically before ' + secondArray[i]);
    } else if(secondArray[i] > firstArray[i]) {
        console.log(secondArray[i] + ' is lexicographically before ' + firstArray[i]);
    } else {
        console.log('The letters are equals!');
    }
}
