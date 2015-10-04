/*
 Write a JavaScript function to check if in a given expression the brackets are put correctly.
 Example of correct expression: ((a+b)/5-d). Example of incorrect expression: )(a+b)).
 */

console.log('--------------------------');
console.log('Problem 2. Correct brackets');

var correctExpession = '((a+b)/5-d)',
    incorrentExpr = ')(a+b))',
    result;

result = checkBrackets(correctExpession);
console.log(correctExpession + ' -> ' + result);
result = checkBrackets(incorrentExpr);
console.log(incorrentExpr + ' -> ' + result);

function checkBrackets(expression) {
 var openBrackets = '(',
     closeBrackets = ')',
     openBrCounter = 0,
     closeBrCounter = 0,
     i, len;

 for(i = 0, len = expression.length; i < len; i += 1) {
  if(expression[i] == openBrackets) {
   openBrCounter += 1;
  } else if(expression[i] == closeBrackets) {
   closeBrCounter += 1;
  }
  if(openBrCounter < closeBrCounter) {
   return false;
  }
 }
 return true;
}