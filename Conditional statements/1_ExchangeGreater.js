/*
 Write an if statement that takes two double variables a and b and exchanges their values if the first one is greater than the second.
 As a result print the values a and b, separated by a space.
 Examples:

 a	    b	 result
 5	    2	 2 5
 3	    4	 3 4
 5.5	4.5	 4.5 5.5
 */

var firstNumber = 5,
    secondNumber = 2,
    result = '';

if(firstNumber > secondNumber){
 result += secondNumber + ' ' + firstNumber;
} else {
 result += firstNumber + ' ' + secondNumber;
}

console.log(result);