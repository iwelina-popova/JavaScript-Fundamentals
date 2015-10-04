/*
 Write a function that formats a string. The function should have placeholders, as shown in the example
 Add the function to the String.prototype
 Example:

 input	                                                                           output
 var options = {name: 'John'};
 'Hello, there! Are you #{name}?'.format(options);	                    'Hello, there! Are you John'
 var options = {name: 'John', age: 13};
 'My name is #{name} and I am #{age}-years-old').format(options);	'My name is John and I am 13-years-old'
 */

console.log('--------------------------');
console.log('Problem 1. Format with placeholders');

var firstString = 'Hello, there! Are you #{name}?',
    secondString = 'My name is #{name} and I am #{age}-years-old',
    firstOptions = {name: 'John', age: 13},
    secondOptions = {name: 'John'},
    result;

String.prototype.format = function (options){
 var result = this.replace(/#{([A-z]+)}/g, function($0, $1){
  return options[$1];
 });

 return result;
};

result = firstString.format(firstOptions);
console.log(result);
result = secondString.format(secondOptions);
console.log(result);


