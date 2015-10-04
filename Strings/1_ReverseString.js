/*
 Write a JavaScript function that reverses a string and returns it.
 Example:

 input	output
 sample	elpmas
 */

console.log('-------------------------');
console.log('Problem 1. Reverse string');

var input = 'sample',
    output = '',
    i;

function reverseString(string) {
    var reversed = '',
        i;

    for (i = string.length - 1; i >= 0; i -= 1) {
        reversed += string[i];
    }

    return reversed;
}

output = reverseString(input);
console.log(input + ' -> ' + output);
