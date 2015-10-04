/*
 Write a script that allocates array of 20 integers and initializes each element
 by its index multiplied by 5.
 Print the obtained array on the console.
 */

var numbersArray = [],
    index;

for(index = 1; index <= 20; index += 1) {
 numbersArray[index] = index * 5;
}

console.log(numbersArray);
