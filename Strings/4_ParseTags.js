/*
 You are given a text. Write a function that changes the text in all regions:

 <upcase>text</upcase> to uppercase.
 <lowcase>text</lowcase> to lowercase
 <mixcase>text</mixcase> to mix casing(random)
 Example: We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>.
 We <mixcase>don't</mixcase> have <lowcase>anything</lowcase> else.

 The expected result:
 We are LiVinG in a YELLOW SUBMARINE. We dOn'T have anything else.

 Note: Regions can be nested.
 */

console.log('-------------------------');
console.log('Problem 4. Parse tags');

var text = 'We are <mixcase>living</mixcase> in a <upcase>yellow submarine</upcase>.We <mixcase>don\'t</mixcase> have <lowcase>anything</lowcase> else.',
    changedText = '';

changedText = changedText(text);
console.log(changedText);

function changeText(string) {
 var result = '',
     i, len,
     mixcase;

 for (i = 0, len = string.length; i < len; i += 1) {

  if (string[i] !== '<') {
   result += string[i];
  } else {
   if (string[i + 1] === 'm') {
    i += 9;

    while (string[i] !== '<') {
     mixcase = Math.random() * 10;

     if (mixcase < 5) {
      result += string[i].toUpperCase();
     } else {
      result += string[i].toLowerCase();
     }
     i += 1;
    }
    i += 10;
   }
   if (string[i + 1] === 'u') {
    i += 8;

    while (string[i] !== '<') {
     result += string[i].toUpperCase();
     i += 1;
    }
    i += 9;
   }
   if (string[i + 1] === 'l') {
    i += 9;
    while (string[i] !== '<') {
     result += string[i].toLowerCase();
     i += 1;
    }
    i += 10;
   }
  }
 }
 return result;
}