/*
Write a function that makes a deep copy of an object.
 The function should work for both primitive and reference types.
 */

console.log('------------------------');
console.log('Problem 3. Deep copy');

function deepCopy(obj) {
 var cloned = {};
 if(typeof obj !== 'object') {
  return obj;
 } else {
 for(var prop in obj) {
  if(typeof obj[prop] === 'object') {
   cloned[prop] = deepCopy(obj[prop]);
  } else {
   cloned[prop] = obj[prop];
  }
  }
  return cloned;
 }
}

var student = {
 firstName: 'Give',
 secondName: 'me',
 lastName: 'five',
 friends: {
  female: 'Jessica',
  male: 'John'
 }
};

console.log('Copy primitive type: ' + deepCopy(1));
console.log(deepCopy(student));