/*
 Write a function that puts the value of an object into the content/attributes of HTML tags.
 Add the function to the String.prototype
 Example 1:

 input

 var str = '<div data-bind-content="name"></div>';
 str.bind(str, {name: 'Steven'});
 output

 <div data-bind-content="name">Steven</div>
 Example 2:

 input

 var bindingString = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></à>'
 str.bind(str, {name: 'Elena', link: 'http://telerikacademy.com'});
 output

 <a data-bind-content="name" data-bind-href="link" data-bind-class="name" href="http://telerikacademy.com" class="Elena">Elena</à>
 */

console.log('-------------------------');
console.log('Problem 2. HTML binding');

var str = '<div data-bind-content="name"></div>',
    bindingString = '<a data-bind-content="name" data-bind-href="link" data-bind-class="name"></à>';

String.prototype.bind = function (obj) {
 var formatted = this;

 var contentKey = formatted.match(/data-bind-content=".+?"/)[0].match(/".+?"/)[0].replace(/"/g, '');
 formatted = formatted.replace(/>\s*?</, '>' + obj[contentKey] + '<');

 var matches = formatted.match(/(data-bind-(href|class)=".+?")/g);

 var len = matches === null ? 0 : matches.length;
 var kopon, kopon1;

 for (var i = 0; i < len; i+=1) {
  kopon1 = obj[matches[i].match(/".+?"/)[0].replace(/"/g, '')];
  kopon = matches[i].replace(/".+?"/, '"' + kopon1 + '"');
  formatted = formatted.replace(matches[i], kopon);

 }

 return formatted;
};

console.log(stri.bind({name: 'Pesho'}));
console.log(bindingString.bind({name: 'Elena', link: 'http://telerikacademy.com'}));