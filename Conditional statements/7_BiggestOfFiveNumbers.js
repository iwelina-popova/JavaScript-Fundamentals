/*
 Write a script that finds the greatest of given 5 variables.
 Use nested if statements.
 Examples:

 a	   b	   c	   d	e	   biggest
 5	   2	   2	   4	1	   5
 -2	   -22	   1	   0	0	   1
 -2	   4	   3	   2	0	   4
 0	   -2.5	   0	   5	5	   5
 -3	   -0.5	   -1.1	   -2	-0.1   -0.1
 */


var firstNumber = 5,
    secondNumber = 2,
    thirdNumber = 2,
    fourthNumber = 4,
    fifthNumber = 1,
    theBiggest;

theBiggest = firstNumber;

if (secondNumber > theBiggest)
{
 secondNumber = theBiggest;
}
if (thirdNumber > theBiggest)
{
 theBiggest = thirdNumber;
}
if (fourthNumber > theBiggest)
{
 theBiggest = fourthNumber;
}
if (fifthNumber > theBiggest)
{
 theBiggest = fifthNumber;
}

console.log(theBiggest);