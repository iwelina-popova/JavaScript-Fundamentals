/*
 Write an expression that calculates trapezoid's area by given sides a and b and height h.
 Examples:

 a	    b	    h	    area
 5	    7	    12	    72
 2	    1	    33	    49.5
 8.5	4.3	    2.7	    17.28
 100	200	    300	    45000
 0.222	0.333	0.555	0.1540125
 */

var a = 5,
    b = 7,
    h = 12;

console.log(calculateArea(a, b, h));

function calculateArea(a, b, h){
 return ((a + b) / 2) * h;
}
