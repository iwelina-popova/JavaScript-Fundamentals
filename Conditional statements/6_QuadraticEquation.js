/*
 Write a script that reads the coefficients a, b and c of a quadratic equation ax2 + bx + c = 0
 and solves it (prints its real roots).
 Calculates and prints its real roots.
 Note: Quadratic equations may have 0, 1 or 2 real roots.

 Examples:

 a	    b	c	roots
 2	    5	-3	x1=-3; x2=0.5
 -1	    3	0	x1=3; x2=0
 -0.5	4	-8	x1=x2=4
 5	    2	8	no real roots
 */

var a = -0.5,
    b = 4,
    c = -8,
    discriminant,
    firstRoot,
    secondRoot;

discriminant = (b * b) - (4 * a * c);
firstRoot = (-b + Math.sqrt(discriminant)) / (2 * a);
secondRoot = (-b - Math.sqrt(discriminant)) / (2 * a);

if(discriminant < 0){
 console.log('no real roots');
} else {
 if(discriminant > 0){
  console.log('x1 = ' + firstRoot + '; ' + 'x2 = ' + secondRoot);
 } else {
  console.log('x1 = x2 = ' + firstRoot);
 }
}