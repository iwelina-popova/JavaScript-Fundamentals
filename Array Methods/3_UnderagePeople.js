/*
 Write a function that prints all underaged persons of an array of person
 Use Array#filter and Array#forEach
 Use only array methods and no regular loops (for, while)
 */

console.log('-----------------------');
console.log('Problem 3. Underage people');

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
    result = [];

result = people.filter(function(item){
 return item.age < 18;
});

result.forEach(function(item){
 console.log(item);
});

function createPerson(fname, lname, age, gender) {
 return {
  firstname: fname,
  lastname: lname,
  age: age,
  gender: gender
 };
}