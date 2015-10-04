/*
 Write a script that finds the most frequent number in an array.
 Example:

 input	                                  result
 4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3	  4 (5 times)
 */

var numbersArray = [4, 1, 1, 4, 2, 3, 4, 4, 1, 2, 4, 9, 3],
    length = numbersArray.length - 1,
    counter = 0,
    maxCount = 0,
    freqNumber,
    i;

numbersArray.sort();

for(i = 0; i < length; i += 1){

 counter += 1;
 if(numbersArray[i] !== numbersArray[i + 1]){
  counter = 1;
 }

 if(maxCount < counter){
  maxCount = counter;
  freqNumber = numbersArray[i];
 }
}

console.log('The most frequent number in the array is: ' + freqNumber + ' (' + maxCount + ' times)');
