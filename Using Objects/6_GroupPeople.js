/*
 Write a function that groups an array of people by age, first or last name.
 The function must return an associative array, with keys - the groups,
 and values - arrays with people in this groups
 Use function overloading (i.e. just one function)

 Example:

 var people = {…};
 var groupedByFname = group(people, 'firstname');
 var groupedByAge= group(people, 'age');
 */

console.log('------------------------');
console.log('Problem 6. Group People');

function buildPerson(fname, lname, age) {
 return {
  fname: fname,
  lname: lname,
  age: age
 };
}

var people = [
 { firstname : 'Asen', lastname: 'Asenov', age: 32 },
 { firstname : 'Stoiko', lastname: 'Ivanov', age: 11},
 { firstname : 'Bay', lastname: 'Ganio', age: 21},
 { firstname : 'John', lastname: 'Johnny', age: 11}
];

console.log("People:");
console.table(people);

console.log("By firstname:");
console.log(groupBy(people, 'firstname'));

console.log("By lastname:");
console.log(groupBy(people, 'lastname'));

console.log("By age:");
console.log(groupBy(people, 'age'));

function groupBy(arr, prop) {
 var groupedArr = [],
     i, len;

 for(i = 0, len = arr.length; i < len; i++){
  if(!groupedArr[arr[i][prop]]) {
   groupedArr[arr[i][prop]] = [];
  }
  groupedArr[arr[i][prop]].push(arr[i]);
 }

 return groupedArr;
}