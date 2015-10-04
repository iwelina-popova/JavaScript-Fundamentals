/*
 Sort 3 real values in descending order.
 Use nested if statements.
 Note: Don’t use arrays and the built-in sorting functionality.

 Examples:

 a	    b	    c	    result
 5	    1	    2	    5 2 1
 -2	    -2	    1	    1 -2 -2
 -2	    4	    3	    4 3 -2
 0	    -2.5	5	    5 0 -2.5
 -1.1	-0.5	-0.1	-0.1 -0.5 -1.1
 10	    20	    30	    30 20 10
 1	    1	    1	    1 1 1
 */

var a = 5,
    b = 1,
    c = 2,
    result = '';

if(a >= b && a >= c){
 result += a;
 if(b > c){
  result += ' ' + b + ' ' + c;
 } else {
  result += ' ' + c + ' ' + b;
 }
} else if(b > a && b > c){
 result += b;
 if(a > c){
  result += ' ' + a + ' ' + c;
 } else {
  result += ' ' + c + ' ' + a;
 }
} else {
 result += c;
 if(a > b){
  result += ' ' + a + ' ' + b;
 } else {
  result += ' ' + b + ' ' + a;
 }
}

console.log(result);
