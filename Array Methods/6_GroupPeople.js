/*
 Write a function that groups an array of persons by first letter of first name and returns the groups as a JavaScript Object
 Use Array#reduce
 Use only array methods and no regular loops (for, while)
 Example:

 result = {
 'a': [{
 firstname: 'Asen',
 .......
}, {
    firstname: 'Anakonda',
    .......
}],
'j': [{
    firstname: 'John',
    ........
}]
};
 */

console.log('--------------------');
console.log('Problem 6. Group people');

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

result = people.reduce(function(obj, item) {
    if (obj[item.firstname[0]]) {
        obj[item.firstname[0]].push(item);
    } else {
        obj[item.firstname[0]] = [item];
    }
    return obj;
}, {});

console.log(result);

function createPerson(fname, lname, age, gender) {
    return {
        firstname: fname,
        lastname: lname,
        age: age,
        gender: gender
    };
}