/*
 Write an expression that calculates rectangle’s area by given width and height.
 Examples:

 width	height	area
 3   	4	    12
 2.5	3   	7.5
 5	    5       25
 */

var width = 3,
    height = 4;

console.log(calculateArea(width, height));

function calculateArea(width, heigth){
    return width * heigth;
}
