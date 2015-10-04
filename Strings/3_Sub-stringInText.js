/*
 Write a JavaScript function that finds how many times a substring is contained in a given text
 (perform case insensitive search).
 Example:

 The target sub-string is in

 The text is as follows: We are living in an yellow submarine. We don't have anything else.
 inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.

 The result is: 9
 */

console.log('-------------------------');
console.log('Problem 3. Sub-string in text');

var text = "We are living in an yellow submarine. We don't have anything else. inside the submarine is very tight. So we are drinking all the day. We will move out of it in 5 days.",
    substring = 'in';
    result;

result = countSubstring(text, substring);
console.log('The result is: ' + result);

function countSubstring(text, substring) {
    var counter = 0,
        i, len,
        index;

    for(i = 0, len = text.length; i < len; i += 1) {
        index = text.indexOf('in', i);
        if(index == -1) {
            return counter;
        } else {
            counter += 1;
            i = index + substring.length - 1;
        }
    }

    return counter;
}