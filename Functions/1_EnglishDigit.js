/*
 Write a function that returns the last digit of given integer as an English word.
 Examples:

 input	output
 512	two
 1024	four
 12309	nine
 */

console.log('Problem 1. English digit');
console.log('512 last digit as an English word: ' + lastDigigAsWord(512));
console.log('1024 last digit as an English word: ' + lastDigigAsWord(1024));
console.log('12309 last digit as an English word: ' + lastDigigAsWord(12309));
console.log('100 last digit as an English word: ' + lastDigigAsWord(100));

function lastDigigAsWord(number) {
var lastDigit = number % 10;
 switch(lastDigit) {
  case 0: return 'zero'; break;
  case 1: return 'one'; break;
  case 2: return 'two'; break;
  case 3: return 'three'; break;
  case 4: return 'four'; break;
  case 5: return 'five'; break;
  case 6: return 'six'; break;
  case 7: return 'seven'; break;
  case 8: return 'eight'; break;
  case 9: return 'nine'; break;
  default: return 'something is wrong'; break;
 }
}
