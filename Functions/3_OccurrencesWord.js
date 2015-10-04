/*
 Write a function that finds all the occurrences of word in a text.
 The search can be case sensitive or case insensitive.
 Use function overloading.
 */


console.log('-------------------------');
console.log('Problem 3. Occurrences of word');

var text = 'Hello hello hellO heLLo',
    word = 'hello';

console.log(text);
console.log('Searched occurrences: ' + word + ', case: insensitive -> ' + occurrencesInsensitive(text, word));
console.log('Searched occurrences: ' + word + ', case: sensitive -> ' + occurrencesInsensitive(text, word, true));


function occurrencesInsensitive(text, searchedWord, sensitiveCase) {
 var textAsArray,
     i, len, counter = 0;

 if(sensitiveCase === undefined){
  text = text.toLowerCase();
 }

 textAsArray = text.split(' ');

 for(i = 0, len = textAsArray.length; i < len; i += 1) {
if(searchedWord === textAsArray[i]) {
 counter += 1;
}
 }
 return counter;
}