/*
 Write a function that formats a string using placeholders.
 The function should work with up to 30 placeholders and all types.
 Examples:

 var str = stringFormat('Hello {0}!', 'Peter');
 //str = 'Hello Peter!';

 var frmt = '{0}, {1}, {0} text {2}';
 var str = stringFormat(frmt, 1, 'Pesho', 'Gosho');
 //str = '1, Pesho, 1 text Gosho'
 */

console.log('-----------------------');
console.log('Problem 11. String format');

var firstString = 'Hello {0}!',
    secondString = '{0}, {1}, {0} text {2}';

console.log(format(firstString, 'Peter'));
console.log(format(secondString, 1, 'Pesho', 'Gosho'));

function format(){
 var args = arguments,
     string = args[0],
     placeholder,
     i;

 for (i = 1; i < args.length; i += 1) {
  placeholder ='{' + (i - 1) + '}';

  while(string.indexOf(placeholder) > -1) {
   string = string.replace(placeholder, args[i]);
  }
 }

 return string;
}