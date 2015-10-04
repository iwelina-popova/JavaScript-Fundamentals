/*
 Write a script that shows the sign (+, - or 0) of the product of three real numbers, without calculating it.
 Use a sequence of if operators.
 Examples:

 a	   b	   c	 result
 5	   2	   2	 +
 -2	   -2	   1	 +
 -2	   4	   3	 -
 0	   -2.5	   4	 0
 -1	   -0.5	   -5.1	 -
 */

var a = 5,
    b = -2,
    c = 0,
    counter = 0,
    sign = '';

if(a < 0) {
 counter += 1;
}
if(b < 0) {
 counter += 1;
}
if(c < 0) {
 counter += 1;
}

if (counter % 2 === 0) {
 sign = '+';
} else {
 sign = '-';
}

if(a === 0 || b === 0 || c === 0) {
 sign = '0';
}

console.log(sign);