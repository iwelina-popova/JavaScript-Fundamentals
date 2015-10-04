/*
 Write a function that calculates the average age of all females, extracted from an array of persons
 Use Array#filter
 Use only array methods and no regular loops (for, while)
 */

console.log('---------------------');
console.log('Problem 4. Average age of females');

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
    result = [],
    sumAge,
    averageAge;

result = people.filter(function(item){
 return item.gender === true;
});

sumAge = result.reduce(function(sum, item){
 return sum + item.age;
}, 0);

averageAge = sumAge / result.length;
console.log('Average age of females is: ' + averageAge);

function createPerson(fname, lname, age, gender) {
 return {
  firstname: fname,
  lastname: lname,
  age: age,
  gender: gender
 };
}