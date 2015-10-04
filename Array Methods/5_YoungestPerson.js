/*
 Write a function that finds the youngest male person in a given array of people and prints his full name
 Use only array methods and no regular loops (for, while)
 Use Array#find
 */

console.log('------------------------');
console.log('Problem 5. Youngest person');

var p1 = createPerson('Ivan', 'Ivanov', 20, false),
    p2 = createPerson('Todorka', 'Todorova', 12, true),
    p3 = createPerson('Mustang', 'Shelby', 15, false),
    p4 = createPerson('Lina', 'Dota', 8, true),
    p5 = createPerson('Az', 'Sum', 18, true),
    p6 = createPerson('Ti', 'Nesi', 45, false),
    p7 = createPerson('Nqkoi', 'Si', 35, false),
    p8 = createPerson('Nikoi', 'Li', 4, false),
    p9 = createPerson('John', 'Travolta', 67, false),
    p10 = createPerson('Kuma', 'Lisa', 55, true),
    people = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10],
    result;

if(!Array.prototype.find){
 Array.prototype.find = function(callback){
  var i,
      len;
  for(i = 0, len = this.length; i < len; i += 1){
   if(callback(this[i], i, this)){
    return this[i];
   }
  }
  return undefined;
 };
}

result = people.find(function(item){
 return Math.min(item.age) && item.gender === false;
});

console.log('Youngest male name: ' + result.firstname + ' ' + result.lastname);

function createPerson(fname, lname, age, gender) {
 return {
  firstname: fname,
  lastname: lname,
  age: age,
  gender: gender
 };
}