/*
 Write a function that creates a HTML <ul> using a template for every HTML <li>.
 The source of the list should be an array of elements.
 Replace all placeholders marked with –{…}– with the value of the corresponding property of the object.
 Example: HTML:

 <div data-type="template" id="list-item">
 <strong>-{name}-</strong> <span>-{age}-</span>
 /div>
 JavaScript:

 var people = [{name: 'Peter', age: 14},…];
 var tmpl = document.getElementById('list-item').innerHtml;
 var peopleList = generateList(people, template);
 //peopleList = '<ul><li><strong>Peter</strong> <span>14</span></li><li>…</li>…</ul>'
 */

console.log('-----------------------');
console.log('Problem 12. Generate list');

var people = [{name: 'Pesho', age: 100, gender: 'male', city: 'London'},
    {name: 'Goshovica', age: 18, gender: 'female', city: 'New York'}],
    tmpl = document.getElementById('list-item').innerHTML;

generateList();

function generateList() {
    var ul = document.createElement('ul'),
        person;

    for (person in people) {
        var li = document.createElement('li');
        li.innerHTML = format(tmpl, people[person]);
        ul.appendChild(li);
    }
    document.body.appendChild(ul);
};

function format(string, person){
    return string.replace(/\-{(\w+)}-/g, function (match, prop) {
        return person[prop] + ' ' || '';
    });
}