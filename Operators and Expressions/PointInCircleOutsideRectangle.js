/*
 Write an expression that checks for given point P(x, y) if it is within the circle K( (1,1), 3)
 and out of the rectangle R(top=1, left=-1, width=6, height=2).
 Examples:

 x	    y	    inside K & outside of R
 1	    4	    yes
 3	    2	    yes
 0	    1	    no
 4	    1	    no
 2	    0	    no
 4	    0	    no
 2.5	1.5	    yes
 3.5	1.5	    yes
 -100	-100	no
 */

if(isInsideCircle(1, 2, 1, 1, 3) && isOutsideRectangle(1, 2, 1, -1, -1, 5)){
 console.log('yes');
} else {
 console.log('no');
}

if(isInsideCircle(0, 1, 1, 1, 3) && isOutsideRectangle(0, 1, 1, -1, -1, 5)){
 console.log('yes');
} else {
 console.log('no');

}

function isInsideCircle(x, y, cx, cy, r){
 return (x - cx) * (x - cx) + (y - cy) * (y - cy) < r * r;
}

function isOutsideRectangle(x, y, top, bottom, left, right){
 return !(x >= left && x <= right && y <= top && y >= bottom);
}
