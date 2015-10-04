/*
 Sorting an array means to arrange its elements in increasing order.
 Write a script to sort an array.
 Use the selection sort algorithm: Find the smallest element,
 move it at the first position, find the smallest from the rest,
 move it at the second position, etc.
 Hint: Use a second array
 */

var numbersArray = [ 3, 8, 4, 5, 9, 2, 0, 6, 1, 7 ],
    length,
    minValue,
    temp,
    i,
    j;

for (i = 0, length = numbersArray.length - 1; i < length; i += 1){

 minValue = i;
 for (j = i + 1, length = numbersArray.length; j < length; j++){
  if (numbersArray[j] < numbersArray[minValue])  {
   minValue = j;
  }
 }
 if (minValue !== i) {
  temp = numbersArray[i];
  numbersArray[i] = numbersArray[minValue];
  numbersArray[minValue] = temp;
 }
}

console.log('The sorted array is: ', numbersArray.join(', '));