/*
 Write a function that reverses the digits of given decimal number.
 Example:

 input	output
 256	652
 123.45	54.321
 */

console.log('-----------------------------');
console.log('2. Reverse number');
console.log('256 reversed: ' + reverseNumber(256));
console.log('123.45 reversed: ' + reverseNumber(123.45));


function reverseNumber(number) {
 var originalNum = number.toString(),
     reversedNumber = '',
     i = originalNum.length - 1;
 for(i; i>=0; i -= 1) {
  reversedNumber += originalNum[i];
 }
 return reversedNumber;
}
