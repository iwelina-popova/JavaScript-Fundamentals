/*
 Write an expression that checks for given integer if its third digit (right-to-left) is 7.
 Examples:

 n	        Third digit 7?
 5	        false
 701	    true
 1732	    true
 9703	    true
 877	    false
 777877	    false
 9999799	true
 */

var firstNumber = 701,
    secondNumber = 877,
    thirdNumber = 1711;

console.log(checkIfThirdDigitIs7(firstNumber));
console.log(checkIfThirdDigitIs7(secondNumber));
console.log(checkIfThirdDigitIs7(thirdNumber));

function checkIfThirdDigitIs7(number){
    return (Math.floor(number / 100) % 10) === 7;
}
