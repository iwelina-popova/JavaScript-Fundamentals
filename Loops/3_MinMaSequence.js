//Write a script that finds the max and min number from a sequence of numbers.

var numbersArray = [1, 5, 2, 3, 10, -10],
    min,
    max,
    i;

min = numbersArray[0];
max = numbersArray[0];

for(i = 1; i <= numbersArray.length; i += 1){
    if(numbersArray[i] < min){
        min = numbersArray[i];
    }
    if(numbersArray[i] > max){
        max = numbersArray[i];
    }
}

console.log('Min number is: ' + min);
console.log('Max number is: ' + max);