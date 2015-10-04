/*
 Write a function that checks if an array of person contains only people of age (with age 18 or greater)
 Use only array methods and no regular loops (for, while)
 */

console.log('-------------------');
console.log('Problem 2. People of age');

var p1 = createPerson('Ivan', 'Ivanov', 20, false),
    p2 = createPerson('Todorka', 'Todorova', 12, true),
    p3 = createPerson('Mustang', 'Shelby', 15, false),
    p4 = createPerson('Lina', 'Dota', 8, true),
    p5 = createPerson('Az', 'Sum', 18, true),
    p6 = createPerson('Ti', 'Nesi', 10, false),
    p7 = createPerson('Nqkoi', 'Si', 35, false),
    p8 = createPerson('Nikoi', 'Li', 12, false),
    p9 = createPerson('John', 'Travolta', 67, false),
    p10 = createPerson('Kuma', 'Lisa', 55, true),
    firstArray = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10],
    secondArray = [p1, p5, p7],
    result1,
    result2;

result1 = firstArray.every(function(item){
 return item.age >= 18;
});

result2 = secondArray.every(function(item){
 return item.age >= 18;
});

console.log('Array contains only people of age 18 or greater: ' + result1);
console.log('Array contains only people of age 18 or greater: ' + result2);

function createPerson(fname, lname, age, gender) {
 return {
  firstname: fname,
  lastname: lname,
  age: age,
  gender: gender
 };
}