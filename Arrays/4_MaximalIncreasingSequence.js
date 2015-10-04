/*
 Write a script that finds the maximal increasing sequence in an array.
 Example:

 input	                result
 3, 2, 3, 4, 2, 2, 4	2, 3, 4
 */

var numbersArray = [3, 2, 3, 4, 2, 2, 4],
    length = numbersArray.length - 1,
    counter = 1,
    maxCount = 0,
    lastNumber,
    longestSeq = '',
    i;

for(i = 0; i < length; i += 1){

    counter += 1;
    if(numbersArray[i] + 1 !== numbersArray[i + 1]) {
        counter = 1;
    }

    if(maxCount < counter){
        maxCount = counter;
        lastNumber = numbersArray[i + 1];
    }
}

for(i = 0; i < maxCount; i += 1){
    longestSeq = (lastNumber - i) + ' ' + longestSeq;
}

console.log(longestSeq);

