/*
 Write functions for working with shapes in standard Planar coordinate system.
 Points are represented by coordinates P(X, Y)
 Lines are represented by two points, marking their beginning and ending L(P1(X1,Y1), P2(X2,Y2))
 Calculate the distance between two points.
 Check if three segment lines can form a triangle.
 */

console.log('--------------------------');
console.log('Problem 1. Planar coordinates');

var x1 = 1, y1 = 3,
    x2 = -2, y2 = -2,
    x3 = 3, y3 = -1,
    x4 = -10, y4 = 10,
    p1 = point(x1, y1),
    p2 = point(x2, y2),
    p3 = point(x3, y3),
    p4 = point(x4, y4),
    l1 = line(p1, p2),
    l2 = line(p2, p3),
    l3 = line(p1, p3),
    l4 = line(p2, p4),
    tr1 = createTriangle(l1, l2, l3),
    tr2 = createTriangle(l1, l3, l4);

console.log('Point: p1(' + p1.x + ', ' + p1.y + ')');
console.log('Line: l1(p1(' + l1.A.x + ', ' + l1.A.y + '), (' + l1.B.x + ', ' + l1.B.y + '))');
console.log('Distance: ' + l1.Distance);
console.log('Can create triangle: ' + tr1);
console.log('Can create triangle: ' + tr2);

function point(x, y) {
  return { x: x,
           y: y }
}

function line(p1, p2) {
 return { A: p1,
          B: p2,
          Distance: calculateDistance(p1, p2)}
}

function calculateDistance(p1, p2) {
 var x = p1.x - p2.x,
     y = p1.y - p2.y;

 return Math.sqrt((x * x) + (y * y));
}

function createTriangle(l1, l2, l3) {
 if (l1.Distance < l2.Distance + l3.Distance &&
     l2.Distance < l1.Distance + l3.Distance &&
     l3.Distance < l1.Distance + l2.Distance) {
        return true;
 }
 return false;
}


