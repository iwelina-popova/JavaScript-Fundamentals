/*
 Write a script that finds the biggest of three numbers.
 Use nested if statements.
 Examples:

 a	    b	    c	    biggest
 5	    2	    2	    5
 -2	    -2	    1	    1
 -2	    4	    3	    4
 0	    -2.5	5	    5
 -0.1	-0.5	-1.1	-0.1
 */

var a = 3,
    b = 4,
    c = 3,
    biggest;

if(a >= b) {
 if(a > c){
  biggest = a;
 } else {
  biggest = c;
 }
} else if(b > a){
 if(b > c){
  biggest = b;
 } else {
  biggest = c;
 }
} else {
 biggest = c;
}

console.log(biggest);