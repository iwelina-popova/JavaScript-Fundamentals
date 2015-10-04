/*
 Write a function that finds the youngest person in a given array
 of people and prints his/hers full name
 Each person has properties firstname, lastname and age.

 Example:

 var people = [
 { firstname : 'Gosho', lastname: 'Petrov', age: 32 },
 { firstname : 'Bay', lastname: 'Ivan', age: 81},… ];
 */

console.log('------------------------');
console.log('Problem 5. Youngest person');

var people = [
 { firstname: 'Gosho', lastname: 'Petrov', age: 32 },
 { firstname: 'Bay', lastname: 'Ivan', age: 81},
 { firstname: 'John', lastname: 'Johnson', age: 18}],
    youngestPerson,
    person;

youngestPerson = youngestPerson(people);

for(person in people) {
 console.log(people[person]);
}
console.log('Youngest person full name: ' + youngestPerson.firstname + ' ' + youngestPerson.lastname);

function youngestPerson(people) {
 var youngest,
     len, i;

 youngest = people[0];
 for(i = 1, len = people.length; i < len; i += 1) {
  if(youngest.age > people[i].age) {
   youngest = people[i];
  }
 }
 return youngest;
}