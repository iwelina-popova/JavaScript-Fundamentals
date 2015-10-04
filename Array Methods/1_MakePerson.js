/*
 Write a function for creating persons.
 Each person must have firstname, lastname, age and gender
 (true is female, false is male)
 Generate an array with ten person with different names, ages and genders
 */

console.log('----------------------');
console.log('Problem 1. Make person');

var p1 = createPerson('Ivan', 'Ivanov', 20, false),
    p2 = createPerson('Todorka', 'Todorova', 12, true),
    p3 = createPerson('Mustang', 'Shelby', 15, false),
    p4 = createPerson('Lina', 'Dota', 78, true),
    p5 = createPerson('Az', 'Sum', 18, true),
    p6 = createPerson('Ti', 'Nesi', 45, false),
    p7 = createPerson('Nqkoi', 'Si', 35, false),
    p8 = createPerson('Nikoi', 'Li', 39, false),
    p9 = createPerson('John', 'Travolta', 67, false),
    p10 = createPerson('Kuma', 'Lisa', 55, true),
    people = [p1, p2, p3, p4, p5, p6, p7, p8, p9, p10];

people.forEach(function(item){
 console.log(item);
})

function createPerson(fname, lname, age, gender) {
 return {
  firstname: fname,
  lastname: lname,
  age: age,
  gender: gender
 };
}