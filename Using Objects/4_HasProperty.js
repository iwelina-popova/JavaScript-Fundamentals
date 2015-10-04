/*
 Write a function that checks if a given object contains a given property.

 var obj  = …;
 var hasProp = hasProperty(obj, 'length');
 */

console.log('------------------------');
console.log('Problem 4. Has property');

var car = {
 mark: 'Nissan',
 model: 'GT-R',
 price: 'enough'
};

console.log(car);
console.log('Property: model: ', + hasProperty(car, 'model'));
console.log('Property: year: ' + hasProperty(car, 'year'));

function hasProperty (obj, property) {
 var hasProp = false;

 for (var prop in obj) {
  if (prop === property) {
   hasProp = true;
  }
 }
 return hasProp;
}