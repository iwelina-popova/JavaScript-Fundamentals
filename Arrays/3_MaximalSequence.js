/*
 Write a script that finds the maximal sequence of equal elements in an array.
 Example:

 input	                        result
 2, 1, 1, 2, 3, 3, 2, 2, 2, 1	2, 2, 2
 */

var numbersArray = [2, 1, 1, 2, 3, 3, 2, 2, 2, 1],
    length = numbersArray.length - 1,
    counter = 0,
    maxSeq = 0,
    number,
    maxSeqString = '',
    i;

for(i = 0; i < length; i += 1) {
 counter += 1;

 if(numbersArray[i] !== numbersArray[i + 1]){
  counter = 1;
 }
 if(maxSeq < counter) {
  maxSeq = counter;
  number = numbersArray[i];
 }
}

for(i = 0; i < maxSeq; i += 1) {
 maxSeqString += number + ' ';
}

console.log('Max sequence: ' + maxSeqString);

