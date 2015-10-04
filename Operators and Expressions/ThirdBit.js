/*
 Write a boolean expression for finding if the bit #3 (counting from 0) of a given integer.
 The bits are counted from right to left, starting from bit #0.
 The result of the expression should be either 1 or 0.
 Examples:

 n	    binary representation	bit #3
 5	    00000000 00000101	     0
 8	    00000000 00001000	     1
 0	    00000000 00000000	     0
 15	    00000000 00001111	     1
 5343	00010100 11011111	     1
 62241	11110011 00100001	     0
 */

var firstNumber = 5,
    secondNumber = 15,
    thirdNumber = 62241;

console.log(getBitValue(firstNumber));
console.log(getBitValue(secondNumber));
console.log(getBitValue(thirdNumber));

function getBitValue(number){
    return (number >> 3) & 1;
}