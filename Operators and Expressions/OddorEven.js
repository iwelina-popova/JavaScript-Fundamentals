//Write an expression that checks if given integer is odd or even.
/*Examples:

n	Odd?
3	true
2	false
-2	false
-1	true
0	false
    */

var evenNumber = 10,
    oddNumber = 11;

console.log(checkIfOdd(evenNumber));
console.log(checkIfOdd(oddNumber));

function checkIfOdd(number) {
    if(number % 2){
        return true;
    } else {
        return false;
    }
};